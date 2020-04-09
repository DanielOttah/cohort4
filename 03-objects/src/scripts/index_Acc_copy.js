// import { Account } from './account.js';
import { AccountController } from './account_copy.js';
// const dan = new AccountController(); //Create an Instance
const new_Account = new AccountController();


//===== Event Listeners ======================
// window.addEventListener('load', () => {
//     loadDetails();

// });
// btnTxnAcc1.addEventListener('click', calcTransaction);
// typeOfAcccountSelect.addEventListener('change', showAccount);


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
            // displayAccountDetails(name_Acc);
            console.log(new_Account.allCustomers);
        }
    }
    catch (err) {
        alert(err)
    }
}
const updatExistingAccount = () => {
    new_Account.upDateCustomer(customers.value, new_Acc_Type.value);
    // report.textContent = `'${new_Acc_Type.value}' account is opened`;
    // report.style.backgroundColor = "lightgreen";

    displayAccountDetails(customers.value)
    console.log(new_Account.allCustomers);
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
        showAllAccounts.textContent = `Accounts: ${accnos.length - 5}`;

        while (accDropDown) {
            accDropDown.remove();
            accDropDown = allCustomerAcc.firstElementChild;
        }
        for (let r = 5; r < accnos.length; r++) {
            appendCustomerDetail("account", accnos[r])
        }
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

//========================== Event Handlers ================================= 
openAccount.addEventListener('click', openNewAccount);
updateAccount.addEventListener('click', updatExistingAccount);
customers.addEventListener('change', displayAccountDetails);