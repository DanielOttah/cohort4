import { Account } from './account.js';
import { AccountController } from './account.js';


const dan = new AccountController(); //Create an Instance
const newTxn = new Account(0);

//===== Event Listeners ======================
window.addEventListener('load', loadDetails);
btnTxnAcc1.addEventListener('click', calcTransaction);
typeOfAcccountSelect.addEventListener('change', showAccount);
makeChangeAccount.addEventListener('click', editAccount);
//=================== Functions ==========================================

dan.createAccount('Daniel Ottah', 'Airdrie', 'Savings', 50000); //create an account
let danAcc = dan.allCustomers[0]; // name it danAcc

function editAccount() {
    // <option value="options">----</option>
    //  <option value="RemoveSavings">Remove Savings</option>
    // <option value="RemoveChequeing">Remove Chequeing</option> 
    // <option value="RemoveCarFunds">Remove Car Funds</option>    

    if (acctsAddRemove.value == 'addSavings') {
        report.style.backgroundColor = "lightgreen";
        report.textContent = "Savings Account Opened"
        dan.addAccount(danAcc.Name, 'Saving', 0);
    } else if (acctsAddRemove.value == 'addChequeing') {
        report.style.backgroundColor = "lightgreen";
        report.textContent = "Chequeing Account Opened"
        dan.addAccount(danAcc.Name, 'Chequeing', 0);
    } else if (acctsAddRemove.value == 'addCarFund') {
        report.style.backgroundColor = "lightgreen";
        report.textContent = "Car Fund Account Opened"
        dan.addAccount(danAcc.Name, 'Car Fund', 0);
    } else if (acctsAddRemove.value == 'RemoveSavings') {
        report.style.backgroundColor = "lightgreen";
        report.textContent = "Savings Account Removed"
        dan.removeAccount(danAcc.Name, 'Saving');
    } else if (acctsAddRemove.value == 'RemoveChequeing') {
        report.style.backgroundColor = "lightgreen";
        report.textContent = "Chequeing Account Removed"
        dan.removeAccount(danAcc.Name, 'Chequeing');
    } else if (acctsAddRemove.value == 'RemoveCarFund') {
        report.style.backgroundColor = "lightgreen";
        report.textContent = "Car Fund Account Removed"
        dan.removeAccount(danAcc.Name, 'Car Fund');
    }


}

function loadDetails() {
    fName.textContent = danAcc.Name;
    address.textContent = danAcc.Address;
    AccNumber.textContent = danAcc.Account_Number;
    // totalNoOFAcc.textContent = Object.keys(checkForAccount(danAcc)).length; //get number of Accs   
}


function calcTransaction() {

    try {
        let c = parseFloat(cashInputAcc1.value);
        if (typeOfAcccountSelect.value == 'savings') {

            if (txnAcc1.value == 'deposit') {
                if (isNaN(c)) {
                    throw `Error! '${cashInputAcc1.value}' is not a number. Enter a valid number.`;
                } else {
                    danAcc.Savings_Account = danAcc.Savings_Account + c; //dan.newAccTxn.depositCash(c);
                    showAccount();
                }
            } else if (txnAcc1.value == 'withdraw') {
                if (isNaN(c)) {
                    throw `Error! '${cashInputAcc1.value}' is not a number. Enter a valid number.`;
                } else {
                    danAcc.Savings_Account = danAcc.Savings_Account - c; //dan.newAccTxn.withdrawCash(c);
                    showAccount();
                }
            }
        } else if (typeOfAcccountSelect.value == 'chequeing') {
            if (txnAcc1.value == 'deposit') {
                if (isNaN(c)) {
                    throw `Error! '${cashInputAcc1.value}' is not a number. Enter a valid number.`;
                } else {
                    danAcc.Chequeing_Account = danAcc.Chequeing_Account + c; //dan.newAccTxn.depositCash(c);
                    showAccount();
                }
            } else if (txnAcc1.value == 'withdraw') {
                if (isNaN(c)) {
                    throw `Error! '${cashInputAcc1.value}' is not a number. Enter a valid number.`;
                } else {
                    danAcc.Chequeing_Account = danAcc.Chequeing_Account - c; //dan.newAccTxn.withdrawCash(c);
                    showAccount();
                }
            }
        } else if (typeOfAcccountSelect.value == 'carFund') {
            if (txnAcc1.value == 'deposit') {
                if (isNaN(c)) {
                    throw `Error! '${cashInputAcc1.value}' is not a number. Enter a valid number.`;
                } else {
                    danAcc.CarFundAccount = danAcc.CarFundAccount + c; //dan.newAccTxn.depositCash(c);
                    showAccount();
                }
            } else if (txnAcc1.value == 'withdraw') {
                if (isNaN(c)) {
                    throw `Error! '${cashInputAcc1.value}' is not a number. Enter a valid number.`;
                } else {
                    danAcc.CarFundAccount = danAcc.CarFundAccount + c; //dan.newAccTxn.withdrawCash(c);
                    showAccount();
                }
            }
        }
    } catch (err) {
        alert(err);
    }
}

function showAccount() {

    if (typeOfAcccountSelect.value == 'options') {
        acc1InitBal.textContent = `Initial Balance: $CAD N/A`;
        acc1CurrBal.textContent = `Current Balance: $$CAD N/A`;

    } else if (typeOfAcccountSelect.value == 'savings') {
        acc1InitBal.textContent = `Initial Balance: $CAD ${danAcc.initialSavCash}`;
        acc1CurrBal.textContent = `Current Balance: $CAD ${danAcc.Savings_Account}`;

    } else if (typeOfAcccountSelect.value == 'chequeing') {
        acc1InitBal.textContent = `Initial Balance: $CAD ${danAcc.initialCheqCash}`;
        acc1CurrBal.textContent = `Current Balance: $CAD ${danAcc.Chequeing_Account}`;

    } else if (typeOfAcccountSelect.value == 'carFund') {
        acc1InitBal.textContent = `Initial Balance: $CAD ${danAcc.initialCarCash}`;
        acc1CurrBal.textContent = `Current Balance: $CAD ${danAcc.CarFundAccount}`;

    }
    accTotal.textContent = `Total Cash: $CAD ${dan.accountTotal(danAcc.Name)}`;
    accHighest.textContent = `Highest $: $CAD ${dan.highestValueAccount(danAcc.Name)[1]} | ${dan.highestValueAccount(danAcc.Name)[0]}`;
    accLowest.textContent = `Lowest $: $CAD ${dan.lowestValueAccount(danAcc.Name)[1]} | ${dan.lowestValueAccount(danAcc.Name)[0]}`;

}