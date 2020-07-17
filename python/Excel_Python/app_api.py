from flask import Flask, jsonify, request, render_template
from flask_cors import CORS
from invoice_App_XL_Dict import breakIntoDict, build_dict  #
from invoice_App_New import *


app = Flask(__name__)
CORS(app, supports_credentials=True)

data = build_dict()


@app.route('/')  # This refers to the homepage
def home():
    return jsonify(get_Client_Invoices(102))


@app.route('/all')  # get all data in Excel sheet
def get_all():
    return jsonify(data)


@app.route('/customers')  # get all customers
def get_customers():
    return jsonify(data.get('customers'))


@app.route('/invoices')  # get all invoices
def get_invoices():
    return jsonify(data.get('Invoices'))


@app.route('/products')  # get all invoices
def get_products():
    return jsonify(data.get('products'))


@app.route('/client-invoice', methods=['POST'])  # get all invoices
def get_Client_Invoice():
    req = request.get_json()
    return jsonify(get_Client_Invoices(int(req['id'])))


@app.route('/an-invoice', methods=['POST'])  # get an invoices
def get_gen_Invoice():
    req = request.get_json()
    return jsonify(getInvoice(int(req['id'])))


@app.route('/aproduct', methods=['POST'])  # get a product
def get_a_product():
    req = request.get_json()
    return jsonify(getProductBought(int(req['id'])))


app.run(port=3200)
