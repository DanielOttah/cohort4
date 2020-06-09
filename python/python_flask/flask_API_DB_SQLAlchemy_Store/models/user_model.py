import sqlite3
from db import db


class UserModel(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100))
    password = db.Column(db.String(100))

    def __init__(self, username, password):
        self.username = username
        self.password = password

    def __str__(self):
        return "{id: '%s', username: '%s', password: '%s'}" % (self.id, self.username, self.password)

    @classmethod
    def find_by_username(cls, username):
        # This method was used before SQLAlchemy
        # connection = sqlite3.connect('data.db')
        # cursor = connection.cursor()
        # select_query = "SELECT * FROM users WHERE username=?"
        # # nb the variable option in execute method must be a tuple
        # result = cursor.execute(select_query, (username,))
        # col = result.fetchone()  # nb fetchone() gets the first col
        # if col:
        #     user = cls(col[0], col[1], col[2])
        #     # or
        #     # user = cls(*col)
        # else:
        #     user = None
        # connection.close()
        # return user
        # This is SQLAlchemy method
        return cls.query.filter_by(username=username).first()

    @classmethod
    def find_by_id(cls, _id):
        # This method was used before SQLAlchemy
        # connection = sqlite3.connect('data.db')
        # cursor = connection.cursor()
        # select_query = "SELECT * FROM users WHERE id=?"
        # # nb the variable option in execute method must be a tuple
        # result = cursor.execute(select_query, (_id,))
        # col = result.fetchone()  # nb fetchone() gets the first col
        # if col:
        #     user = cls(col[0], col[1], col[2])
        #     # or
        #     # user = cls(*col)
        # else:
        #     user = None
        # connection.close()
        # return user
        # This is SQLAlchemy method
        return cls.query.filter_by(id=_id).first()

        def save_user_to_db(self):
            db.session.add(self)
            db.session.commit()
