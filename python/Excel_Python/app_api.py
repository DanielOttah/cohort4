from invoice_App_XL_Dict import build_dict, breakIntoDict

from flask import Flask, jsonify, request, render_template

app = Flask(__name__)


@app.route('/')  # This refers to the homepage
def home():
    return breakIntoDict()
    # return build_dict()


app.run(port=3200)
