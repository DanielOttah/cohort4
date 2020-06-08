
import sqlite3
from flask_restful import Resource, reqparse
from flask_jwt import jwt_required


class Item(Resource):
    # importing reqparser enables us to sieve through the json data coming thru to know the exact data for update
    parser = reqparse.RequestParser()
    parser.add_argument('price',
                        type=float,
                        required=True,
                        help="this field cannot be blank")

    @jwt_required()
    def get(self, name):
        # The code below was used when the item was stored in a list
        # # the next() get the first match from filter() after lambda has gone through the list, if no match isfound it returns 'None' | filter retuns an object
        # each_item = next(filter(lambda x: x['name'] == name, items), None)
        # # for each_item in items:
        # #     if each_item['name'] == name:
        # #         return each_item
        # return {"item": each_item}, 200 if each_item else 404

        item = self.find_by_name(name)
        if item:
            return item
        return {"message": f"The item {name} does not exist"}, 400

    @classmethod
    def find_by_name(cls, name):
        connection = sqlite3.connect('data.db')
        cursor = connection.cursor()
        query = "SELECT * FROM items WHERE name=?"
        result = cursor.execute(query, (name,))
        col = result.fetchone()
        connection.close()
        if col:
            return {"item": {'name': col[1], 'price': col[2]}}

    @classmethod
    def insert(cls, item):
        connection = sqlite3.connect('data.db')
        cursor = connection.cursor()
        query = "INSERT INTO items VALUES(NULL, ?,?)"
        result = cursor.execute(query, (item['name'], item['price'],))
        connection.commit()
        connection.close()

    @classmethod
    def update(cls, item):
        connection = sqlite3.connect('data.db')
        cursor = connection.cursor()
        query = "UPDATE items SET price=? WHERE name =?"
        cursor.execute(query, (item['price'], item['name']))
        connection.commit()
        connection.close()

    def post(self, name):
        # the code below checks if the item exists before creating it again, if it does, it sends 400 bad request and doesnt create it
        if self.find_by_name(name):
            return{'message': "An item with name '{}' already exists.".format(name)}, 400
        # nb inside the json() method, you can pass 'force=True' or 'silent =True' to handle the errors if any
        # request_data = request.get_json()
        # OR Use the parser
        request_data = Item.parser.parse_args()
        new_item = {
            'name': name,
            "price": request_data['price']
        }
        try:
            self.insert(new_item)
        except:
            return {"message": "An error occured inserting item!"}, 500
        return {"message": f"{new_item} was added succesfully"}, 201

    def delete(self, name):
        # Old method
        # In the code below, we over-write the items list with all the other elements except the one we want to delete
        # items = list(filter(lambda x: x['name'] != name, items))
        # return {'message': f'Item {name} has been deleted.'}, 200
        if self.find_by_name(name):
            connection = sqlite3.connect('data.db')
            cursor = connection.cursor()
            query = "DELETE FROM items WHERE name=?"
            result = cursor.execute(query, (name,))
            connection.commit()
            connection.close()
            return {"message": f"{name} was deleted succesfully"}, 201
        return {"message": f"{name} is not a recognized item"}, 400

    def put(self, name):
        request_data = Item.parser.parse_args()
        new_item = {
            'name': name,
            "price": request_data['price']
        }
        # Check if item is in db
        if self.find_by_name(name) is None:
            try:
                self.insert(new_item)
                return{'message': "An item with name '{}' created successfully.".format(name)}, 201
            except:
                return {"mesage": "An error occured updating the item"}, 500

        # Code below was used to check a list when items weren't in a db
        # line below checks if the item is in the list already, if it is we update, if not create it
        # new_item = next(filter(lambda x: x['name'] == name, items), None)
        else:
            try:
                self.update(new_item)
                return{'message': "An item with name '{}' updated successfully.".format(name)}, 201
            except:
                return {"mesage": "An error occured updating the item"}, 500


class ItemList(Resource):
    def get(self):
        connection = sqlite3.connect('data.db')
        cursor = connection.cursor()
        query = "SELECT * FROM items"
        result = cursor.execute(query)
        all_items = []
        for x in result:
            all_items.append({'name': x[1], 'price': x[2]})
        connection.close()
        return {'items': all_items}, 200
