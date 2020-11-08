from flask import Flask
from flask import request
from flask_cors import CORS
import time
# from data import loadZanimanja

app = Flask(__name__)
CORS(app)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

# TODO: search_string mora doci kao poziv sa frontenda
# Treba modificirati endpoint tako da ima taj search string u svom scope-u
# @app.route('/activities', methods = ['POST'])
# def get_activities():
#     data = request.get_json(force=True)
#     print(request)
#     print(data)
#     return data
    # return {   
    # 1: {
    #     "sifra": "10.11",
    #     "ime": "Prerada i konzerviranje mesa",
    #     "vezanost": "vezana"
    # },
    # 2: {
    #     "sifra": "10.51.01",
    #     "ime": "Prerada mlijeka i proizvodnja sira",
    #     "vezanost": "vezana"
    # }}

@app.route('/activities', methods = ['GET'])
def get_activities():
    return {   
    1: {
        "sifra": "10.11",
        "ime": "Prerada i konzerviranje mesa",
        "vezanost": "vezana"
    },
    2: {
        "sifra": "10.51.01",
        "ime": "Prerada mlijeka i proizvodnja sira",
        "vezanost": "slobodna"
    },
     3: {
        "sifra": "34.51",
        "ime": "Uvezivanje knjiga",
        "vezanost": "povlaštena"
    },
     4: {
        "sifra": "51.01",
        "ime": "Izdavanje knjiga",
        "vezanost": "vezana"
    },
     5: {
        "sifra": "78.45",
        "ime": "Proizvodnja obuće",
        "vezanost": "sobodna"
    },
     6: {
        "sifra": "10.01",
        "ime": "Prerada proizvoda od kože",
        "vezanost": "povlaštena"
    },
    }