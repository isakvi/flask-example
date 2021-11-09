from flask import Flask, render_template
import requests

app = Flask(__name__, static_url_path='',
                  static_folder='react-app/build',
                  template_folder='react-app/build')



@app.route("/")
def return_react_app():
    return render_template("index.html")

@app.route("/getMealData")
def get_meal_data():
    api_url = "https://www.themealdb.com/api/json/v1/1/random.php"
    try:
        response = requests.get(api_url)
        return response.json()
    except requests.exceptions.RequestException as e:
        return "Internal Server Error", 500