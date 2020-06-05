from typing import List

#  l = {"Bob", "Mike", "James"}
# print(l)

# l.add("Suo")
# print(l)
# l.remove("Bob")
# print(l)

########### LIST COMPREHENSION ####################
# numbers = [1, 3, 5]
# doubled = [x*2 for x in numbers]
# print(doubled)

# friends = ["Rol", "Sam", "Samantha", "Saurabh", "Jen", "Suo"]
# starts_s = []
# # starts_s1 = []

# for frnd in friends:
#     if frnd.startswith("S"):
#         starts_s.append(frnd)

# print(starts_s)


# starts_s1 = [x for x in friends if x.startswith("S")]
# print(starts_s1)

# print(f"Friends-id is:", id(friends), "Starts_s-id is:", id(starts_s))

############### DICTIONARIES ############################
# EG1
# friend_ages = {"Rolf": 24, "Adam": 30, "Anne": 27}
# print(friend_ages["Adam"])
# friend_ages["Bob"] = 20
# print(friend_ages)

# # EG2
# friend = [
#     {"name": "Rolf", "age": 24},
#     {"name": "Adam", "age": 30},
#     {"name": "Anne", "age": 27},
# ]
# print(friend[1]["name"])

# # EG3
# student_attendance = {"Rolf": 96, "Adam": 80, "Anne": 100}
# for student, attendance in student_attendance.items():
#     print(f"{student}: {attendance}")

#     # eg4

# values = student_attendance.values()
# print(f"The average is: {sum(values)/len(values)}%")

############### DESTRUCTURING ############################
# EG1
# student_attendance = {"Rolf": 96, "Adam": 80, "Anne": 100}

# for student in student_attendance.items():
#     print(student)

# for student, attendance in student_attendance.items():
#     print(f"{student}: {attendance}")

# t = (5, 11, 15)
# x, _, y = t
# print(x, y)

# EG2 - break a list into 2 bt getting the 1st and the rest
# head, *tail = [1, 2, 3, 4, 5]
# print(head)
# print(tail)
# li = [1, 2, 3, 4, 5]
# *head, tail = li
# print(*head)
# print(tail)

################# FUNCTIONS ########################
# friends = ["rolf", "Anne", "Mike"]


# def add_friends():
#     fr_name = input("Enter friend name here: ")
#     f = friends + [fr_name]
#     print(f)


# add_friends()


# def say_hello(f_name, surname):
#     print(f"Hello, {f_name} {surname}")


# say_hello(f_name='Daniel', surname='Ottah')


################# LAMBDA FUNCTIONS #######################
# print((lambda x, y: x+y)(5, 8))

# add = (lambda x, y: x+y)(5, 8)
# print(add)


# def double(x):
#     return x * 2


# sequence = [1, 3, 5, 9]

# doubled = [double(x) for x in sequence]
# print(doubled)
# doubled1 = [(lambda x: x * 2)(x) for x in sequence]
# print(doubled1)
# doubled2 = list(map(lambda x: x * 2, sequence))
# print(doubled2)

########### LIST COMPREHENSION ####################
# users = [
#     (1, "Bob", "password"),
#     (2, "Rolf", "bob123"),
#     (3, "Jose", "long4password"),
#     (4, "username", "1234"),
# ]

# username_mapping = {user[1]: user for user in users}
# print(username_mapping)

########### UNPACKING ARGUMENTS ####################
def multiply(*args):
    # print(args)
    total = 1
    for arg in args:
        total = total * arg
    return total


# print(multiply(1, 3, 5))


# def add(x, y):
#     return x + y


# nums = [3, 5]
# print(add(*nums))


# def times(x, y, z):
#     return x * y * z


# nums = {"x": 25, "y": 10, "z": 2}
# print(times(**nums))


# def apply(*args, operator):
#     if operator == "*":
#         return multiply(*args)
#     elif operator == "+":
#         return sum(args)


# print(apply(1, 3, 5, 7, operator="*"))


# def named(**kwargs):
#     print(kwargs)


# # named(name="Bob", age=25)


# def name_dict(name, age):
#     print(name, age)
#     return (name, age)


# details = {"name": "Bob", "age": 25}
# print(name_dict(**details))

# =============== OOP ================
# class Student:
#     def __init__(self):
#         self.name = "Rolf"
#         self.grades = (90, 90, 93, 78, 90)

#     def average_grade(self):
#         return sum(self.grades) / len(self.grades)


# student = Student()
# print(student.name)
# print(student.grades)
# print(student.average_grade())


# class Person:
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def __str__(self):
#         return f"{self.name} is {self.age} years old."

