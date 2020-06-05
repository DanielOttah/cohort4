from flask import Flask, request
from flask_restful import Resource, Api
from flask_jwt import JWT, jwt_required
from security import authenticate, identity

app = Flask(__name__)
app.secret_key = 'dany'
api = Api(app)

# this create an '/auth' endpoint and the username and pword passes is checked in authenticate() then calls the identity to confirm the token
jwt = JWT(app, authenticate, identity)

items = []


class Item(Resource):
    @jwt_required()
    def get(self, name):
        # the next() get the first match from filter() after lambda has gone through the list, if no match isfound it returns 'None' | filter retuns an object
        each_item = next(filter(lambda x: x['name'] == name, items), None)
        # for each_item in items:
        #     if each_item['name'] == name:
        #         return each_item
        return {"item": each_item}, 200 if each_item else 404

    def post(self, name):
        # the code below checks if the item exists before creating it again, if it does, it sends 400 bad request and doesnt create it
        if next(filter(lambda x: x['name'] == name, items), None) is not None:
            return{'message': "An item with name '{}' already exists.".format(name)}, 400
        # nb inside the json() method, you can pass 'force=True' or 'silent =True' to handle the errors if any
        request_data = request.get_json()
        new_item = {
            'name': name,
            "price": request_data['price']
        }
        items.append(new_item)
        return new_item, 201


class ItemList(Resource):
    def get(self):
        return {'items': items}, 200


api.add_resource(Item, '/item/<string:name>')
api.add_resource(ItemList, '/items')

app.run(port=3900, debug=True)


# JWT - json web token = used to encrypt messages over the web
