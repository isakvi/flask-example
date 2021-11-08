from flask import Flask, render_template, jsonify
from flask_cors import CORS, cross_origin
import requests

app = Flask(__name__, static_url_path='',
                  static_folder='react-app/build',
                  template_folder='react-app/build')               
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'



@app.route("/")
@cross_origin()
def return_react_app():
    return render_template("index.html")

@app.route("/getMealData")
def get_meal_data():
    api_url = "https://www.themealdb.com/api/json/v1/1/random.php"
    response = requests.get(api_url)
    return response.json()