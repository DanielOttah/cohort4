from flask import Flask, jsonify
from flask_restful import Api
from flask_jwt import JWT
from security import authenticate, identity as identity_function
from resources.user import UserRegister
from resources.item import Item, ItemList
from resources.store import Store, StoreList
import datetime
from db import db

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
app.secret_key = 'dany'
api = Api(app)

# Nb SQLAlchemy can create the table instaed of using the create_table.py to create the tables


@app.before_first_request
def create_table():
    db.create_all()


app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = 'False'

# This code changes the default jwt `/auth` endpoint to /login
app.config['JWT_AUTH_URL_RULE'] = '/login'
# This code changes the expiration time of the access_key from 5mins (default) to 30mins
app.config['JWT_EXPIRATION_DELTA'] = datetime.timedelta(seconds=1800)
# # config JWT auth key name to be 'email' instead of default 'username'
# app.config['JWT_AUTH_USERNAME_KEY'] = 'email'

# this create an instance '/auth' endpoint (nb changed it above) and the username and pword passes is checked in authenticate() then calls the identity to confirm the token
jwt = JWT(app, authenticate, identity_function)


@jwt.jwt_error_handler
def customized_error_handler(error):
    return jsonify({
        'message': error.description,
        'code': error.status_code
    }), error.status_code


api.add_resource(Item, '/item/<string:name>')
api.add_resource(ItemList, '/items')
api.add_resource(UserRegister, '/register')
api.add_resource(Store, '/store/<string:name>')
api.add_resource(StoreList, '/stores')


if __name__ == '__main__':
    db.init_app(app)
    app.run(port=3900, debug=True)


# JWT - json web token = used to encrypt messages over the web
