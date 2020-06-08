from user import User
from werkzeug.security import safe_str_cmp

users = [
    User(1, 'bob', 'asdf'),
    User(2, 'mike', 'asdf'),
    User(3, 'jose', 'asdf')
]

username_mapping = {u.username: u for u in users}


def authenticate(username, password):
    user = username_mapping.get(username, None)
    # if user and user.password == password: #this method can be used but the one below is for safe comparing since some programs still use python2
    if user and safe_str_cmp(user.password, password):
        return user


ser = authenticate('nh', 'asdf')
print(ser)
