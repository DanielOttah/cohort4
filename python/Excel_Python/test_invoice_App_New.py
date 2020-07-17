import pytest
import datetime
from invoice_App_New import get_Client_Invoices, getInvoice, report_Invoice, getCustomer, getProductBought, getInvoiceList
# from datetime import date , , , ,


def test_customer_Accessed():
    assert getCustomer(101) == {
        "email": "kim.burrel@ymail.com",
        "first_name": "Kim",
        "last_name": "Burrel",
        "phone": "403-777-1236"
    }
    assert getCustomer(102)['first_name'] == 'Fred'
    assert getCustomer(104)['email'] == 'ken.buntley@ymail.com'
    assert getCustomer(105)['last_name'] == 'Maddison'
    assert getCustomer(111)['phone'] == '403-777-1246'


def test_invoice_Accessed():
    assert getInvoice(5) == {'customer_id': 106, 'invoice_number': '000-1239',
                             'date_of_invoice': datetime.datetime(2020, 5, 9, 0, 0)}
    assert getInvoice(1) == {'customer_id': 104, 'invoice_number': '000-1235',
                             'date_of_invoice': datetime.datetime(2020, 5, 1, 0, 0)}
    assert getInvoice(3) == {'customer_id': 111, 'invoice_number': '000-1237',
                             'date_of_invoice': datetime.datetime(2020, 5, 5, 0, 0)}
    assert getInvoice(5)['customer_id'] == 106


def test_invoiceList_Accessed():
    assert getInvoiceList(4) == {
        "invoice_id": 4,
        "invoice_qty": 4,
        "product_id": 7
    }
    assert getInvoiceList(10) == {
        "invoice_id": 10,
        "invoice_qty": 2,
        "product_id": 5
    }
    assert getInvoiceList(7) == {
        "invoice_id": 7,
        "invoice_qty": 6,
        "product_id": 10
    }
    assert getInvoiceList(9) == {
        "invoice_id": 9,
        "invoice_qty": 4,
        "product_id": 9
    }


def test_Product_Accessed():
    assert getProductBought(4) == {
        "price": 2,
        "product_name": "Blueberry Muffin"
    }
    assert getProductBought(7) == {
        "price": 8,
        "product_name": "Cheese"
    }
    assert getProductBought(13) == {
        "price": 20,
        "product_name": "Cake"
    }
    assert getProductBought(9) == {
        "price": 1,
        "product_name": "Hot Dog"
    }


def test_invoice_created():
    # pass
    assert report_Invoice(5) == """
    =========== Invoice Report =================
    Invoice number: 000-1239
    Customer name: Tom Hanks
    Customer email: tom.hanks@ymail.com
    Customer phone: 403-777-1241
    Item(s): Bread | $2 each
    Quantity: 9
    Total cost: $CAD 18
    =========== End of Report ================="""

    assert report_Invoice(2) == """
    =========== Invoice Report =================
    Invoice number: 000-1236
    Customer name: Fred Hammond
    Customer email: fred.hammond@ymail.com
    Customer phone: 403-777-1237
    Item(s): Mixed Fries | $3 each
    Quantity: 5
    Total cost: $CAD 15
    =========== End of Report ================="""


def test_get_Client_Invoices_Accessed():
    assert get_Client_Invoices(102) == [
        {'customer_id': 102,
         'invoice_number': '000-1236',
         'date_of_invoice': datetime.datetime(2020, 5, 3, 0, 0),
         'invoice_id': 2
         },
        {'customer_id': 102,
         'invoice_number': '000-3561',
         'date_of_invoice': datetime.datetime(2020, 5, 23, 0, 0),
         'invoice_id': 12
         }]

    assert get_Client_Invoices(101) == [
        {'customer_id': 101,
         'invoice_number': '000-1244',
         'date_of_invoice': datetime.datetime(2020, 5, 19, 0, 0),
         'invoice_id': 10
         }]
