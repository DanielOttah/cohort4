import Account from './account.js';


const daniel = new Account("Daniel Ottah", '0123-445698', 500000);

//===== Event Listeners ======================
window.addEventListener('load', loadDetails);
btnAcc1.addEventListener('click', loadAccount);
btnTxnAcc1.addEventListener('click', calcTransaction);

//=================== Functions =====================

function loadDetails() {
    fName.textContent = `${daniel.acctName}`;
    address.textContent = `1st Str. 4th Ave. South A1T 2Z9`;
    totNoOfAcc.textContent = 4;
    btnAcc1.textContent = '+';
}

function loadAccount() {
    if (btnAcc1.textContent == "+") {
        acc1AccNo.style.display = "block";
        acc1InitBal.style.display = "block";
        acc1CurrBal.style.display = "block";
        acc1AccNo.textContent = `Account Number: ${daniel.accNo}`;
        acc1InitBal.textContent = `Initial Balance: $CAD ${daniel.initBal}`;
        acc1CurrBal.textContent = `Current Balance: $CAD ${daniel.cashBalance()}`;
        btnAcc1.textContent = '-';
    } else {
        acc1AccNo.style.display = "none";
        acc1InitBal.style.display = "none";
        acc1CurrBal.style.display = "none";
        btnAcc1.textContent = '+';

    }
}

function calcTransaction() {
    try {
        let c = parseFloat(cashInputAcc1.value);
        if (txnAcc1.value == 'deposit') {
            if (isNaN(c)) {
                throw `Error! '${cashInputAcc1.value}' is not a number. Enter a valid number.`;
            } else {
                acc1CurrBal.textContent = `Current Balance: $CAD ${daniel.depositCash(c)}`;
            }
        } else if (txnAcc1.value == 'withdraw') {
            if (isNaN(c)) {
                throw `Error! '${cashInputAcc1.value}' is not a number. Enter a valid number.`;
            } else {
                acc1CurrBal.textContent = `Current Balance: $CAD ${daniel.withdrawCash(c)}`;
            }
        }
    } catch (err) {
        alert(err);
    }
}