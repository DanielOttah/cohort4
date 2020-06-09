import sqlite3

# Initialize a connection
connection = sqlite3.connect('data.db')

# initialize a 'placer' or 'cursor' that will walk through the db
cursor = connection.cursor()

# create table to store username and password in data.db
create_table = 'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username text, password text)'
# Attach the table to the db
cursor.execute(create_table)

# create table to store items in data.db
create_table = 'CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY, name text, price real)'
# Attach the table to the db
cursor.execute(create_table)

# create store table in data.db
create_table = 'CREATE TABLE IF NOT EXISTS stores (id INTEGER PRIMARY KEY, name text)'
# Attach the table to the db
cursor.execute(create_table)

# Save all the changes to the db
connection.commit()

# Close the connection
connection.close()
