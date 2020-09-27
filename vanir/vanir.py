from flask import Flask

from vanir.home import home

def run():
    flask = Flask(__name__)
    flask.register_blueprint(home)
    flask.run(debug=True)
