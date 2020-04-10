// import { Account } from './account.js';
import { AccountController } from './account_copy.js';
const new_Account = new AccountController();


//===== Event Listeners ======================
// window.addEventListener('load', () => {
//     loadDetails();

// });
// 

//=================== Account Functions =====================================

const openNewAccount = () => {
    try {
        let name_Acc = acc_Name.value;
        let type_Acc = acc_Type.value;
        let address_Acc = acc_Address.value;

        let index = new_Account.getAccountUser(name_Acc);
        if (index != undefined) {
            throw "Account user already exist! You may want to update your account instead";
        }
        else if (index == undefined) {
            new_Account.createNewAccount(name_Acc, address_Acc, type_Acc);
            clearNewAccFields();
            appendCustomerDetail("name", name_Acc);

        }
    }
    catch (err) {
        alert(err)
    }
}
const updatExistingAccount = () => {
    try {
        let index = new_Account.getAccountUser(customers.value);
        let all_Accs = new_Account.returnAllAcc(index);
        if (all_Accs.includes(new_Acc_Type.value)) {
            throw "Account already exists. "
        }
        else {
            new_Account.upDateCustomer(customers.value, new_Acc_Type.value);
            report.textContent = `'${new_Acc_Type.value}' account is opened`;
            report.style.backgroundColor = "lightgreen";
            displayAccountDetails(customers.value)

        }
    } catch (err) {
        alert(err);
    }
}
const displayAccountDetails = () => {
    if (customers.value == "select") {

    }
    else {
        let accDropDown = allCustomerAcc.firstElementChild;
        let index = new_Account.getAccountUser(customers.value);
        parnt.style.display = "block";
        fName.textContent = new_Account.allCustomers[index].Name;
        address.textContent = new_Account.allCustomers[index].Address;

        imgs.src = `${new_Account.allCustomers[index].passport}`;
        signs.src = `${new_Account.allCustomers[index].signature}`;
        AccNumber.textContent = new_Account.allCustomers[index].Account_Number;
        let accnos = Object.keys(new_Account.allCustomers[index]);
        showAllUserAccounts.textContent = `Accounts: ${accnos.length - 5}`;

        while (accDropDown) {
            accDropDown.remove();
            accDropDown = allCustomerAcc.firstElementChild;
        }
        for (let r = 5; r < accnos.length; r++) {
            appendCustomerDetail("account", accnos[r])
        }
        totalAccountBalance.value = `CAD$ ${new_Account.accountTotal(customers.value)}`;

    }

}
const clearNewAccFields = () => {
    acc_Name.value = "";
    acc_Type.value = "";
    acc_Address.value = "";
    btnNewAcc.click();
}
const appendCustomerDetail = (nam, acc_detail) => {
    let opt = document.createElement('Option');
    if (nam == "name") {
        opt.appendChild(document.createTextNode(acc_detail));
        // existingCustomers.appendChild(opt);
        customers.appendChild(opt);

    } else if (nam == "account") {
        opt.appendChild(document.createTextNode(acc_detail));
        allCustomerAcc.appendChild(opt);
    }

}
const calcTransaction = () => {
    try {
        let userAccount = allCustomerAcc.value;
        let userName = customers.value;
        let amount = parseFloat(cashInputAcc1.value);

        if (txnAcc1.value == "deposit") {
            let txn = new_Account.deposit_Txn(userName, userAccount, amount)
            initCash.value = `$CAD ${txn[0]}`;
            accountBalance.value = `$CAD ${txn[1]}`;
        } else if (txnAcc1.value == "withdraw") {
            let txn = new_Account.withdraw_Txn(userName, userAccount, amount);
            if (txn == false) {
                throw "Invalid transaction. Not enough funds";
            } else {
                initCash.value = `$CAD ${txn[0]}`;
                accountBalance.value = `$CAD ${txn[1]}`;
            }
        }
        totalAccountBalance.value = `$CAD ${new_Account.accountTotal(userName)}`;

    } catch (err) {
        alert(err);
    }

}
const showAccounts = () => {
    let userAccount = allCustomerAcc.value;
    let userName = customers.value;
    let index = new_Account.getAccountUser(userName);
    initCash.value = `$CAD ${new_Account.allCustomers[index][userAccount]}`;
    accountBalance.value = `$CAD ${new_Account.allCustomers[index][userAccount]}`;
    totalAccountBalance.value = `$CAD ${new_Account.accountTotal(userName)}`;
}
const deleteAccount = () => {
    let userAccount = allCustomerAcc.value;
    let userName = customers.value;
    new_Account.removeAccount(userName, userAccount);
    displayAccountDetails();

}
const showAllAccounts = () => {
    let index = new_Account.getAccountUser(customers.value);
    let allAcc = new_Account.returnAllAcc(index);
    let divShowAcc = table.firstElementChild;
    while (divShowAcc) {
        divShowAcc.remove();
        divShowAcc = table.firstElementChild;
    }
    if (btnShowAllAcc.textContent == "+") {
        allAccounts.style.display = "block";
        btnShowAllAcc.textContent = "-";

        for (let i = 0; i < allAcc.length; i++) {
            createTableRow(index, allAcc[i]);
        }

    }
    else if (btnShowAllAcc.textContent == "-") {
        allAccounts.style.display = "none";
        btnShowAllAcc.textContent = "+";

    }
}
const createTableRow = (ind, acc) => {
    let tr = document.createElement("tr");
    let tdAcc = document.createElement("td");
    let tdBal = document.createElement("td");
    let accBal = new_Account.allCustomers[ind][acc];
    tdAcc.appendChild(document.createTextNode(acc));
    tdBal.appendChild(document.createTextNode(accBal));
    tr.appendChild(tdAcc);
    tr.appendChild(tdBal);
    table.appendChild(tr);

}

//========================== Event Handlers ================================= 
openAccount.addEventListener('click', openNewAccount);
updateAccount.addEventListener('click', updatExistingAccount);
customers.addEventListener('change', displayAccountDetails);
btnTxnAcc1.addEventListener('click', calcTransaction);
allCustomerAcc.addEventListener('change', showAccounts);
btnDeleteAcc.addEventListener('click', deleteAccount);
btnShowAllAcc.addEventListener('click', showAllAccounts);