#     def __repr__(self):
#         return f"<Person('{self.name}', {self.age})>"


# bob = Person("Bob", 35)
# print(bob)
# ==================== CLASS & INSTANCE METHOD ========================
# class ClassTest:
#     def instance_method(self):
#         print(f"This is an instance method of {self}")

#     @classmethod
#     def class_method(cls):
#         print(f"This is a class method of {cls}")

#     @staticmethod
#     def static_method():
#         print("Called static method")


# test = ClassTest()
# test.instance_method()

# ClassTest.class_method()

# ClassTest.static_method()

# ================= INHERITANCE ===================
# class Device:
#     def __init__(self, name, connected_by):
#         self.name = name
#         self.connected_by = connected_by
#         self.connected = True

#     def __str__(self):
#         return f"Device - {self.name!r} ({self.connected_by})"

#     def disconnected(self):
#         self.connected = False
#         print("Disconnected.")


# class Printer(Device):
#     def __init__(self, name, connected_by, capacity):
#         super().__init__(name, connected_by)
#         self.capacity = capacity
#         self.remaining_pages = capacity

#     def __str__(self):
#         return f"{super().__str__()} ({self.remaining_pages} pages remaining))"

#     def display(self, pages):
#         if not self.connected:
#             print("Your printer is not connected!")
#             return
#         print(f"Printing {pages} pages")
#         self.remaining_pages -= pages


# printer = Printer("Printer", "USB", 500)
# printer.display(20)
# print(printer)
# printer.disconnected()
# printer.display(50)


# ======================= CLASS COMPOSITION ========================
# A CLASS THAT CONTAINS A BINCH OF OTHER CLASSES
# eg

# class BookShelf:
#     def __init__(self, *books):
#         self.books = books

#     def __str__(self):
#         return f"The BookShelf has {len(self.books)} books."


# class Books:
#     def __init__(self, name):
#         self.name = name

#     def __str__(self):
#         return f"Book title is {self.name}"


# book1 = Books("Eng Maths")
# book2 = Books("Python 101")
# book3 = Books("JS 101")
# shelf = BookShelf(book1, book2, book3)
# print(shelf)
# print(book1)
# print(book2)

# ================== TYPE HINTING ======================
# nb the ': list' tells python that the parameter is a list and
#'-> float' tells python that it should expect to return a float
# Alternatively, we can use 'from typing import List' = better method
# def list_avg(sequence: List) -> float:
#     return sum(sequence) / len(sequence)


# print(list_avg([1, 2, 3, 4, 5]))

# ==================== Imports ===========================
# import code
# the we use it by calling the methods like 'code.divide'
# print(code.divide(50, 5))


# OR


# from code import divide

# print(divide(50, 5))

# ==================== ERRORS ===========================
# def divide(dividend, divisor):
#     if divisor == 0:
#         raise ZeroDivisionError("divisor cannot be zero")

#     return dividend / divisor


# grades = []
# try:
#     average = divide(sum(grades) / len(grades))
# except ZeroDivisionError as e:
#     print("There are no grades in your list")
# else:
#     print(average)
# finally:
#     print("Thank you")

# nb Custom errors are inherited from already built in error classes

# ======================= FIRST CLASS FUNCTIONS/DECORATING ============================
# import functools

# user = {"name": "Danny", "access_level": "guest"}


# def make_secure(func):
#     @functools.wraps(func)
#     def secure_function():
#         if user["access_level"] == "admin":
#             return func()
#         else:
#             return f"No admin priviledges for {user['name']}"

#     return secure_function


# @make_secure
# def get_admin_password():
#     return "1234"


# get_password = make_secure(get_admin_password) # NB - if this method is used, then no need for @make_secure above the def get_admin_password()
# print(get_password())

# print(get_admin_password())

# there are some libraries that use internal naming to carry out executions. So, if we run
# print(get_admin_password.__name__) it will display 'secure_function because we replaced it in 'make_secure' function
# To avoid this we import functools and use it as a wrapper as is in line 352 then 'get_admin_password.__name__' will retain the original name

# ======================= DECORATORS WITH PARAMETERS ============================
import functools

user = {"name": "Danny", "access_level": "admin"}


def make_secure(func):
    @functools.wraps(func)
    def secure_function(*args, **kwargs):
        if user["access_level"] == "admin":
            return func(*args, **kwargs)
        else:
            return f"No admin priviledges for {user['name']}"

    return secure_function


@make_secure
def get_password(panel):
    if panel == "admin":
        return "1234"
    elif panel == "billing":
        return "super_secure_password"


print(get_password("billing"))
