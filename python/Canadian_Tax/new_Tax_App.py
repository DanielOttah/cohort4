tax_cutoffs = [48535, 97069, 150473, 214368]
tax_brackets = [0.15, 0.205, 0.26, 0.29, 0.33]


def calc_Tax(tot_income):
    income = float(tot_income)
    tax_index = 0
    for x in tax_cutoffs:
        if(income <= x):
            tax_index = tax_cutoffs.index(x)
            break
        tax_index = len(tax_cutoffs)

    if(tax_index == 0):  # Less than 48535
        return round((income*tax_brackets[tax_index]), 2)

    if(tax_index == 1):  # 48535 > income < 97069
        return round(((income-tax_cutoffs[tax_index-1])*tax_brackets[tax_index])+7280, 2)

    if(tax_index == 2):  # 97069 > income < 150473
        return round(((income-tax_cutoffs[tax_index-1])*tax_brackets[tax_index])+17230, 2)

    if(tax_index == 3):  # 150473 > income < 214368
        return round(((income-tax_cutoffs[tax_index-1])*tax_brackets[tax_index])+31115, 2)

    if(tax_index == 4):  # income > 214368
        return round(((income-tax_cutoffs[tax_index-1])*tax_brackets[tax_index])+49645, 2)


can_Tax = [
    {"income": 48535, "tax_percent": 0.15, "base_value": 0},
    {"income": 97069, "tax_percent": 0.205, "base_value": 7280},
    {"income": 150473, "tax_percent": 0.26, "base_value": 17230},
    {"income": 214368, "tax_percent": 0.29, "base_value": 31115},
    {"income": 214368, "tax_percent": 0.33, "base_value": 49645},
]


def calc_Tax_Bases(income, tax_Obj, indx):
    if(indx >= 1):
        res = ((income-can_Tax[indx-1]['income']) *
               tax_Obj['tax_percent']) + tax_Obj['base_value']
    elif(indx < 1):
        res = income * tax_Obj['tax_percent']
    return round(res, 2)
    # return indx


def calc_Tax_dict(tot_income):
    tax = 0
    tax_index = 0
    income = float(tot_income)
    for each_baseValue in can_Tax:
        if(income <= each_baseValue['income']):
            return calc_Tax_Bases(income, each_baseValue, tax_index)
        tax_index += 1
    return calc_Tax_Bases(income, each_baseValue, tax_index)


print("============== The Canadian Tax Calculator App ==========")
print("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
print("")
if __name__ == "__main__":
    try:
        total_income = input('Enter total income: $CAD ')
        print(
            f"Total tax to be paid is CAD${calc_Tax_dict(total_income)} | CAD${calc_Tax(total_income)}")

    except ValueError as e:
        print(f"'{total_income}' is not a valid number")

    print("======================== End of App ======================")
