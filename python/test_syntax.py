import pytest
from syntax import *


def test_isVariable():
    assert isVariable() == "Daniel"
    assert isVariable() != "Larry"


def test_isNumber():
    assert isNumber(4) == 9
    assert isNumber(3) != 1
    assert str(isNumber(3)).isdigit() == True
    assert isinstance(isNumber(1), int) == True


def test_isString():
    assert isinstance(isString(), str) == True
    assert isinstance(isString(), int) == False


def test_isBoolean():
    assert isBoolean() == True
    assert isinstance(isBoolean(), bool) == True
    assert isBoolean() != False


def test_isNone():
    assert isNone() == None
    assert isinstance(isNone(), list) == False
    assert isinstance(isNone(), str) == False
    assert isinstance(isNone(), int) == False


def test_if_Statement():
    assert if_Statement(11) == "Value is greater than 10"
    assert if_Statement(1) == "Value is not greater than 10"

# +++++++++++++ LIST METHODS ++++++++++++++++++


def test_isAList():
    arr = [1, 2, 3, 4, 5]
    assert isAList(arr)[0] == 1
    assert isAList(arr)[1] == 15
    assert isAList(arr)[2] == 5
    assert isinstance(isAList(arr), list) == True


def test_addToFrontOFList():
    arr = [1, 2, 3, 4, 5]
    result = addToFrontOFList(100, arr)
    assert result[0] == 100
    assert len(result) == 6


def test_addToPositionOFList():
    arr = [1, 2, 3, 4, 5]
    result = addToPositionOFList(100, arr, 3)
    assert result[3] == 100
    assert len(result) == 6


def test_addToEndOFList():
    arr = [1, 2, 3, 4, 5]
    result = addToEndOFList(100, arr)
    assert len(result) == 6
    assert result[len(result)-1] == 100

# +++++++++++++ TUPLE METHODS ++++++++++++++++++


def test_isATuple():
    arr = (1, 2, 3, 4, 5)
    assert isATuple(arr)[0] == 1
    assert isATuple(arr)[1] == 15
    assert isATuple(arr)[2] == 5
    assert isinstance(arr, tuple) == True

# +++++++ LOOPS ++++++++++++++


def test_aForLoop():
    arr = [1, 2, 3, 4, 5]
    tup = (2, 4, 6, 8)
    resultList = aForLoop(arr)
    resultTuple = aForLoop(tup)
    assert resultList[0] == 2
    assert resultList[len(resultList)-1] == 10
    assert sum(resultList) == 30
    assert resultTuple[0] == 4
    assert resultTuple[len(resultTuple)-1] == 16
    assert sum(resultTuple) == 40


def test_aWhileLoop():
    result = aWhileLoop(1, 6)
    assert result == 6


def test_isDict():
    my_dict = {"Bob": 25, "Jane": 33, "Rudolf": 29}
    assert my_dict["Bob"] == 25
    assert my_dict["Rudolf"] == 29
    assert my_dict.get("Jane") == 33
    assert len(my_dict) == 3
    assert isinstance(my_dict, dict) == True
