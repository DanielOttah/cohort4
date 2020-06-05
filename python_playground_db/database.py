import sqlite3

CREATE_BEAN_TABLE = "CREATE TABLE IF NOT EXISTS beans(id INTEGER PRIMARY KEY, name TEXT, method TEXT, rating INTEGER);"
INSERT_BEAN = "INSERT INTO beans(name,method,rating) VALUES(?,?,?);"
GET_ALL_BEANS = "SELECT * FROM beans;"
GET_BEANS_BY_NAME = "SELECT * FROM beans WHERE name=?; "
GET_BEST_PREPARATION_FOR_BEAN = """
SELECT * FROM beans
WHERE name = ?
ORDER BY rating DESC
LIMIT 1;"""


def connect():
    return sqlite3.connect("data.db")


def create_tables(conn):
    with conn:
        conn.execute(CREATE_BEAN_TABLE)


def add_bean(conn, name, method, rating):
    with conn:
        conn.execute(INSERT_BEAN, (name, method, rating))


def get_all_beans(conn):
    with conn:
        return conn.execute(GET_ALL_BEANS).fetchall()


def get_beans_by_name(conn, name):
    with conn:
        return conn.execute(GET_BEANS_BY_NAME, (name,)).fetchall()


def get_best_preparation_for_bean(conn, name):
    with conn:
        return conn.execute(GET_BEST_PREPARATION_FOR_BEAN, (name,)).fetchone()
