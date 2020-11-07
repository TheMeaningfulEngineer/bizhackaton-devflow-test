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
        "sifra": "10.11",
        "ime": "Prerada i konzerviranje mesa",
        "vezanost": "vezana"
    }