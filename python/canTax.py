# class NotNumberError(ValueError):
#     pass


print("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
print("============== The Canadian Tax Calculator App ==========")
print("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
print("")


def calc_Tax(taxableIncome):
    result = []
    if taxableIncome == "" or taxableIncome.isdigit() == False:
        # return
        raise ValueError()
    elif taxableIncome.isdigit() == True:
        print("Calculating ...")
        b1, b2, b3, b4 = 48535, 48534, 53404, 63895
        if float(taxableIncome) < b1:
            income = first_Category(taxableIncome)
            print(
                f"With total income of $CAD {taxableIncome}, your tax is $CAD {income} and have an income of $CAD {float(taxableIncome)-income}")
            return income
            # print(
            #     f"With total income of $CAD {taxableIncome}, your tax bracket is 15% ~ $CAD {income} and have an income of $CAD {float(taxableIncome)-income}")
        if float(taxableIncome) > b1 and float(taxableIncome) <= 97069:
            income_b1 = first_Category(b1)
            income_b2 = second_Category(float(taxableIncome) - b1)
            print(
                f"With total income of $CAD {taxableIncome}, your tax is $CAD {income_b1+income_b2} and have an income of $CAD {float(taxableIncome)-(income_b1+income_b2)}")
            return income_b1+income_b2
            # print(
            #     f"With total income of $CAD {taxableIncome}, your tax brackets are 15% on $CAD {b1} ~ $CAD {income_b1} | 20.5% on $CAD {float(taxableIncome) - b1} ~ $CAD {income_b2} and have an income of $CAD {float(taxableIncome)-(income_b1+income_b2)}")
        if float(taxableIncome) > 97069 and float(taxableIncome) <= 150473:
            income_b1 = first_Category(b1)
            income_b2 = second_Category(b2)
            income_b3 = third_Category(float(taxableIncome) - 97069)
            print(
                f"With total income of $CAD {taxableIncome}, your tax is $CAD {income_b1+income_b2+income_b3} and have an income of $CAD {float(taxableIncome)-(income_b1+income_b2+income_b3)}")
            return income_b1+income_b2+income_b3
            # print(
            #     f"With total income of $CAD {taxableIncome}, your tax brackets are 15% on $CAD {b1} ~ $CAD {income_b1} | 20.5% on $CAD {b2} ~ $CAD {income_b2} | 26% on $CAD {float(taxableIncome) -97069} ~ $CAD {income_b3} and have an income of $CAD {float(taxableIncome)-(income_b1+income_b2+income_b3)}")
        if float(taxableIncome) > 150473 and float(taxableIncome) <= 214368:
            income_b1 = first_Category(b1)
            income_b2 = second_Category(b2)
            income_b3 = third_Category(b3)
            income_b4 = fourth_Category(float(taxableIncome) - 150473)
            print(
                f"With total income of $CAD {taxableIncome}, your tax is $CAD {income_b1+income_b2+income_b3+income_b4} and have an income of $CAD {float(taxableIncome)-(income_b1+income_b2+income_b3+income_b4)}")
            return income_b1+income_b2+income_b3+income_b4
            # print(
            #     f"With total income of $CAD {taxableIncome}, your tax brackets are 15% on $CAD {b1} ~ $CAD {income_b1} | 20.5% on $CAD {b2} ~ $CAD {income_b2} | 26% on $CAD {b3} ~ $CAD {income_b3} | 29% on $CAD {float(taxableIncome) -150473} ~ $CAD {income_b4} and have an income of $CAD {float(taxableIncome)-(income_b1+income_b2+income_b3+income_b4)}")
        if float(taxableIncome) > 214368:
            income_b1 = first_Category(b1)
            income_b2 = second_Category(b2)
            income_b3 = third_Category(b3)
            income_b4 = fourth_Category(b4)
            income_b5 = fifth_Category(float(taxableIncome) - 214368)
            print(
                f"With total income of $CAD {taxableIncome}, your tax is $CAD {income_b1+income_b2+income_b3+income_b4+income_b5} and have an income of $CAD {float(taxableIncome)-(income_b1+income_b2+income_b3+income_b4+income_b5)}")
            return income_b1+income_b2+income_b3+income_b4+income_b5
            # print(
            #     f"With total income of $CAD {taxableIncome}, your tax brackets are 15% on $CAD {b1} ~ $CAD {income_b1} | 20.5% on $CAD {b2} ~ $CAD {income_b2} | 26% on $CAD {b3} ~ $CAD {income_b3} | 29% on $CAD {b4} ~ $CAD {income_b4} | 33% on $CAD {float(taxableIncome) -214368} ~ $CAD {income_b5} and have an income of $CAD {float(taxableIncome)-(income_b1+income_b2+income_b3+income_b4+income_b5)}")


def first_Category(num):
    return (float(num) * 15)/100


def second_Category(num):
    return (float(num) * 20.5)/100


def third_Category(num):
    return (float(num) * 26)/100


def fourth_Category(num):
    return (float(num) * 29)/100


def fifth_Category(num):
    return (float(num) * 33)/100


# TODO
# try:
#     # total_income = input('Enter total income: $CAD ')
#     calc_Tax(total_income := input('Enter total income: $CAD '))
# except ValueError as e:
#     print(f"'{total_income}' is not a valid number")


print("")
print("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
print("======================== End of App ======================")
print("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
