import os
from pathlib import Path
from datetime import datetime


path_of_file = "C:/code/cohort4/01-getting-started/src/scripts/syntax.js"
path_of_file2 = "C:/code/cohort4/01-getting-started/src/"


def getfile_open_And_read(path_of_file):
    f = open(path_of_file, 'r', encoding='utf-8')
    return f


def get_number_of_lines():
    lines = [0, 0]  # [0] - Empty lines, [1] - filled lines
    io = getfile_open_And_read(path_of_file)
    for line in io:
        if line.isspace():
            lines[0] += 1
        else:
            lines[1] += 1
    io.close()
    return lines


def get_number_of_characters():
    io = getfile_open_And_read(path_of_file)
    characters = len(io.read())
    io.close()
    return characters


def get_number_of_occurrences(txt):
    occur = 0  # no of times 'else' occurs
    io = getfile_open_And_read(path_of_file)
    for line in io:
        if line.isspace():
            pass
        else:
            if txt in line:
                occur += line.count(txt)
    io.close()
    return occur


def main_Method():
    try:
        print("=============== PYTHON PROGRAM TO READ FILE ==================")
        print(
            f"The total number of lines in the file is: {get_number_of_lines()[1]}")
        print(
            f"The total number of occurences of 'else' in the file is: {get_number_of_occurrences('else')}")
        print(
            f"The total number of characters in the file is: {get_number_of_characters()}")
    except:
        print("An error occured!")
    finally:
        print("====================== END OF PROGRAM =========================")

# ================================ IO ==============================


def convert_date(timestamp):
    d = datetime.utcfromtimestamp(timestamp)
    formated_date = d.strftime('%d %b %Y')
    return formated_date


def list_directory(_path):
    # Method 1
    # entry = Path(_path)
    # for ent in entry.iterdir():
    #     # print(f"{ent.name} | {ent.stat().st_mtime}") #Just prints the time in digits
    #     # Formats the date
    #     # print(f"{ent.name}\t Last Modified:  {convert_date(ent.stat().st_mtime)}")
    #     print(f"{ent.name}\t Size:  {round(os.path.getsize(ent)/1000,2)}KB\t Last Modified:  {convert_date(ent.stat().st_mtime)} ")

    # Method 2
    # with os.scandir(_path) as dir:
    #     for entries in dir:
    #         print(entries.name)

    # Method 3 = Total Size
    res = [0, 0]
    entry = Path(_path)
    for ent in entry.iterdir():
        res[0] += 1
        res[1] += os.path.getsize(ent)
        # print(f"{ent.name}\t Size: {round(os.path.getsize(ent)/1000,2)}KB\t Last Modified: {convert_date(ent.stat().st_mtime)} ")
    print(
        f"Directory has {res[0]} file(s) and a total size of {res[1]/1000} KB")
    return res


# main_Method()
# list_directory(path_of_file2)
