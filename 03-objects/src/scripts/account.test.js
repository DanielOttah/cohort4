import { Account } from './account.js';
import { AccountController } from './account.js';

let acc = new Account("Daniel Ottah", 'Savings', 5000);
let acc1 = new Account("Larry EvolveU", 'Savings', 3000);
let acc2 = new Account("Roman EvolveU", 'Savings', 2500);
let newAccount = new AccountController();
newAccount.createAccount('Daniel Ottah', '1st Str 4th Ave', 10000);
newAccount.createAccount('Larry EvolveU', '3rd Str 6th Ave', 3000);
newAccount.createAccount('Roman InceptionU', '4th Str 9th Ave', 5000);




test('Check if Deposit Cash works', () => {
    expect(acc.depositCash(500)).toBe(5500);
    expect(acc1.depositCash(300)).toBe(3300);
    expect(acc2.depositCash(3000)).toBe(5500);

});
test('Check if Withdraw Cash works', () => {
    expect(acc.withdrawCash(500)).toBe(5000);
    expect(acc1.withdrawCash(300)).toBe(3000);
    expect(acc2.withdrawCash(300)).toBe(5200);

});

test('Check if Balance Cash works', () => {
    expect(acc.cashBalance()).toBe(acc.currentCash);
    expect(acc1.cashBalance()).toBe(acc1.currentCash);
    expect(acc2.cashBalance()).toBe(acc2.currentCash);
});
//========== Test AccountController========================
test('Check if account number can be generated', () => {
    expect(newAccount.genAccNumber()).toBeTruthy();
});

test('Check Account was Created', () => {

    // console.log(newAccount.allCustomers);
    // console.log(newAccount.customersCount);

    expect(newAccount.allCustomers[0].Address).toBe('1st Str 4th Ave');
    expect(newAccount.allCustomers[0].Initial_Deposit).toBe(10000);
    expect(newAccount.allCustomers[0].Name).toBe('Daniel Ottah');

    expect(newAccount.allCustomers[1].Address).toBe('3rd Str 6th Ave');
    expect(newAccount.allCustomers[1].Initial_Deposit).toBe(3000);
    expect(newAccount.allCustomers[1].Name).toBe('Larry EvolveU');

    expect(newAccount.allCustomers[2].Address).toBe('4th Str 9th Ave');
    expect(newAccount.allCustomers[2].Initial_Deposit).toBe(5000);
    expect(newAccount.allCustomers[2].Name).toBe('Roman InceptionU');

});
test('Check if account is removed', () => {
    let ct = newAccount.removeAccount('Larry EvolveU', 'Saving');
    let ct1 = newAccount.removeAccount('Daniel Ottah', 'Saving');
    let ct2 = newAccount.removeAccount('Roman InceptionU', 'Saving');

    expect(newAccount.allCustomers[ct].Savings_Account).toBe('');
    expect(newAccount.allCustomers[ct1].Savings_Account).toBe('');
    expect(newAccount.allCustomers[ct2].Savings_Account).toBe('');
});

test('Check if account is added', () => {
    let ct = newAccount.addAccount('Larry EvolveU', 'Car');
    let ct1 = newAccount.addAccount('Daniel Ottah', 'Saving');
    let ct2 = newAccount.addAccount('Roman InceptionU', 'Cheq');

    console.log(newAccount.allCustomers[ct].CarFundAccount);
    console.log(newAccount.allCustomers[ct1].Savings_Account);
    console.log(newAccount.allCustomers[ct2].Chequeing_Account);

    expect(newAccount.allCustomers[ct].CarFundAccount).toBeTruthy();
    expect(newAccount.allCustomers[ct1].Savings_Account).toBeTruthy();
    expect(newAccount.allCustomers[ct2].Chequeing_Account).toBeTruthy();
});