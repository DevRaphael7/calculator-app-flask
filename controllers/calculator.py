from flask import request
from flask_restful import Resource, reqparse

from models.calculator import Calculator

class CalculatorApi(Resource):
    parse = reqparse.RequestParser()

    parse.add_argument('num1', 
            type=float,
            required=True,
            help="Field id is required"
    )

    parse.add_argument('num2', 
            type=float,
            required=True,
            help="Field id is required"
    )

    parse.add_argument('operation', 
            type=str,
            required=True,
            help="Field id is required"
    )

    def post(self):

        request_body = self.parse.parse_args()

        calc = Calculator(num1=request_body["num1"], num2=request_body["num2"])

        if(request_body["operation"] == "+"):
            return { "result": calc.add() }, 200
        elif request_body["operation"] == "-":
            return { "result": calc.less() }, 200
        elif request_body["operation"] == "*":
            return { "result": calc.multiply() }, 200
        elif request_body["operation"] == "/":
            return { "result": calc.divider() }, 200
        else:
            return { "message": "This operation is invalid" }, 400
