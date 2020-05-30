import csv_File_Reader


def test_get_all_data():
    # _path = "C:/code/cohort4/python/test.txt"
    _path = "Census_by_Community_2018.csv"
    f = csv_File_Reader.get_all_data(_path)
    assert f["total"] >= 0
