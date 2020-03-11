import Account from './account.js';
let acc = new Account("Daniel", '0123-445698', 5000);
let acc1 = new Account("Larry", '3654-547995', 3000);
let acc2 = new Account("Roman", '5247-236987', 2500);

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