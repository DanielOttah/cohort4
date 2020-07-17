import csv
# API for the data is
# https://data.calgary.ca/resource/cc4n-ndvs.json

# _path = "C:/code/cohort4/python/test.txt"
# _path = "Census_by_Community_2018.csv"
_path = "csv.csv"


def get_all_data(file_name):
    total = 0
    class_tot = {"Residential": 0, "Industrial": 0,
                 "Major Park Area": 0, "Residual": 0}
    sect_tot = {"Centre": 0, "East": 0, "West": 0, "North": 0, "Northeast": 0,
                "Northwest": 0, "South": 0, "Southeast": 0, "Southwest": 0}
    all_result = {}
    with open(file_name, 'r', encoding='utf-8') as csv_file:
        csv_reader = csv.DictReader(csv_file, delimiter=',')
        for x in csv_reader:
            total += 1
            # ============ CLASS ======================
            if x['CLASS'] == "Residential":
                class_tot["Residential"] += int(x["RES_CNT"])
            elif x['CLASS'] == "Industrial":
                class_tot["Industrial"] += int(x["RES_CNT"])
            elif x['CLASS'] == "Residual":
                class_tot["Residual"] += int(x["RES_CNT"])
            elif x['CLASS'] == "Major Park Area":
                class_tot["Major Park Area"] += int(x["RES_CNT"])
            # print(x["CLASS"], x["SECTOR"], x["RES_CNT"])
            # ============ SECTOR ======================
            if x['SECTOR'] == "CENTRE":
                sect_tot["Centre"] += int(x["RES_CNT"])
            elif x['SECTOR'] == "EAST":
                sect_tot["East"] += int(x["RES_CNT"])
            elif x['SECTOR'] == "WEST":
                sect_tot["West"] += int(x["RES_CNT"])
            elif x['SECTOR'] == "NORTH":
                sect_tot["North"] += int(x["RES_CNT"])
            elif x['SECTOR'] == "NORTHEAST":
                sect_tot["Northeast"] += int(x["RES_CNT"])
            elif x['SECTOR'] == "SOUTH":
                sect_tot["South"] += int(x["RES_CNT"])
            elif x['SECTOR'] == "SOUTHWEST":
                sect_tot["Southwest"] += int(x["RES_CNT"])
            elif x['SECTOR'] == "SOUTHEAST":
                sect_tot["Southeast"] += int(x["RES_CNT"])
            elif x['SECTOR'] == "NORTHWEST":
                sect_tot["Northwest"] += int(x["RES_CNT"])
    all_result["total"] = total
    all_result["tot_class"] = sum(class_tot.values())
    all_result["tot_sector"] = sum(sect_tot.values())
    all_result["class"] = class_tot
    all_result["sector"] = sect_tot
    return all_result


def make_report(dat):
    with open("report.txt", 'w', encoding='utf-8') as f:
        f.write(
            "=========== A PROGRAM TO READ CSV FILE IN PYTHON ====================\n")
        f.write("***Beginning of report ...\n")
        f.writelines([f"\nThe total number of lines: {dat['total']}\n",
                      f"The total for the Class Data is: {dat['tot_class']}\n",
                      f"The total for the Sector Data is: {dat['tot_sector']}\n",
                      "\n+++ Class Data:\n",
                      f"The residential class has a total count of {dat['class']['Residential']}\n",
                      f"The Industrial class has a total count of {dat['class']['Industrial']}\n",
                      f"The Residual class has a total count of {dat['class']['Residual']}\n",
                      f"The Major Park Area class has a total count of {dat['class']['Major Park Area']}\n",
                      "\n+++ Sector Data:\n",
                      (f"The Centre sector has a total count of {dat['sector']['Centre']}\n"),
                      (f"The East sector has a total count of {dat['sector']['East']}\n"),
                      (f"The West sector has a total count of {dat['sector']['West']}\n"),
                      (f"The North sector has a total count of {dat['sector']['North']}\n"),
                      (f"The South sector has a total count of {dat['sector']['South']}\n"),
                      (f"The Northeast sector has a total count of {dat['sector']['Northeast']}\n"),
                      (f"The Northwest sector has a total count of {dat['sector']['Northwest']}\n"),
                      (f"The Southeast sector has a total count of {dat['sector']['Southeast']}\n"),
                      (f"The Southwest sector has a total count of {dat['sector']['Southwest']}\n")
                      ])
        f.write("***End of report ...\n")
        f.close()


res = get_all_data(_path)
make_report(res)
print(f"The total number of lines: {res['total']}")
print(f"The total for the Class Data is: {res['tot_class']}")
print(f"The total for the Sector Data is: {res['tot_sector']}")
# print("")
# print("Class Data:")
# print(
#     f"The residential class has a total count of {res['class']['Residential']}")
# print(
#     f"The Industrial class has a total count of {res['class']['Industrial']}")
# print(f"The Residual class has a total count of {res['class']['Residual']}")
# print(
#     f"The Major Park Area class has a total count of {res['class']['Major Park Area']}\n")
# print("")
# print("Sector Data:")
# print(f"The Centre sector has a total count of {res['sector']['Centre']}")
# print(f"The East sector has a total count of {res['sector']['East']}")
# print(f"The West sector has a total count of {res['sector']['West']}")
# print(f"The North sector has a total count of {res['sector']['North']}")
# print(f"The South sector has a total count of {res['sector']['South']}")
# print(
#     f"The Northeast sector has a total count of {res['sector']['Northeast']}")
# print(
#     f"The Northwest sector has a total count of {res['sector']['Northwest']}")
# print(
#     f"The Southeast sector has a total count of {res['sector']['Southeast']}")
# print(
#     f"The Southwest sector has a total count of {res['sector']['Southwest']}")
