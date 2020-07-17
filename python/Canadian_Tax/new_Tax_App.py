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


print("============== The Canadian Tax Calculator App ==========")
print("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
print("")
if __name__ == "__main__":
    try:
        # total_income = input('Enter total income: $CAD ')
        print(
            f"CAD${calc_Tax(total_income := input('Enter total income: $CAD '))}")
    except ValueError as e:
        print(f"'{total_income}' is not a valid number")

    print("======================== End of App ======================")
