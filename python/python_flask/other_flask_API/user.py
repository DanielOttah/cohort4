import sqlite3
from flask_restful import Resource, reqparse


class User:
    def __init__(self, _id, username, password):
        self.id = _id
        self.username = username
        self.password = password

    def __str__(self):
        return "{id: '%s', username: '%s', password: '%s'}" % (self.id, self.username, self.password)

    @classmethod
    def find_by_username(cls, username):
        connection = sqlite3.connect('data.db')
        cursor = connection.cursor()
        select_query = "SELECT * FROM users WHERE username=?"
        # nb the variable option in execute method must be a tuple
        result = cursor.execute(select_query, (username,))
        col = result.fetchone()  # nb fetchone() gets the first col
        if col:
            user = cls(col[0], col[1], col[2])
            # or
            # user = cls(*col)
        else:
            user = None
        connection.close()
        return user

    @classmethod
    def find_by_id(cls, _id):
        connection = sqlite3.connect('data.db')
        cursor = connection.cursor()
        select_query = "SELECT * FROM users WHERE id=?"
        # nb the variable option in execute method must be a tuple
        result = cursor.execute(select_query, (_id,))
        col = result.fetchone()  # nb fetchone() gets the first col
        if col:
            user = cls(col[0], col[1], col[2])
            # or
            # user = cls(*col)
        else:
            user = None
        connection.close()
        return user


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
        user_register = User.find_by_username(request_data['username'])
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
            return {'message': "User created successfully"}, 201
