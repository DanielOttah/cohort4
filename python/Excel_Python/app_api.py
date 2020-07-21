from flask import Flask, jsonify, request, render_template
from flask_cors import CORS
from invoice_App_XL_Dict import breakIntoDict, build_dict  #
from invoice_App_New import *


app = Flask(__name__)
CORS(app, supports_credentials=True)

data = build_dict()


@app.route('/')  # This refers to the homepage
def home():
    return render_template("index.html")


@app.route('/flask_dump')  # sends all data to flask template html file
def flask_dump():
    return render_template("flaskdump.html", data=data)


# sends customer data to flask template html file
@app.route('/flask_dump/customers')
def flask_dump_Customer():
    customer = []
    for val in data['customers'].items():
        val[1].update({"customer_id": val[0]})
        customer.append(val[1])
    return render_template("flaskdump_customers.html", data=customer)


# sends invoice data to flask template html file
@app.route('/flask_dump/invoices')
def flask_dump_Invoice():
    invoices = []
    products = []
    invoice_list = []

    for val in data['Invoices'].items():
        val[1].update({"invoice_id": val[0]})
        invoices.append(val[1])
    return render_template("flaskdump_Invoices.html", data=invoices)


# sends products data to flask template html file
@app.route('/flask_dump/products')
def flask_dump_products():
    products = []
    for val in data['products'].items():
        val[1].update({"products_id": val[0]})
        products.append(val[1])
    return render_template("flaskdump_products.html", data=products)


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
