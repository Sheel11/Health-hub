import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const baseurl = import.meta.env.VITE_BASE_URL


const Predict = () => {
  const [symptoms1, setSymptoms1]=useState("None");
  const [symptoms2, setSymptoms2]=useState("None");
  const [symptoms3, setSymptoms3]=useState("None");
  const [symptoms4, setSymptoms4]=useState("None");

  const navigate = useNavigate();

  const collectData = async () => {
    console.warn(symptoms1, symptoms2, symptoms3, symptoms4);
    let user = localStorage.getItem('user');
    user = JSON.parse(user);
    try {
        let result = await fetch(`${baseurl}/predict`, {
            method: 'post',
            body: JSON.stringify({ symptoms1, symptoms2, symptoms3, symptoms4 }),
            headers: {
                'Content-Type': 'application/json',
                  "Authorization": `Bearer ${user.token}`,
            },
        });


        if (!result.ok) {
            localStorage.clear('user');
            localStorage.clear('disease');
            throw new Error(`HTTP error! Detail : ${result.detail}`);
        }

        let jsonResponse = await result.text();

        // Replace 'NaN' with null
        jsonResponse = jsonResponse.replace(/NaN/g, 'null');

        result = JSON.parse(jsonResponse);

        console.log("Result:", result); // Log the result object to check its structure

        // Handle NaN values in precautions array
        result.Precautions =  result.Precautions.filter(precaution => typeof precaution === 'string');
        
        
        console.warn(result);
        localStorage.setItem("disease", JSON.stringify(result));
        if (result) {
            navigate('/result');
        }
    } catch (error) {
        console.error('Error:', error);
        toast.error("Token Expaire Please Login Again" ,{
            onClose : () => navigate('/signin'),
        });
       

    }
}

  return (
    <>
    <ToastContainer/>
    <div className="flex flex-col items-center min-h-screen py-12 gap-4 bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-8">
          <h1 className="text-4xl font-bold text-center mb-4">Disease Predictor</h1>
          <p className="text-gray-500 dark:text-gray-400 text-center mb-8">
            Enter your symptoms and we will predict the possible disease.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex flex-col">
              <label htmlFor="symptom1" className="text-sm font-semibold text-gray-600">Select Symptom 1</label>
              <select 
              id="symptoms1" 
              className="w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              value={symptoms1}
              onChange={(e)=>setSymptoms1(e.target.value)}
              required
              >
              <option value="">Select Symptom</option>
                <option value="itching">itching</option>
                <option value="skin rash">skin rash</option>
                <option value="nodal skin eruptions">nodal skin eruptions</option>
                <option value="continuous sneezing">continuous sneezing</option>
                <option value="shivering">shivering</option>
                <option value="joint pain">joint pain</option>
<option value="stomach pain">stomach pain</option>
<option value="acidity">acidity</option>
<option value="ulcers on tongue">ulcers on tongue</option>
<option value="muscle wasting">muscle wasting</option>
<option value="vomiting">vomiting</option>
<option value="burning micturition">burning micturition</option>
<option value="fatigue">fatigue</option>
<option value="weight gain">weight gain</option>
<option value="anxiety">anxiety</option>
<option value="cold hands and feets">cold hands and feet</option>
<option value="mood swings">mood swings</option>
<option value="weight loss">weight loss</option>
<option value="restlessness">restlessness</option>
<option value="lethargy">lethargy</option>
<option value="patches in throat">patches in throat</option>
<option value="irregular sugar level">irregular sugar level</option>
<option value="cough">cough</option>
<option value="high fever">high fever</option>
<option value="sunken eyes">sunken eyes</option>
<option value="breathlessness">breathlessness</option>
<option value="sweating">sweating</option>
<option value="dehydration">dehydration</option>
<option value="indigestion">indigestion</option>
<option value="headache">headache</option>
<option value="yellowish skin">yellowish skin</option>
<option value="dark urine">dark urine</option>
<option value="nausea">nausea</option>
<option value="loss of appetite">loss of appetite</option>
<option value="pain behind the eyes">pain behind the eyes</option>
<option value="back pain">back pain</option>
<option value="constipation">constipation</option>
<option value="abdominal pain">abdominal pain</option>
<option value="diarrhoea">diarrhoea</option>
<option value="mild fever">mild fever</option>
<option value="yellow urine">yellow urine</option>
<option value="yellowing of eyes">yellowing of eyes</option>
<option value="acute liver failure">acute liver failure</option>
<option value="fluid overload">fluid overload</option>
<option value="swelling of stomach">swelling of stomach</option>
<option value="swelled lymph nodes">swelled lymph nodes</option>
<option value="malaise">malaise</option>
<option value="blurred and distorted vision">blurred and distorted vision</option>
<option value="phlegm">phlegm</option>
<option value="throat irritation">throat irritation</option>
<option value="redness of eyes">redness of eyes</option>
<option value="sinus pressure">sinus pressure</option>
<option value="runny nose">runny nose</option>
<option value="congestion">congestion</option>
<option value="chest pain">chest pain</option>
<option value="weakness in limbs">weakness in limbs</option>
<option value="fast heart rate">fast heart rate</option>
<option value="pain during bowel movements">pain during bowel movements</option>
<option value="pain in anal region">pain in anal region</option>
<option value="bloody stool">bloody stool</option>
<option value="irritation in anus">irritation in anus</option>
<option value="neck pain">neck pain</option>
<option value="dizziness">dizziness</option>
<option value="cramps">cramps</option>
<option value="bruising">bruising</option>
<option value="obesity">obesity</option>
<option value="swollen legs">swollen legs</option>
<option value="swollen blood vessels">swollen blood vessels</option>
<option value="puffy face and eyes">puffy face and eyes</option>
<option value="enlarged thyroid">enlarged thyroid</option>
<option value="brittle nails">brittle nails</option>
<option value="swollen extremeties">swollen extremities</option>
<option value="excessive hunger">excessive hunger</option>
<option value="extra marital contacts">extra marital contacts</option>
<option value="drying and tingling lips">drying and tingling lips</option>
<option value="slurred speech">slurred speech</option>
<option value="knee pain">knee pain</option>
<option value="hip joint pain">hip joint pain</option>
<option value="muscle weakness">muscle weakness</option>
<option value="stiff neck">stiff neck</option>
<option value="swelling joints">swelling joints</option>
<option value="movement stiffness">movement stiffness</option>
<option value="spinning movements">spinning movements</option>
<option value="loss of balance">loss of balance</option>
<option value="unsteadiness">unsteadiness</option>
<option value="weakness of one body side">weakness of one body side</option>
<option value="loss of smell">loss of smell</option>
<option value="bladder discomfort">bladder discomfort</option>
<option value="continuous feel of urine">continuous feel of urine</option>
<option value="passage of gases">passage of gases</option>
<option value="internal itching">internal itching</option>
<option value="toxic look (typhos)">toxic look (typhos)</option>
<option value="depression">depression</option>
<option value="irritability">irritability</option>
<option value="muscle pain">muscle pain</option>
<option value="altered sensorium">altered sensorium</option>
<option value="red spots over body">red spots over body</option>
<option value="belly pain">belly pain</option>
<option value="abnormal menstruation">abnormal menstruation</option>
<option value="watering from eyes">watering from eyes</option>
<option value="increased appetite">increased appetite</option>
<option value="polyuria">polyuria</option>
<option value="family history">family history</option>
<option value="mucoid sputum">mucoid sputum</option>
<option value="rusty sputum">rusty sputum</option>
<option value="lack of concentration">lack of concentration</option>
<option value="visual disturbances">visual disturbances</option>
<option value="receiving blood transfusion">receiving blood transfusion</option>
<option value="receiving unsterile injections">receiving unsterile injections</option>
<option value="coma">coma</option>
                
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="symptom2" className="text-sm font-semibold text-gray-600">Select Symptom 2</label>
              <select 
              id="symptoms2" 
              className="w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              value={symptoms2}
              onChange={(e)=>setSymptoms2(e.target.value)}
              required
              >
              <option value="">Select Symptom</option>
              <option value="runny nose">runny nose</option>
                <option value="skin rash">skin rash</option>
                <option value="nodal skin eruptions">nodal skin eruptions</option>
                <option value="continuous sneezing">continuous sneezing</option>
                <option value="shivering">shivering</option>
                <option value="joint pain">joint pain</option>
<option value="stomach pain">stomach pain</option>
<option value="acidity">acidity</option>
<option value="ulcers on tongue">ulcers on tongue</option>
<option value="muscle wasting">muscle wasting</option>
<option value="vomiting">vomiting</option>
<option value="burning micturition">burning micturition</option>
<option value="fatigue">fatigue</option>
<option value="weight gain">weight gain</option>
<option value="anxiety">anxiety</option>
<option value="cold hands and feets">cold hands and feet</option>
<option value="mood swings">mood swings</option>
<option value="weight loss">weight loss</option>
<option value="restlessness">restlessness</option>
<option value="lethargy">lethargy</option>
<option value="patches in throat">patches in throat</option>
<option value="irregular sugar level">irregular sugar level</option>
<option value="cough">cough</option>
<option value="high fever">high fever</option>
<option value="sunken eyes">sunken eyes</option>
<option value="breathlessness">breathlessness</option>
<option value="sweating">sweating</option>
<option value="dehydration">dehydration</option>
<option value="indigestion">indigestion</option>
<option value="headache">headache</option>
<option value="yellowish skin">yellowish skin</option>
<option value="dark urine">dark urine</option>
<option value="nausea">nausea</option>
<option value="loss of appetite">loss of appetite</option>
<option value="pain behind the eyes">pain behind the eyes</option>
<option value="back pain">back pain</option>
<option value="constipation">constipation</option>
<option value="abdominal pain">abdominal pain</option>
<option value="diarrhoea">diarrhoea</option>
<option value="mild fever">mild fever</option>
<option value="yellow urine">yellow urine</option>
<option value="yellowing of eyes">yellowing of eyes</option>
<option value="acute liver failure">acute liver failure</option>
<option value="fluid overload">fluid overload</option>
<option value="swelling of stomach">swelling of stomach</option>
<option value="swelled lymph nodes">swelled lymph nodes</option>
<option value="malaise">malaise</option>
<option value="blurred and distorted vision">blurred and distorted vision</option>
<option value="phlegm">phlegm</option>
<option value="throat irritation">throat irritation</option>
<option value="redness of eyes">redness of eyes</option>
<option value="sinus pressure">sinus pressure</option>
<option value="runny nose">runny nose</option>
<option value="congestion">congestion</option>
<option value="chest pain">chest pain</option>
<option value="weakness in limbs">weakness in limbs</option>
<option value="fast heart rate">fast heart rate</option>
<option value="pain during bowel movements">pain during bowel movements</option>
<option value="pain in anal region">pain in anal region</option>
<option value="bloody stool">bloody stool</option>
<option value="irritation in anus">irritation in anus</option>
<option value="neck pain">neck pain</option>
<option value="dizziness">dizziness</option>
<option value="cramps">cramps</option>
<option value="bruising">bruising</option>
<option value="obesity">obesity</option>
<option value="swollen legs">swollen legs</option>
<option value="swollen blood vessels">swollen blood vessels</option>
<option value="puffy face and eyes">puffy face and eyes</option>
<option value="enlarged thyroid">enlarged thyroid</option>
<option value="brittle nails">brittle nails</option>
<option value="swollen extremeties">swollen extremities</option>
<option value="excessive hunger">excessive hunger</option>
<option value="extra marital contacts">extra marital contacts</option>
<option value="drying and tingling lips">drying and tingling lips</option>
<option value="slurred speech">slurred speech</option>
<option value="knee pain">knee pain</option>
<option value="hip joint pain">hip joint pain</option>
<option value="muscle weakness">muscle weakness</option>
<option value="stiff neck">stiff neck</option>
<option value="swelling joints">swelling joints</option>
<option value="movement stiffness">movement stiffness</option>
<option value="spinning movements">spinning movements</option>
<option value="loss of balance">loss of balance</option>
<option value="unsteadiness">unsteadiness</option>
<option value="weakness of one body side">weakness of one body side</option>
<option value="loss of smell">loss of smell</option>
<option value="bladder discomfort">bladder discomfort</option>
<option value="continuous feel of urine">continuous feel of urine</option>
<option value="passage of gases">passage of gases</option>
<option value="internal itching">internal itching</option>
<option value="toxic look (typhos)">toxic look (typhos)</option>
<option value="depression">depression</option>
<option value="irritability">irritability</option>
<option value="muscle pain">muscle pain</option>
<option value="altered sensorium">altered sensorium</option>
<option value="red spots over body">red spots over body</option>
<option value="belly pain">belly pain</option>
<option value="abnormal menstruation">abnormal menstruation</option>
<option value="watering from eyes">watering from eyes</option>
<option value="increased appetite">increased appetite</option>
<option value="polyuria">polyuria</option>
<option value="family history">family history</option>
<option value="mucoid sputum">mucoid sputum</option>
<option value="rusty sputum">rusty sputum</option>
<option value="lack of concentration">lack of concentration</option>
<option value="visual disturbances">visual disturbances</option>
<option value="receiving blood transfusion">receiving blood transfusion</option>
<option value="receiving unsterile injections">receiving unsterile injections</option>
<option value="coma">coma</option>
                
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="symptom3" className="text-sm font-semibold text-gray-600">Select Symptom 3</label>
              <select 
              id="symptoms3" 
              className="w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              value={symptoms3}
              onChange={(e)=>setSymptoms3(e.target.value)}
              required
              >
              <option value="">Select Symptom</option>
              <option value="chest pain">chest pain</option>
                <option value="skin rash">skin rash</option>
                <option value="nodal skin eruptions">nodal skin eruptions</option>
                <option value="continuous sneezing">continuous sneezing</option>
                <option value="shivering">shivering</option>
                <option value="joint pain">joint pain</option>
<option value="stomach pain">stomach pain</option>
<option value="acidity">acidity</option>
<option value="ulcers on tongue">ulcers on tongue</option>
<option value="muscle wasting">muscle wasting</option>
<option value="vomiting">vomiting</option>
<option value="burning micturition">burning micturition</option>
<option value="fatigue">fatigue</option>
<option value="weight gain">weight gain</option>
<option value="anxiety">anxiety</option>
<option value="cold hands and feets">cold hands and feet</option>
<option value="mood swings">mood swings</option>
<option value="weight loss">weight loss</option>
<option value="restlessness">restlessness</option>
<option value="lethargy">lethargy</option>
<option value="patches in throat">patches in throat</option>
<option value="irregular sugar level">irregular sugar level</option>
<option value="cough">cough</option>
<option value="high fever">high fever</option>
<option value="sunken eyes">sunken eyes</option>
<option value="breathlessness">breathlessness</option>
<option value="sweating">sweating</option>
<option value="dehydration">dehydration</option>
<option value="indigestion">indigestion</option>
<option value="headache">headache</option>
<option value="yellowish skin">yellowish skin</option>
<option value="dark urine">dark urine</option>
<option value="nausea">nausea</option>
<option value="loss of appetite">loss of appetite</option>
<option value="pain behind the eyes">pain behind the eyes</option>
<option value="back pain">back pain</option>
<option value="constipation">constipation</option>
<option value="abdominal pain">abdominal pain</option>
<option value="diarrhoea">diarrhoea</option>
<option value="mild fever">mild fever</option>
<option value="yellow urine">yellow urine</option>
<option value="yellowing of eyes">yellowing of eyes</option>
<option value="acute liver failure">acute liver failure</option>
<option value="fluid overload">fluid overload</option>
<option value="swelling of stomach">swelling of stomach</option>
<option value="swelled lymph nodes">swelled lymph nodes</option>
<option value="malaise">malaise</option>
<option value="blurred and distorted vision">blurred and distorted vision</option>
<option value="phlegm">phlegm</option>
<option value="throat irritation">throat irritation</option>
<option value="redness of eyes">redness of eyes</option>
<option value="sinus pressure">sinus pressure</option>
<option value="runny nose">runny nose</option>
<option value="congestion">congestion</option>
<option value="chest pain">chest pain</option>
<option value="weakness in limbs">weakness in limbs</option>
<option value="fast heart rate">fast heart rate</option>
<option value="pain during bowel movements">pain during bowel movements</option>
<option value="pain in anal region">pain in anal region</option>
<option value="bloody stool">bloody stool</option>
<option value="irritation in anus">irritation in anus</option>
<option value="neck pain">neck pain</option>
<option value="dizziness">dizziness</option>
<option value="cramps">cramps</option>
<option value="bruising">bruising</option>
<option value="obesity">obesity</option>
<option value="swollen legs">swollen legs</option>
<option value="swollen blood vessels">swollen blood vessels</option>
<option value="puffy face and eyes">puffy face and eyes</option>
<option value="enlarged thyroid">enlarged thyroid</option>
<option value="brittle nails">brittle nails</option>
<option value="swollen extremeties">swollen extremities</option>
<option value="excessive hunger">excessive hunger</option>
<option value="extra marital contacts">extra marital contacts</option>
<option value="drying and tingling lips">drying and tingling lips</option>
<option value="slurred speech">slurred speech</option>
<option value="knee pain">knee pain</option>
<option value="hip joint pain">hip joint pain</option>
<option value="muscle weakness">muscle weakness</option>
<option value="stiff neck">stiff neck</option>
<option value="swelling joints">swelling joints</option>
<option value="movement stiffness">movement stiffness</option>
<option value="spinning movements">spinning movements</option>
<option value="loss of balance">loss of balance</option>
<option value="unsteadiness">unsteadiness</option>
<option value="weakness of one body side">weakness of one body side</option>
<option value="loss of smell">loss of smell</option>
<option value="bladder discomfort">bladder discomfort</option>
<option value="continuous feel of urine">continuous feel of urine</option>
<option value="passage of gases">passage of gases</option>
<option value="internal itching">internal itching</option>
<option value="toxic look (typhos)">toxic look (typhos)</option>
<option value="depression">depression</option>
<option value="irritability">irritability</option>
<option value="muscle pain">muscle pain</option>
<option value="altered sensorium">altered sensorium</option>
<option value="red spots over body">red spots over body</option>
<option value="belly pain">belly pain</option>
<option value="abnormal menstruation">abnormal menstruation</option>
<option value="watering from eyes">watering from eyes</option>
<option value="increased appetite">increased appetite</option>
<option value="polyuria">polyuria</option>
<option value="family history">family history</option>
<option value="mucoid sputum">mucoid sputum</option>
<option value="rusty sputum">rusty sputum</option>
<option value="lack of concentration">lack of concentration</option>
<option value="visual disturbances">visual disturbances</option>
<option value="receiving blood transfusion">receiving blood transfusion</option>
<option value="receiving unsterile injections">receiving unsterile injections</option>
<option value="coma">coma</option>
                
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="symptom4" className="text-sm font-semibold text-gray-600">Select Symptom 4</label>
              <select 
              id="symptoms4" 
              className="w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              value={symptoms4}
              onChange={(e)=>setSymptoms4(e.target.value)}
              required
              >
              <option value="">Select Symptom</option>
              <option value="high fever">high fever</option>
                <option value="skin rash">skin rash</option>
                <option value="nodal skin eruptions">nodal skin eruptions</option>
                <option value="continuous sneezing">continuous sneezing</option>
                <option value="shivering">shivering</option>
                <option value="joint pain">joint pain</option>
<option value="stomach pain">stomach pain</option>
<option value="acidity">acidity</option>
<option value="ulcers on tongue">ulcers on tongue</option>
<option value="muscle wasting">muscle wasting</option>
<option value="vomiting">vomiting</option>
<option value="burning micturition">burning micturition</option>
<option value="fatigue">fatigue</option>
<option value="weight gain">weight gain</option>
<option value="anxiety">anxiety</option>
<option value="cold hands and feets">cold hands and feet</option>
<option value="mood swings">mood swings</option>
<option value="weight loss">weight loss</option>
<option value="restlessness">restlessness</option>
<option value="lethargy">lethargy</option>
<option value="patches in throat">patches in throat</option>
<option value="irregular sugar level">irregular sugar level</option>
<option value="cough">cough</option>
<option value="high fever">high fever</option>
<option value="sunken eyes">sunken eyes</option>
<option value="breathlessness">breathlessness</option>
<option value="sweating">sweating</option>
<option value="dehydration">dehydration</option>
<option value="indigestion">indigestion</option>
<option value="headache">headache</option>
<option value="yellowish skin">yellowish skin</option>
<option value="dark urine">dark urine</option>
<option value="nausea">nausea</option>
<option value="loss of appetite">loss of appetite</option>
<option value="pain behind the eyes">pain behind the eyes</option>
<option value="back pain">back pain</option>
<option value="constipation">constipation</option>
<option value="abdominal pain">abdominal pain</option>
<option value="diarrhoea">diarrhoea</option>
<option value="mild fever">mild fever</option>
<option value="yellow urine">yellow urine</option>
<option value="yellowing of eyes">yellowing of eyes</option>
<option value="acute liver failure">acute liver failure</option>
<option value="fluid overload">fluid overload</option>
<option value="swelling of stomach">swelling of stomach</option>
<option value="swelled lymph nodes">swelled lymph nodes</option>
<option value="malaise">malaise</option>
<option value="blurred and distorted vision">blurred and distorted vision</option>
<option value="phlegm">phlegm</option>
<option value="throat irritation">throat irritation</option>
<option value="redness of eyes">redness of eyes</option>
<option value="sinus pressure">sinus pressure</option>
<option value="runny nose">runny nose</option>
<option value="congestion">congestion</option>
<option value="chest pain">chest pain</option>
<option value="weakness in limbs">weakness in limbs</option>
<option value="fast heart rate">fast heart rate</option>
<option value="pain during bowel movements">pain during bowel movements</option>
<option value="pain in anal region">pain in anal region</option>
<option value="bloody stool">bloody stool</option>
<option value="irritation in anus">irritation in anus</option>
<option value="neck pain">neck pain</option>
<option value="dizziness">dizziness</option>
<option value="cramps">cramps</option>
<option value="bruising">bruising</option>
<option value="obesity">obesity</option>
<option value="swollen legs">swollen legs</option>
<option value="swollen blood vessels">swollen blood vessels</option>
<option value="puffy face and eyes">puffy face and eyes</option>
<option value="enlarged thyroid">enlarged thyroid</option>
<option value="brittle nails">brittle nails</option>
<option value="swollen extremeties">swollen extremities</option>
<option value="excessive hunger">excessive hunger</option>
<option value="extra marital contacts">extra marital contacts</option>
<option value="drying and tingling lips">drying and tingling lips</option>
<option value="slurred speech">slurred speech</option>
<option value="knee pain">knee pain</option>
<option value="hip joint pain">hip joint pain</option>
<option value="muscle weakness">muscle weakness</option>
<option value="stiff neck">stiff neck</option>
<option value="swelling joints">swelling joints</option>
<option value="movement stiffness">movement stiffness</option>
<option value="spinning movements">spinning movements</option>
<option value="loss of balance">loss of balance</option>
<option value="unsteadiness">unsteadiness</option>
<option value="weakness of one body side">weakness of one body side</option>
<option value="loss of smell">loss of smell</option>
<option value="bladder discomfort">bladder discomfort</option>
<option value="continuous feel of urine">continuous feel of urine</option>
<option value="passage of gases">passage of gases</option>
<option value="internal itching">internal itching</option>
<option value="toxic look (typhos)">toxic look (typhos)</option>
<option value="depression">depression</option>
<option value="irritability">irritability</option>
<option value="muscle pain">muscle pain</option>
<option value="altered sensorium">altered sensorium</option>
<option value="red spots over body">red spots over body</option>
<option value="belly pain">belly pain</option>
<option value="abnormal menstruation">abnormal menstruation</option>
<option value="watering from eyes">watering from eyes</option>
<option value="increased appetite">increased appetite</option>
<option value="polyuria">polyuria</option>
<option value="family history">family history</option>
<option value="mucoid sputum">mucoid sputum</option>
<option value="rusty sputum">rusty sputum</option>
<option value="lack of concentration">lack of concentration</option>
<option value="visual disturbances">visual disturbances</option>
<option value="receiving blood transfusion">receiving blood transfusion</option>
<option value="receiving unsterile injections">receiving unsterile injections</option>
<option value="coma">coma</option>
                
                {/* Add more options as needed */}
              </select>
            </div>
          </div>
          <button className="cursor-pointer w-full bg-black text-white hover:bg-gray-900 py-3 px-6 rounded mt-6"
          onClick={collectData}
          >
  Predict
</button>

        </div>
      </div>
    </div>
    </>
  );
};

export default Predict;
