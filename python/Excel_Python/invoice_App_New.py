from invoice_App_XL_Dict import build_dict

data = build_dict()  # Call build_dict() to load data from Excel File {}  #


def getInvoice(invoice_id):
    return data.get('Invoices').get(invoice_id)


def getCustomer(customer_id):
    return data.get('customers').get(customer_id)


def getProductBought(prod_id):
    return data.get('products').get(prod_id)


def getInvoiceList(invoice_id):
    invoice_list = data.get('Invoice_list')
    for value in invoice_list.values():
        if(value['invoice_id'] == invoice_id):
            return value


def get_Client_Invoices(customer_id):
    cust = []
    invoice = data.get('Invoices')  # Assign the invoice sheet into invoice
    # destructure key (invoive_id) and value (cust_id, invoice_no & date_of_inv)
    for (key, value) in invoice.items():
        if(value['customer_id'] == customer_id):  # get details matching customer_id
            value.update([('invoice_id', key)])
            cust.append(value)
    return cust


def report_Invoice(invoice_id):
    cust = getInvoice(invoice_id)  # nb cust is (customer_id,invoice number)
    customer = getCustomer(cust['customer_id'])
    goods = getInvoiceList(invoice_id)  # nb goods is (product_id,quantity)
    item = getProductBought(goods['product_id'])  # nb item is (product,price)
    total_item_cost = item["price"]*goods["invoice_qty"]
    return f"""
    =========== Invoice Report =================
    Invoice number: {cust['invoice_number']}
    Customer name: {customer['first_name']} {customer['last_name']}
    Customer email: {customer['email']}
    Customer phone: {customer['phone']}
    Item(s): {item["product_name"]} | ${item["price"]} each
    Quantity: {goods["invoice_qty"]}
    Total cost: $CAD {total_item_cost}
    =========== End of Report ================="""
    # return cust
