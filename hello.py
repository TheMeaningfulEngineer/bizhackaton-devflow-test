from flask import Flask
from flask import request
from flask_cors import CORS
import time
# from data import loadZanimanja

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

# TODO: search_string mora doci kao poziv sa frontenda
# Treba modificirati endpoint tako da ima taj search string u svom scope-u
@app.route('/activities')
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
        "vezanost": "vezana"
    }}
