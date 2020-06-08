# This helps in comparing strings in older python versions
from werkzeug.security import safe_str_cmp
from models.user_model import UserModel

# users = [
#     User(1, 'bob', 'asdf')
# ]
# username_mapping = {u.username: u for u in users}
# userid_mapping = {i.id: i for i in users}


def authenticate(username, password):
    # nb the code username_mapping.get() was used when the users were in the list above, however we have our users in the db now so we use User.find_by_username()
    # user = username_mapping.get(username, None)
    user = UserModel.find_by_username(username)
    # if user and user.password == password: #this method can be used but the one below is for safe comparing since some programs still use python2
    if user and safe_str_cmp(user.password, password):
        return user


def identity(payload):
    user_id = payload['identity']
    # nb the code userid_mapping.get() was used when the users were in the list above, however we have our users in the db now so we use User.find_by_id()
    return UserModel.find_by_id(user_id)
