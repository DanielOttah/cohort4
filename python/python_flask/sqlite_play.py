import sqlite3

# Initialize a connection
connection = sqlite3.connect('data.db')

# initialize a 'placer' or 'cursor' that will walk through the db
cursor = connection.cursor()

# create table in data,db
create_table = 'CREATE TABLE users (id int, username text, password text)'

# Attach the table to the db
cursor.execute(create_table)

# Create a user
user = (1, 'Danny', 'asdf')

# create insert query
insert_query = "INSERT INTO users VALUES(?,?,?)"

# Attach user to table in db
cursor.execute(insert_query, user)

# Create many users
users = [
    (2, 'Suo', 'qwerty'),
    (3, 'Thea', 'zxcv')
]

# Attach all the users to the table in the db
cursor.executemany(insert_query, users)

# Get all the columns in the users table
select_all = "SELECT * FROM users"

# print each row in table
for x in cursor.execute(select_all):
    print(x)


# Save all the changes to the db
connection.commit()

# Close the connection
connection.close()
