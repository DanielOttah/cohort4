# import pytest
import io_python


def test_getfile_open_And_read():
    f = io_python.getfile_open_And_read("test.txt")
    assert f.tell() >= 0


def test_get_number_of_lines():
    result = io_python.get_number_of_lines()
    assert result[0] > 0
    assert result[1] > 0


def test_get_number_of_characters():
    result = io_python.get_number_of_characters()
    assert result > 0
    assert result != 0


def test_get_number_of_occurrences():
    result = io_python.get_number_of_occurrences('else')
    assert result > 0
    assert result != 0


def test_list_directory():
    _path = "C:/code/cohort4/01-getting-started/src/"
    result = io_python.list_directory(_path)
    assert result[0] > 0
    assert result[1] > 0
