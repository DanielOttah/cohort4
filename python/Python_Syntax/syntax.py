
# +++++++ VARIABLE ++++++++++++++
import functools


def isVariable():
    _isVariable = "Daniel"
    return _isVariable

# +++++++NUMBER ++++++++++++++


def isNumber(num):
    _isNumber = 5
    return _isNumber+num

# +++++++ STRING ++++++++++++++


def isString():
    _isString = "Hello"
    return _isString

# +++++++ BOOLEAN ++++++++++++++


def isBoolean():
    _isBoolean = True
    return _isBoolean

# +++++++ UNDEFINED ++++++++++++++


def isNone():
    _isNone = None
    return _isNone

# +++++++ IF/ELSE ++++++++++++++


def if_Statement(val):
    if val > 10:
        return "Value is greater than 10"
    else:
        return "Value is not greater than 10"


# +++++++++++++ LIST METHODS ++++++++++++++++++

def isAList(arr):
    _isArray = []
    _isArray.append(arr[0])
    _isArray.append(sum(arr))
    _isArray.append(len(arr))
    return _isArray


def addToFrontOFList(frt, arr):
    arr.insert(0, frt)
    return arr


def addToPositionOFList(frt, arr, ind):
    arr.insert(ind, frt)
    return arr


def addToEndOFList(frt, arr):
    arr.append(frt)
    return arr

    # +++++++++++++ TUPLE METHODS ++++++++++++++++++


def isATuple(arr):
    _isArray = []
    _isArray.append(arr[0])
    _isArray.append(sum(arr))
    _isArray.append(len(arr))
    return _isArray

# +++++++ LOOPS ++++++++++++++


def aForLoop(arry):
    doubled = [x*2 for x in arry]
    return doubled


def aWhileLoop(start, count):
    i = start
    while i < count:
        i += 1
    return i


# ======== NICE WAY TO DELETE AN ITEM FROM A LIST ======================
items = [1, 2, 3, 4, 5, 6]


def dele(name):
    global items
    items = list(filter(lambda x: x != name, items))


dele(2)
# print(items)


# ======== Using the reduce() ======================
lis = [1, 3, 5, 6, 2, ]

# # using reduce to compute sum of list
# print("The sum of the list elements is : ", end="")
# print(functools.reduce(lambda a, b: a+b, lis))
# # using reduce to compute maximum element from list
# print("The maximum element of the list is : ", end="")
# print(functools.reduce(lambda a, b: a if a > b else b, lis))


# ======== Update a dicionary using update() ======================
dictn = {'name': "bob", 'age': 35, 'wt': 100}

dictn.update({'name': 'Mike'})
dictn.update({'age': 29})

print(dictn)


# print(isinstance(type(isNone()), None))
# print(addToPositionOFList(100, [1, 2, 3, 4, 5], 3))
