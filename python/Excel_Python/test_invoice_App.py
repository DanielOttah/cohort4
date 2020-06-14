from openpyxl import load_workbook
import pytest
import os
from invoice_App import getCustomer, getInvoice, getInvoiceList, Customer, report_Invoice, getProductBought
# from datetime import date

wkBk = load_workbook('./excel_files/Invoices_App.xlsx')


def test_WorkBook_Accessed():
    ex_file = False
    if "Invoices_App.xlsx" in os.listdir('./excel_files'):
        ex_file = True
    assert ex_file == True


def test_customer_Accessed():
    assert getCustomer(102).fname == 'Fred'
    assert getCustomer(104).email == 'ken.buntley@ymail.com'
    assert getCustomer(105).lname == 'Maddison'
    assert getCustomer(111).phone == '403-777-1246'


def test_invoice_Accessed():
    assert getInvoice(5) == (106, '000-1239', '2020-05-09 00:00:00')
    assert getInvoice(10) == (101, '000-1244', '2020-05-19 00:00:00')
    assert getInvoice(1) == (104, '000-1235', '2020-05-01 00:00:00')
    assert getInvoice(3) == (111, '000-1237', '2020-05-05 00:00:00')
    assert getInvoice(5)[2] == ('2020-05-09 00:00:00')


def test_customer():
    cust = Customer('Mike', 'Norton', 'mike.norton@ymail.com', '444-000-1234')
    assert cust.fname == 'Mike'
    assert cust.customerFullName() == 'Mike Norton'
    assert cust.phone == '444-000-1234'
    assert cust.customerDetail() == {
        'name': 'Mike Norton', 'email': 'mike.norton@ymail.com', 'phone': '444-000-1234'}


def test_invoiceList_Accessed():
    assert getInvoiceList(4) == (7, 4)
    assert getInvoiceList(7) == (10, 6)
    assert getInvoiceList(10) == (5, 2)


def test_Product_Accessed():
    assert getProductBought(7) == ('Cheese', 8)
    assert getProductBought(13) == ('Cake', 20)
    assert getProductBought(9) == ('Hot Dog', 1)


def test_invoice_created():
    pass
    assert report_Invoice(5) == """
    Invoice number: 000-1239
    Customer name: Tom Hanks
    Customer email: tom.hanks@ymail.com
    Customer phone: 403-777-1241
    Item(s): Bread
    Quantity: 9
    Total cost: $CAD 18"""

    assert report_Invoice(2) == """
    Invoice number: 000-1236
    Customer name: Fred Hammond
    Customer email: fred.hammond@ymail.com
    Customer phone: 403-777-1237
    Item(s): Mixed Fries
    Quantity: 5
    Total cost: $CAD 15"""
