from flask import Flask
from flask_restful import Api
from flask_cors import CORS

from controllers.calculator import CalculatorApi

app = Flask(__name__)
CORS(app)

api = Api(app)

api.add_resource(CalculatorApi, '/calculator')

if __name__ == "__main__":
    app.run(debug=False, port=8002)