import os
from flask import Flask, jsonify, request, render_template
from flask_cors import CORS
import json


data = {}


app = Flask(__name__)
app.secret_key = os.urandom(16)
CORS(app, supports_credentials=True)


@app.route('/')
def home():
    return render_template("index.html")
    # return "hello world"


@app.route("/load", methods=['GET'])
def load():
    global data
    with open('data.json') as json_file:
        data = json.load(json_file)
    return jsonify({"Server Message": f"{str(len(data))} cities loaded"}), 200


@app.route("/clear", methods=['POST', 'GET'])
def clear():
    global data
    data = {}
    return jsonify(data), 200


@app.route("/all", methods=['POST', 'GET'])
def all():
    return jsonify(list(data.values())), 200


@app.route("/save", methods=['POST'])
def save():
    global data
    with open('data.json', 'w') as outfile:
        json.dump(data, outfile)
    return jsonify(list(data.values())), 200


@app.route("/update", methods=['POST'])
def update():
    global data
    content = request.get_json()
    if 'key' not in content:
        return jsonify({"Server Message": "There must be a 'key' attribute"}), 400

    key = content['key']
    if key not in data:
        return jsonify({"Server Message": "You cannot update '" + str(key) + "', it does not exist."}), 400

    data[key] = content
    return jsonify({}), 200


@app.route("/delete", methods=['POST'])
def delete():
    global data
    content = request.get_json()
    if 'key' not in content:
        return jsonify({"msg": "There must be a 'key' attribute"}), 400

    key = content['key']
    if key not in data:
        return jsonify({"msg": "You can not delete '" + str(key) + "', it does not exist."}), 400

    del data[key]
    return jsonify({}), 200


firstKeyType = None


@app.route("/add", methods=['POST'])
def add():
    global data, firstKeyType
    content = request.get_json()

    if 'key' not in content:
        return jsonify({"msg": "There must be a 'key' attribute"}), 400

    key = content['key']

    if firstKeyType:
        if not isinstance(key, firstKeyType):
            return jsonify({"msg": "Keys must be of the same type, that last one was " + str(firstKeyType) + " but this one is " + str(type(key))}), 400
    else:
        firstKeyType = type(key)

    if key in data:
        return jsonify({"msg": "You can not add '" + str(key) + "' again."}), 400

    data[key] = content


# app.run(port=5000)
if __name__ == '__main__':
    print("--- Starting", __file__)
    app.run(debug=True, use_reloader=True)
