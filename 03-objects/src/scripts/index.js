import Account from './account.js';


const daniel = new Account("Daniel Ottah", 500000);

window.addEventListener('load', (event) => {
    fName.textContent = `${daniel.acctName}`;
    accNo.textContent = `0001234 - 56789`;
    initBalance.textContent = `${daniel.initBal}`;

});

btnTxn.addEventListener('click', () => {
    let c = cashInput.value;
    // if (c - 1 == NaN) {
    //     alert('Error! Invalid character entered.');
    // }
    // else {
    if ((c != NaN) && (txn.value == 'deposit')) {
        daniel.depositCash(Number(cashInput.value));
        currBal.textContent = `${daniel.cashBalance()}`;
    } else if ((c - 1 != NaN) && (txn.value == 'withdraw')) {
        daniel.withdrawCash(Number(cashInput.value));
        currBal.textContent = `${daniel.cashBalance()}`;
    }
    // }



})