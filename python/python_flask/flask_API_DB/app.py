from flask import Flask, jsonify
from flask_restful import Api
from flask_jwt import JWT
from security import authenticate, identity as identity_function
from user import UserRegister
from item import Item, ItemList
import datetime

app = Flask(__name__)
app.secret_key = 'dany'
api = Api(app)

# This code changes the default jwt `/auth` endpoint to /login
app.config['JWT_AUTH_URL_RULE'] = '/login'
# This code changes the expiration time of the access_key from 5mins (default) to 30mins
app.config['JWT_EXPIRATION_DELTA'] = datetime.timedelta(seconds=1800)
# # config JWT auth key name to be 'email' instead of default 'username'
# app.config['JWT_AUTH_USERNAME_KEY'] = 'email'

# this create an instance '/auth' endpoint (nb changed it above) and the username and pword passes is checked in authenticate() then calls the identity to confirm the token
jwt = JWT(app, authenticate, identity_function)

# # above method display is only access_code but the one below is customized to include other info
# jwt = JWT(app, authenticate, identity_function)

# @jwt.auth_response_handler
# def custome_response(access_token, identity):
#     return jsonify({
#         'access_token': access_token.decode('utf-8'),
#         'user_id': identity.id
#     })

# If an error occurs within any of the handlers (e.g. during authentication, identity, or creating the response) we use:


@jwt.jwt_error_handler
def customized_error_handler(error):
    return jsonify({
        'message': error.description,
        'code': error.status_code
    }), error.status_code


api.add_resource(Item, '/item/<string:name>')
api.add_resource(ItemList, '/items')
api.add_resource(UserRegister, '/register')

if __name__ == '__main__':
    app.run(port=3900, debug=True)


# JWT - json web token = used to encrypt messages over the web
