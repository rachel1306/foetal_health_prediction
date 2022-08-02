import numpy as np
from flask import Flask, request, jsonify, render_template
import keras


app = Flask(__name__)
model = keras.models.load_model('./neural_network.h5')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict',methods=['POST'])
def predict():
    '''
    For rendering results on HTML GUI
    '''
    float_features = [float(x) for x in request.form.values()]
    final_features = [np.array(float_features).reshape(1,-1)]
    pred = model.predict(final_features)
    pred = pred.astype(int)
    if pred[:,0] == 1:
        prediction_text='The health of the foetus appears normal!'
    elif pred[:,1] == 1:
        prediction_text='There appears to be slight discrepencies regarding the health of the foetus. Contact your health provider for further clarifications.'
    elif pred[:,2] == 1:  
       prediction_text='The model predicted an abnormal value. Please contact your health provider immediately.'
    else :
        prediction_text='Error'
    return render_template('index.html',prediction_text = prediction_text)
    #if prediction == 0:
    #    return {
    #        'number':'0',
    #        'description':'The health of the foetus appears normal!'
    #    }
    #elif prediction == 1:
     #   return{
     #       'number':'1',
    #        'description': 'There appears to be slight discrepencies regarding the health of the foetus. Contact your health provider for further clarifications.'
    #    }
   # else:  
     #   return{
    #        'number':'2',
     #       'description':'The model predicted an abnormal value. Please contact your health provider immediately.'
     #   }




if __name__ == "__main__":
    app.run(debug=True)