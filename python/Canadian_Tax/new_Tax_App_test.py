# import pytest
from new_Tax_App import *
# FIXME
import pytest


def test_calc_Tax():
    assert calc_Tax(40000) == 6000
    assert calc_Tax(40000) != 15
    assert calc_Tax(45000) == 6750
    assert calc_Tax(60000) != 8000
    assert calc_Tax(50000) == 7580.32
    assert calc_Tax(80000) == 13730.33
    assert calc_Tax(180000) != 3500
    assert calc_Tax(100000) == 17992.06
    assert calc_Tax(160000) == 33877.83
    assert calc_Tax(250000) == 61403.56
    assert isinstance(calc_Tax(100), float) == True
