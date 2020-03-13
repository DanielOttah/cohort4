import { Account } from './account.js';
import { AccountController } from './account.js';

let acc = new Account("Daniel Ottah", 'Savings', 5000);
let acc1 = new Account("Larry EvolveU", 'Savings', 3000);
let acc2 = new Account("Roman EvolveU", 'Savings', 2500);
let newAccount = new AccountController();
newAccount.createAccount('Daniel Ottah', 'Airdrie', 'Savings', 10000);
newAccount.createAccount('Larry EvolveU', 'Saskatoon', 'Car_Fund', 3000);
newAccount.createAccount('Roman InceptionU', 'Calgary', 'Chequeing', 5000);


test('Check if Deposit Cash works', () => {
    // expect(acc.depositCash(500)).toBe(5500);
    // expect(acc1.depositCash(300)).toBe(3300);
    // expect(acc2.depositCash(3000)).toBe(5500);

});
test('Check if Withdraw Cash works', () => {
    // expect(acc.withdrawCash(500)).toBe(5000);
    // expect(acc1.withdrawCash(300)).toBe(3000);
    // expect(acc2.withdrawCash(300)).toBe(5200);

});

test('Check if Balance Cash works', () => {
    // expect(acc.cashBalance()).toBe(acc.currentCash);
    // expect(acc1.cashBalance()).toBe(acc1.currentCash);
    // expect(acc2.cashBalance()).toBe(acc2.currentCash);
});
//========== Test AccountController========================
test('Check if account number can be generated', () => {
    // expect(newAccount.genAccNumber()).toBeTruthy();
});

test('Check Account was Created', () => {

    // expect(newAccount.allCustomers[0].Address).toBe('Airdrie');
    // expect(newAccount.allCustomers[0].Savings_Account).toBe(10000);
    // expect(newAccount.allCustomers[0].Name).toBe('Daniel Ottah');

    // expect(newAccount.allCustomers[1].Address).toBe('Saskatoon');
    // expect(newAccount.allCustomers[1].CarFundAccount).toBe(3000);
    // expect(newAccount.allCustomers[1].Name).toBe('Larry EvolveU');

    // expect(newAccount.allCustomers[2].Address).toBe('Calgary');
    // expect(newAccount.allCustomers[2].Chequeing_Account).toBe(5000);
    // expect(newAccount.allCustomers[2].Name).toBe('Roman InceptionU');

});
test('Check if account is removed', () => {
    let ct = newAccount.removeAccount('Larry EvolveU', 'Car');
    let ct1 = newAccount.removeAccount('Daniel Ottah', 'Saving');
    let ct2 = newAccount.removeAccount('Roman InceptionU', 'Cheq');

    expect(newAccount.allCustomers[ct].CarFundAccount).toBeFalsy();
    expect(newAccount.allCustomers[ct1].Savings_Account).toBeFalsy();
    expect(newAccount.allCustomers[ct2].Chequeing_Account).toBeFalsy();

});

test('Check if account is added', () => {
    let ct = newAccount.addAccount('Larry EvolveU', 'Car', 2500);
    let ct1 = newAccount.addAccount('Daniel Ottah', 'Saving', 5000);
    let ct2 = newAccount.addAccount('Roman InceptionU', 'Cheq', 1600);
    let ct3 = newAccount.addAccount('Daniel Ottah', 'Cheq', 15000);

    console.log(newAccount.allCustomers);
    expect(newAccount.allCustomers[ct].CarFundAccount).toBe(2500);
    expect(newAccount.allCustomers[ct1].Savings_Account).toBe(5000);
    expect(newAccount.allCustomers[ct2].Chequeing_Account).toBe(1600);
    expect(newAccount.allCustomers[ct1].Savings_Account + newAccount.allCustomers[ct3].Chequeing_Account).toBe(20000);

});