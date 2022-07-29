import numpy as np
from flask import Flask, request, jsonify, render_template
import pickle

import sys
 
# adding Folder_2 to the system path
sys.path.insert(0, 'c:\users\user\appdata\local\programs\python\python39\lib\site-packages (1.19.5)')

app = Flask(__name__)
model = pickle.load(open('model.pkl', 'rb'))

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict',methods=['POST'])
def predict():
    '''
    For rendering results on HTML GUI
    '''
    int_features = [int(x) for x in request.form.values()]
    final_features = [np.array(int_features)]
    prediction = model.predict(final_features)
    #if prediction == 0:
     #   prediction_text='The health of the foetus appears normal!'
    #elif prediction == 1:
     #   prediction_text='There appears to be slight discrepencies regarding the health of the foetus. Contact your health provider for further clarifications.'
    #else:  
     #   prediction_text='The model predicted an abnormal value. Please contact your health provider immediately.'
    #return render_template('index.html', prediction_text)
    if prediction == 0:
        return {
            'number':'0',
            'description':'The health of the foetus appears normal!'
        }
    elif prediction == 1:
        return{
            'number':'1',
            'description': 'There appears to be slight discrepencies regarding the health of the foetus. Contact your health provider for further clarifications.'
        }
    else:  
        return{
            'number':'2',
            'description':'The model predicted an abnormal value. Please contact your health provider immediately.'
        }


@app.route('/predict_api',methods=['POST'])
def predict_api():
    '''
    For direct API calls trought request
    '''
    data = request.get_json(force=True)
    prediction = model.predict([np.array(list(data.values()))])

    output = prediction[0]
    return jsonify(output)

if __name__ == "__main__":
    app.run(debug=True)