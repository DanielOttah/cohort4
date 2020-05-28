# import pytest
from canTax import *
# FIXME
import pytest


def test_first_Category():
    assert first_Category(100) == 15.0
    assert first_Category(100) != 85.0
    assert isinstance(first_Category(100), float) == True


def test_second_Category():
    assert second_Category(100) == 20.5
    assert second_Category(100) != 79.5
    assert isinstance(second_Category(100), float) == True


def test_third_Category():
    assert third_Category(100) == 26.0
    assert third_Category(100) != 74.0
    assert isinstance(third_Category(100), float) == True


def test_fourth_Category():
    assert fourth_Category(100) == 29.0
    assert fourth_Category(100) != 71.0
    assert isinstance(fourth_Category(100), float) == True


def test_fifth_Category():
    assert fifth_Category(100) == 33.0
    assert fifth_Category(100) != 67.0
    assert isinstance(fifth_Category(100), float) == True


def test_calc_Tax():
    val1, val2, val3, val4, val5 = "45000", "60000", "120000", "250000", "-500000"
    with pytest.raises(ValueError):
        calc_Tax("")
    with pytest.raises(ValueError):
        calc_Tax("asdf")
    with pytest.raises(ValueError):
        calc_Tax(val5)
    assert round(calc_Tax(val1), 2) == 6750.00
    assert round(calc_Tax(val2), 2) == 9630.58
    assert round(calc_Tax(val3), 2) == 23191.78
    assert round(calc_Tax(val4), 2) == 61402.87
