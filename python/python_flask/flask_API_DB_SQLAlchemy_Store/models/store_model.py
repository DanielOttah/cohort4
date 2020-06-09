from db import db


class StoreModel(db.Model):
    __tablename__ = 'stores'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))

   # nb adding 'lazy=dynamic' creates a query so we use self.items.all() to access the methods
   # the 'lazy=dynamic' creates objects in the table so it can accommodate for multiple items in multiple stores
   # if 'lazy=dynamic' is removed, a list will be returned and we access items looping thru self.items
    items = db.relationship('ItemModel', lazy='dynamic')

    def __init__(self, name, price):
        self.name = name

    def json(self):
        return {'name': self.name, 'items': [x.json() for x in self.items.all()]}

    @classmethod
    def find_by_name(cls, name):
        return cls.query.filter_by(name=name).first()

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    # def insert(self):
    #     connection = sqlite3.connect('data.db')
    #     cursor = connection.cursor()
    #     query = "INSERT INTO items VALUES(NULL, ?,?)"
    #     cursor.execute(query, (self.price, self.name,))
    #     connection.commit()
    #     connection.close()

    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()
