from flask import Flask
from flask_cors import CORS
import time
from data import loadZanimanja

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

    # search_string_koji_je_dosao_iz_fronetenda variajbla

    # Nekako osigurati NKD bazu u kontekstu ove metode

    nkd_baza = loadZanimanja.fetch_nkd()
    loadZanimanja.df_to_json(nkd_baza ,search_string_koji_je_dosao_iz_fronetenda)
    #return {
    #    "sifra": "10.11",
    #    "ime": "Prerada i konzerviranje mesa",
    #    "vezanost": "vezana"
    #}
    
    #Primjer
    return loadZanimanja.resultJson
