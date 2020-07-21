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
            if row.get('CLASS') in clss:
                clss[f"{row.get('CLASS')}"] += float(row.get('RES_CNT'))
            else:
                clss[f"{row.get('CLASS')}"] = float(row.get('RES_CNT'))
            if row.get('SECTOR') in sect:
                sect[f"{row.get('SECTOR')}"] += float(row.get('RES_CNT'))
            else:
                sect[f"{row.get('SECTOR')}"] = float(row.get('RES_CNT'))
            lineCount += 1

    print(clss)
    print(sect)

    # os.remove("report.txt")
    # f = open("report.txt", "w")
    # f.write(f"""
    # ================== REPORT SUMMARY ===================================
    # The total count according to a class category is {sum(clss.values())}
    # The total count according to a sector category is {sum(sect.values())}
    # The total number of lines read is {lineCount}
    # ********************************************************************************
    # =================================================================================
    # |         CATEGORY             |             RESULT                             |
    # =================================================================================
    # |  Total Count by Class       |        {sum(clss.values())}                     |
    # =================================================================================
    # |  Total Count by Sector       |        {sum(clss.values())}                    |
    # =================================================================================
    # |  Total Lines Read           |        {lineCount}                              |
    # =================================================================================
    # =============================== END OF REPORT ===================================
    # """)
    # f.close()


# print(get_All())
get_All()
