from invoice_App import report_Invoice

print("=========== Invoice Creator =================")
print("Current Invoices in System are, select one:")
print("'1','2', '3','4','5','6','7','8','9','10'")
repo = report_Invoice(int(input("Enter invoice id:")))
print("=========== Invoice Report =================")
print(repo)
print("\n=========== End of Report =================")
