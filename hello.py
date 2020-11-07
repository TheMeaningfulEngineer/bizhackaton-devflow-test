from flask import Flask
app = Flask(__name__)
import time


@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/time')
def get_current_time():
    return {'time': time.time()}
