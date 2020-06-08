# This helps in comparing strings in older python versions
from werkzeug.security import safe_str_cmp
from user import User

users = [
    User(1, 'bob', 'asdf')
]


username_mapping = {u.username: u for u in users}
userid_mapping = {i.id: i for i in users}


def authenticate(username, password):
    user = username_mapping.get(username, None)
    # if user and user.password == password: #this method can be used but the one below is for safe comparing since some programs still use python2
    if user and safe_str_cmp(user.password, password):
        return user


def identity(payload):
    user_id = payload['identity']
    return userid_mapping.get(user_id, None)
