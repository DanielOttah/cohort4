import csv
import os
# API for the data is
# https://data.calgary.ca/resource/cc4n-ndvs.json

_path = "csv.txt"
# _path = "Census_by_Community_2018.csv"


def get_All():
    clss = {}
    sect = {}
    lineCount = 0
    with open(_path, 'r', encoding='utf-8') as csv_file:
        # csv_reader = csv.reader(csv_file, delimiter=',')
        csv_reader = csv.DictReader(csv_file, delimiter=',')
        next(csv_reader)
        for row in csv_reader:
            # clss[f"{row[0]}-{lineCount}"] = float(row[9])
            clss[f"{row.get('CLASS')}{lineCount}"] = float(row.get('RES_CNT'))
            sect[f"{row.get('SECT')}{lineCount}"] = float(row.get('RES_CNT'))
            lineCount += 1
    # print(lineCount)
    # print(sum(clss.values()))
    # print(sum(sect.values()))

    # print(clss)
    # print(sect)
    os.remove("report.txt")
    f = open("report.txt", "w")
    f.write(f"""
    ================== REPORT SUMMARY ===================================
    The total count according to a class category is {sum(clss.values())}
    The total count according to a sector category is {sum(sect.values())}
    The total number of lines read is {lineCount}
    ********************************************************************************
    =================================================================================
    |         CATEGORY             |             RESULT                             |
    =================================================================================
    |  Total Count by Class       |        {sum(clss.values())}                     |
    =================================================================================
    |  Total Count by Sector       |        {sum(clss.values())}                    |
    =================================================================================
    |  Total Lines Read           |        {lineCount}                              |
    =================================================================================
    =============================== END OF REPORT ===================================
    """)

    # f.write(
    #     f"The total count according to a class category is {sum(clss.values())}")
    # f.write(
    #     f"The total count according to a sector category is {sum(sect.values())}")
    # f.write(f"The total number of lines read is {lineCount}")
    # f.write(f"**********************************************************************")

    # f.write("=================================================================================")
    # f.write("|         CATEGORY             |             RESULT                              |")
    # f.write("=================================================================================")
    # f.write(
    #     f"|  Total Count by Class       |        {sum(clss.values())}                     |")
    # f.write("=================================================================================")
    # f.write(
    #     f"|  Total Count by Class       |        {sum(clss.values())}                     |")
    # f.write("=================================================================================")
    # f.write(
    #     f"|  Total Lines Read           |        {lineCount}                              |")
    # f.write("=================================================================================")

    # f.write("============== END OF REPORT ===================================")
    f.close()


# print(get_All())
get_All()
