# import pandas as pd

# ================= METHOD 1 ==============================
# df = pd.read_excel(
#     r'C:\code\cohort4\python\Excel_Python\Book.xlsx', sheet_name='Sheet1')
# # print(df) #prints entire table
# data = pd.DataFrame(df, columns=['Note', 'Key'])
# print(data)

# ================= METHOD 2 ==============================
# df = pd.ExcelFile('Book.xlsx')
# print(df.sheet_names)
# # data = df.parse('Sheet1')
# # print(data)
# dat = df.parse(0)
# print(dat['Note'][3:], dat['Key'][3:])

# ================= PLAY ==============================
age = 23
message = "Eligible" if age <= 65 else "Not Eligible"
print(message)


def fizz_buzz(number):
    if number % 3 == number % 5 == 0:
        return "FizzBuzz"
    if number % 3 == 0:
        return "Fizz"
    if number % 5 == 0:
        return "Buzz"

    return number


number = int(input("Enter your number: "))
print(fizz_buzz(number))
