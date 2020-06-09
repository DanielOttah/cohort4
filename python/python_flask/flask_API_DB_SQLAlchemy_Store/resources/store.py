from flask_restful import Resource
from models.store_model import StoreModel


class Store(Resource):
    def get(self, name):
        store = StoreModel.find_by_name(name)
        if store:
            return store.json(), 200
        return {"message": "The store does not exist"}, 404

    def post(self, name):
        if StoreModel.find_by_name(name):
            return{'message': "The store with name '{}' already exists.".format(name)}, 400

        new_store = StoreModel(name)
        try:
            new_store.save_to_db()
        except:
            return {"message": "An error occured creating store!"}, 500
        return {"message": "Store '{}' was added succesfully".format(new_store.json())}, 201

    def delete(self, name):
        new_store = StoreModel.find_by_name(name)
        if new_store:
            new_store.delete_from_db
            return {"message": f"Store {name} was deleted succesfully"}, 201
        return {"message": f"Store {name} is not a recognized store"}, 400


class StoreList(Resource):
    def get(self):
        return {'Stores': [x.json() for x in StoreModel.query.all()]}
