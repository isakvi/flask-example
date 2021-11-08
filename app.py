from flask import Flask, render_template

app = Flask(__name__, static_url_path='',
                  static_folder='react-app/build',
                  template_folder='react-app/build')

@app.route("/")
def return_react_app():
    return render_template("index.html")