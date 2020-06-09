import sqlite3
from flask_restful import Resource, reqparse
from models.user_model import UserModel


class UserRegister(Resource):
    # importing reqparser enables us to sieve through the json data coming thru to know the exact data for update
    parser = reqparse.RequestParser()
    parser.add_argument('username',
                        type=str,
                        required=True,
                        help="This field cannot be blank")

    parser.add_argument('password',
                        type=str,
                        required=True,
                        help="This field cannot be blank")

    def post(self):
        request_data = UserRegister.parser.parse_args()
        user_register = UserModel.find_by_username(request_data['username'])
        if user_register is not None:
            return {'message': "User already exists!"}, 400
        else:
            connection = sqlite3.connect('data.db')
            cursor = connection.cursor()
            query = "INSERT INTO users VALUES (NULL, ?,?)"
            cursor.execute(
                query, (request_data['username'], request_data['password'],))
            connection.commit()
            connection.close()

            # new_user = UserModel(
            #     request_data['username'], request_data['password'])
            # try:
            #     new_user.save_user_to_db()
            # except:
            #     return {"message": "An error occured creating User"}, 500
            return {'message': "User created successfully"}, 201
