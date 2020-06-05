# import requests


# ================== GETTING DATA FROM API USING PYTHON==========================
# url = "http://127.0.0.1:5000/"
# response1 = requests.get(f"{url}load")
# response2 = requests.get(f"{url}all")
# print(response2.json())

from flask import Flask, jsonify, request, render_template

app = Flask(__name__)
stores = [
    {
        "name": "My_Wonderful_Store",
        "item": [{"name": 'my Item', "price": 15.99}]
    },
    {
        "name": "My_Other_Wonderful_Store",
        "item": [{"name": 'my other Item', "price": 5.99}]
    },
    {
        "name": "My_Third_Wonderful_Store",
        "item": [{"name": 'my third Item', "price": 5.99}]
    },
]


@app.route('/')  # This refers to the homepage
def home():
    return render_template("index.html")


# This method posts data
@app.route('/store', methods=['POST'])
def create_store():
    # Here we use imported request to get the data to use in creating the store
    request_data = request.get_json()
    new_store = {
        'name': request_data['name'],
        'items': []
    }
    stores.append(new_store)
    return jsonify(new_store)


# This method getss data i.e http//www.127.0.0.1:3200/store/name
@app.route('/store/<string:name>')
def get_store(name):
    # iterate over the stores and send the store that matches the name
    for each_store in stores:
        if each_store["name"] == name:
            return jsonify({'store': each_store})
    return jsonify({"message": "Store does not exist."})


# This method sends all the stores data to the asker!
@app.route('/store')
def get_stores():
    # we import jsonify to convert the data we want to send into json format. nb since json can only send objects/dictionary we create a new object, gave it a key and pass stores' list as the value
    return jsonify({'stores': stores})


# This method posts data
@app.route('/store/<string:name>/item', methods=['POST'])
def create_item_in_store(name):
    # Here we use imported request to get the data to use in creating the store
    request_data = request.get_json()
    for each_store in stores:
        if each_store['name'] == name:
            new_item = {
                'name': request_data['name'],
                'price': request_data['price']
            }
            each_store['item'].append(new_item)
            return jsonify({'store': each_store['name']})
    return jsonify({"message": "Store does not exist."})


# This method sends the item data of a given store
@app.route('/store/<string:name>/item')
def get_item_in_store(name):
    for each_store in stores:
        if each_store['name'] == name:
            return jsonify({'items': each_store['item']})
    return jsonify({"message": "Store does not exist."})


app.run(port=3200)
