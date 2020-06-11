from flask import Flask, jsonify, request, render_template
from invoice_App import report_Invoice


app = Flask(__name__)

invoice_ids = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']


@app.route('/')  # This refers to the homepage
def home():
    return render_template("index.html")


@app.route('/invoice/<string:name>')
def get_invoice(name):
    if name in invoice_ids:
        return jsonify({'Invoice Report': report_Invoice(int(name))}), 200
        # return render_template('index.html', name={'Invoice Report': report_Invoice(int(name))})
    return jsonify({'message': "An error occured. Invalid Invoice number!"}), 400


app.run(port=3000)
