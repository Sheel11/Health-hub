import pandas as pd
import numpy as np
from app.models.models_utils import MODEL_PATH
from training.train_utils import SYMPTOM_DESCRIPTION_FILE_PATH , SYMPTOM_PRECAUTION_FILE_PATH






disease = ['(vertigo) paroymsal  positional vertigo', 'acne', 'aids',
 'alcoholic hepatitis' ,'allergy' ,'arthritis', 'bronchial asthma',
 'cervical spondylosis', 'chicken pox', 'chronic cholestasis', 'common cold',
 'dengue' ,'diabetes' ,'dimorphic hemmorhoids(piles)', 'drug reaction',
 'fungal infection' ,'gastroenteritis', 'gerd', 'heart attack' ,'hepatitis a',
 'hepatitis b' ,'hepatitis c', 'hepatitis d', 'hepatitis e', 'hypertension',
 'hyperthyroidism', 'hypoglycemia', 'hypothyroidism', 'impetigo', 'jaundice',
 'malaria' ,'migraine' ,'osteoarthristis', 'paralysis (brain hemorrhage)',
 'peptic ulcer diseae', 'pneumonia', 'psoriasis' ,'tuberculosis' ,'typhoid',
 'urinary tract infection', 'varicose veins']

categories = ['enlarged thyroid', 'constipation', 'runny nose', 
             'muscle pain', 'dehydration', 'blurred and distorted vision',
               'abdominal pain', 'continuous feel of urine', 
               'swollen legs', 'muscle weakness', 'swelling of stomach', 
               'acidity', 'swelled lymph nodes', 'toxic look (typhos)', 
               'receiving unsterile injections', 'nodal skin eruptions', 
               'blood in sputum', 'mild fever', 'yellow crust ooze', 
               'receiving blood transfusion', 'indigestion', 
               'unsteadiness', 'loss of balance', 'spinning movements', 
               'knee pain', 'diarrhoea', 'itching', 'puffy face and eyes',
                 'stomach pain', 'movement stiffness', 'redness of eyes', 
                 'coma', 'brittle nails', 'red spots over body', 
                 'weight gain', 'red sore around nose', 'bruising', 
                 'cough', 'swollen blood vessels', 'dizziness', 
                 'palpitations', 'dark urine', 'burning micturition', 
                 'weakness of one body side', 'yellowing of eyes', 
                 'sunken eyes', 'cramps', 'ulcers on tongue', 'bloody stool', 'distention of abdomen', 'swelling joints', 'patches in throat', 'abnormal menstruation', 'internal itching', 'small dents in nails', 'loss of appetite', 'polyuria', 'blister', 'pus filled pimples', 'watering from eyes', 'mucoid sputum', 'slurred speech', 'altered sensorium', 'joint pain', 'sinus pressure', 'belly pain', 'dischromic  patches', 'restlessness', 'throat irritation', 'irregular sugar level', 'depression', 'visual disturbances', 'yellow urine', 'skin peeling', 'neck pain', 'rusty sputum', 'loss of smell', 'obesity', 'chest pain', 'high fever', 'sweating', 'fatigue', 'chills', 'yellowish skin', 'stomach bleeding', 'painful walking', 'swollen extremeties', 'breathlessness', 'excessive hunger', 'lethargy', 'extra marital contacts', 'pain behind the eyes', 'pain in anal region', 'congestion', 'muscle wasting', 'bladder discomfort', 'back pain', 'anxiety', 'lack of concentration', 'scurring', 'fluid overload', 'irritation in anus', 'acute liver failure', 'history of alcohol consumption', 'fast heart rate', 'foul smell of urine', 'family history', 'silver like dusting', 'malaise', 'vomiting', 'weight loss', 'weakness in limbs', 'stiff neck', 'mood swings', 'hip joint pain', 'increased appetite', 'skin rash', 'inflammatory nails', 'headache', 'blackheads', 'spotting  urination', 'nausea', 'prominent veins on calf', 'passage of gases', 'phlegm', 'drying and tingling lips', 'cold hands and feets', 'pain during bowel movements', 'irritability', 'shivering', 'continuous sneezing']


df_precautions = pd.read_csv(SYMPTOM_PRECAUTION_FILE_PATH)
df_description = pd.read_csv(SYMPTOM_DESCRIPTION_FILE_PATH)

df_precautions['Disease'] = df_precautions['Disease'].apply(lambda x : x.strip().lower())
df_description['Disease'] = df_description['Disease'].apply(lambda x : x.strip().lower())


def get_disease(data : dict , model):
    a_data = pd.DataFrame([[0]*131] , columns=categories)
    for key , value in data.items():
        if value != 'None': 
             a_data[value] = 1

    prdiction_probabilitys = model.predict_proba(a_data.values)

    top_idx = np.argsort(prdiction_probabilitys[0])[-1:][0]
    top_proba = np.sort(prdiction_probabilitys[0])[-1:][0]


    print(top_idx)
    print(top_proba)

    discription = None 
    precautions_list = None 

    top_diseases = disease[top_idx]
    
    if(top_diseases in df_description['Disease'].unique()):
        discription = df_description[df_description['Disease'] == top_diseases]
        # print(type(discription))
        discription = discription.iloc[0 , 1]

    if(top_diseases in df_precautions['Disease'].unique()):
        idx = np.where(df_precautions['Disease'] == top_diseases)[0][0]
        precautions_list = []
        for j in range(1 , len(df_precautions.iloc[idx])):
            precautions_list.append(df_precautions.iloc[idx,j])

    return {
        'Diseases' : top_diseases,
        'Confidence' : top_proba*100,
        'Description' : discription,
        'Precautions' : precautions_list
    }


    
