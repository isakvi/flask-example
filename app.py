from flask import Flask, render_template, jsonify
from flask_cors import CORS, cross_origin
import json

app = Flask(__name__, static_url_path='',
                  static_folder='react-app/build',
                  template_folder='react-app/build')               
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'



@app.route("/")
@cross_origin()
def return_react_app():
    return render_template("index.html")

@cross_origin()
@app.route("/getExternalData")
def get_external_data():
    return jsonify(
        text="This is a placeholder"
    )