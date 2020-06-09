from flask_restful import Resource, reqparse
from flask_jwt import jwt_required
from models.item_model import ItemModel


class Item(Resource):
    # importing reqparser enables us to sieve through the json data coming thru to know the exact data for update
    parser = reqparse.RequestParser()
    parser.add_argument('price',
                        type=float,
                        required=True,
                        help="this field cannot be blank")
    parser.add_argument('store_id',
                        type=int,
                        required=True,
                        help="store_id field cannot be blank")

    @jwt_required()
    def get(self, name):
        item = ItemModel.find_by_name(name)
        if item:
            return item.json()
        return {"message": f"The item {name} does not exist"}, 400

    def post(self, name):
        # the code below checks if the item exists before creating it again, if it does, it sends 400 bad request and doesnt create it
        if ItemModel.find_by_name(name):
            return{'message': "An item with name '{}' already exists.".format(name)}, 400
        # nb inside the json() method, you can pass 'force=True' or 'silent =True' to handle the errors if any
        # request_data = request.get_json()
        # OR Use the parser
        request_data = Item.parser.parse_args()
        new_item = ItemModel(
            name, request_data['price'], request_data['store_id'])
        # Or use
        # put_item.store_id = (name,**request_data)
        try:
            new_item.save_to_db()
        except:
            return {"message": "An error occured inserting item!"}, 500
        return {"message": f"{new_item.json()} was added succesfully"}, 201

    def delete(self, name):
        del_item = ItemModel.find_by_name(name)
        if del_item:
            del_item.delete_from_db()
            return {"message": f"{name} was deleted succesfully"}, 201
        return {"message": f"{name} is not a recognized item"}, 400

    def put(self, name):
        request_data = Item.parser.parse_args()
        put_item = ItemModel.find_by_name(name)
        # Check if item is in db
        try:
            if put_item is None:
                put_item = ItemModel(
                    name, request_data['price'], request_data['store_id'])
            else:
                put_item.price = request_data['price']
                # put_item.store_id = request_data['store_id']

        except:
            return {"mesage": "An error occured updating the item"}, 500

        put_item.save_to_db()
        return{'message': "An item with name '{}' updated successfully.".format(name)}, 201


class ItemList(Resource):
    def get(self):
        return {'Items': [x.json() for x in ItemModel.query.all()]}
