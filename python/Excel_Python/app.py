from invoice_App_New import report_Invoice, get_Client_Invoices
# from invoice_App_Dict import build_dict

print("=========== Customer/Invoice Creator =================")
print("""Do you want to print an Invoice or Customer Invoice? 
(1 - Invoice/2 - Customer Invoice""")
response = input('Enter response:')
if(response == '1'):
    print("Current Invoices in System are, select one:")
    print("'1','2', '3','4','5','6','7','8','9','10'")
    invoice_report = report_Invoice(int(input("Enter invoice id:")))
    print(invoice_report)
elif(response == '2'):
    print("Current Customers in System are, select one:")
    # 106 | 102
    print("'104','102', '111','107','106','103','109','108','110','101','105'")
    customer_report = get_Client_Invoices(int(input("Enter customer id:")))
    for x in customer_report:
        print(report_Invoice(x['invoice_id']))
