from flask import Flask
from flask_cors import CORS
app = Flask(__name__)
import time
CORS(app)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

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
    },
    3: {
        "sifra": "10.61.01",
        "ime": "Mljevenje žitarica: proizvodnja brašna, drobine, prekrupe ili kuglica od pšenice, raži, zobi, kukuruza i drugih žitarica",
        "vezanost": "vezana"
    },
    4: {
        "sifra": "10.71",
        "ime": "Proizvodnja kruha; proizvodnja svježih peciva i sličnih proizvoda te kolača",
        "vezanost": "povlaštena"
    },
    5: {
        "sifra": "95.29",
        "ime": "Popravak knjiga",
        "vezanost": "slobodna"
    },
    6: {
        "sifra": "18.14",
        "ime": "Izdavanje knjiga",
        "vezanost": "slobodna"
    }
}
