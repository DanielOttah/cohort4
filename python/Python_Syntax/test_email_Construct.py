import pytest
from email_Construct import emailApp


def test_emailApp():
    assert emailApp("Larry", "Shumlich") == "larry.shumlich@evolveu.ca"
    assert emailApp("Heiko", "Peters") == "heiko.peters@evolveu.ca"
    assert emailApp("Larry", "Shumlich") != "heiko.peters@evolveu.ca"
    assert emailApp("Heiko", "Peters") != "larry.shumlich@evolveu.ca"
    assert emailApp("", "") == None
