import joblib
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.utils import shuffle
from sklearn.model_selection import train_test_split , KFold , cross_val_score,GridSearchCV
from sklearn.svm import SVC  
from sklearn.metrics import recall_score ,accuracy_score , confusion_matrix , f1_score
from sklearn.linear_model import LogisticRegression
from sklearn.naive_bayes import GaussianNB
from sklearn.neighbors import KNeighborsClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier , GradientBoostingClassifier , ExtraTreesClassifier
from sklearn.ensemble import BaggingClassifier , AdaBoostClassifier , VotingClassifier
from sklearn.preprocessing import LabelEncoder
from training.train_utils import DATA_FILE_PATH , SYMPTOM_DESCRIPTION_FILE_PATH , SYMPTOM_PRECAUTION_FILE_PATH

df = pd.read_csv(DATA_FILE_PATH)
df = shuffle(df, random_state = 42)
precaution = pd.read_csv(SYMPTOM_PRECAUTION_FILE_PATH)
descrip = pd.read_csv(SYMPTOM_DESCRIPTION_FILE_PATH)



print(df.shape)



def process(x):
    x = x.str.strip()
    x = x.str.lower()
    return x
precaution = precaution.apply(process)
descrip = descrip.apply(process)


df = df.apply(lambda x : x.str.strip())
df = df.replace(r'_+' , ' ' , regex=True)
df['Disease'] = df['Disease'].str.lower()


df = df.fillna(0)

cat = set()
cols = df.columns
cols = cols[1:]
for col in cols:
    c_cat = list(df[col].value_counts().index)
    cat.update(c_cat)

cat = list(cat)
cat = cat[1:]

df_f = pd.DataFrame()
df_f['disease'] = df['Disease']
df_f[cat] = 0
for index , row in df.iterrows():
    for symtom in df.columns[1:]:
        if row[symtom] != 0:
            df_f.loc[index , row[symtom]] = 1


X = df_f.drop(columns=['disease']).values
y = df_f['disease'].values
X_train , X_test , y_train , y_test  = train_test_split(X,y , test_size=0.2 , random_state=42)
print(X_train.shape , X_test.shape , y_test.shape , y_train.shape)

le = LabelEncoder()
y_train = le.fit_transform(y_train)
y_test = le.transform(y_test)

model = ExtraTreesClassifier()
model.fit(X_train , y_train)

joblib.dump(model , 'ExtraTrees.joblib')
