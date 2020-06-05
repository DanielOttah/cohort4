import pandas as pd

# ================= METHOD 1 ==============================
# df = pd.read_excel(
#     r'C:\code\cohort4\python\Excel_Python\Invoices_App.xlsx', sheet_name='Customers')
# # print(df) #prints entire table
# data = pd.DataFrame(df)
# print(data)

# ================= METHOD 2 ==============================
df = pd.ExcelFile('Invoices_App.xlsx')
# print(df.sheet_names[0])
# data = df.parse('Sheet1')
# print(data)
dat = df.parse(df.sheet_names[0])  # df.parse(0)
print(dat)

# ================= PLAY 1 ==============================
# age = 23
# message = "Eligible" if age <= 65 else "Not Eligible"
# print(message)


# ================= PLAY 2 - FIZZ_BUZZ==============================
# def fizz_buzz(number):
#     if number % 3 == number % 5 == 0:
#         return "FizzBuzz"
#     if number % 3 == 0:
#         return "Fizz"
#     if number % 5 == 0:
#         return "Buzz"

#     return number


# number = int(input("Enter your number: "))
# print(fizz_buzz(number))
