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
    try {
        if (acctsAddRemove.value == 'addSavings') {
            if (Object.keys(danAcc).includes('Savings_Account')) {
                acctsAddRemove.value = acctsAddRemove[0].value;
                throw "Account already exist";
            } else {
                dan.addAccount(danAcc.Name, 'Saving', 0);
                report.style.backgroundColor = "lightgreen";
                report.textContent = "Savings Account Opened"
            }
        } else if (acctsAddRemove.value == 'addChequeing') {
            if (Object.keys(danAcc).includes('Chequeing_Account')) {
                acctsAddRemove.value = acctsAddRemove[0].value;
                throw "Account already exist";
            } else {
                report.style.backgroundColor = "lightgreen";
                report.textContent = "Chequeing Account Opened"
                dan.addAccount(danAcc.Name, 'Chequeing', 0);
            }
        } else if (acctsAddRemove.value == 'addCarFund') {
            if (Object.keys(danAcc).includes('CarFundAccount')) {
                acctsAddRemove.value = acctsAddRemove[0].value;
                throw "Account already exist";
            } else {
                report.style.backgroundColor = "lightgreen";
                report.textContent = "Car Fund Account Opened"
                dan.addAccount(danAcc.Name, 'Car_Fund', 0);
            }
        } else if (acctsAddRemove.value == 'removeSavings') {
            if (Object.keys(danAcc).includes('Savings_Account')) {
                report.style.backgroundColor = "lightgreen";
                report.textContent = "Savings Account Removed"
                dan.removeAccount(danAcc.Name, 'Saving');
            } else {
                acctsAddRemove.value = acctsAddRemove[0].value;
                throw "Account does not exist";
            }
        } else if (acctsAddRemove.value == 'removeChequeing') {
            if (Object.keys(danAcc).includes('Chequeing_Account')) {
                report.style.backgroundColor = "lightgreen";
                report.textContent = "Chequeing Account Removed"
                dan.removeAccount(danAcc.Name, 'Chequeing');
            } else {
                acctsAddRemove.value = acctsAddRemove[0].value;
                throw "Account does not exist";
            }
        } else if (acctsAddRemove.value == 'removeCarFund') {
            if (Object.keys(danAcc).includes('CarFundAccount')) {
                report.style.backgroundColor = "lightgreen";
                report.textContent = "Car Fund Account Removed"
                dan.removeAccount(danAcc.Name, 'Car Fund');
            } else {
                acctsAddRemove.value = acctsAddRemove[0].value;
                throw "Account does not exist";
            }
        }
    } catch (er) {
        alert(er);
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
            if (Object.keys(danAcc).includes('Savings_Account')) {
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
            } else {
                throw "This account does not exist";
            }
        } else if (typeOfAcccountSelect.value == 'chequeing') {
            if (Object.keys(danAcc).includes('Chequeing_Account')) {
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
            } else {
                throw "This account does not exist";
            }

        } else if (typeOfAcccountSelect.value == 'carFund') {
            if (Object.keys(danAcc).includes('CarFundAccount')) {

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
            } else {
                throw "This account does not exist";
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
        if (Object.keys(danAcc).includes('Savings_Account')) {
            acc1InitBal.textContent = `Initial Balance: $CAD ${danAcc.initialSavCash}`;
            acc1CurrBal.textContent = `Current Balance: $CAD ${danAcc.Savings_Account}`;
        } else {
            alert("Account does not exist");
        }

    } else if (typeOfAcccountSelect.value == 'chequeing') {
        if (Object.keys(danAcc).includes('Chequeing_Account')) {
            acc1InitBal.textContent = `Initial Balance: $CAD ${danAcc.initialCheqCash}`;
            acc1CurrBal.textContent = `Current Balance: $CAD ${danAcc.Chequeing_Account}`;
        } else {
            alert("Account does not exist");
        }

    } else if (typeOfAcccountSelect.value == 'carFund') {
        if (Object.keys(danAcc).includes('CarFundAccount')) {
            acc1InitBal.textContent = `Initial Balance: $CAD ${danAcc.initialCarCash}`;
            acc1CurrBal.textContent = `Current Balance: $CAD ${danAcc.CarFundAccount}`;
        } else {
            alert("Account does not exist");
        }
    }
    accTotal.textContent = `Total Cash: $CAD ${dan.accountTotal(danAcc.Name)}`;
    accHighest.textContent = `Highest $: $CAD ${dan.highestValueAccount(danAcc.Name)[1]} | ${dan.highestValueAccount(danAcc.Name)[0]}`;
    accLowest.textContent = `Lowest $: $CAD ${dan.lowestValueAccount(danAcc.Name)[1]} | ${dan.lowestValueAccount(danAcc.Name)[0]}`;

}