import { AccountController } from './AccountController.js';


test("Testing Testing genAccNumber()", () => {
    let account_react = new AccountController();
    expect(account_react.genAccNumber().length).toBe(8);

});

test("Testing createNewAccount()", () => {
    let account_react = new AccountController();
    account_react.createNewAccount("Larry", "Savings", "Calgary");
    account_react.createNewAccount("Jen", "RESP", "BC");
    account_react.createNewAccount("Roman", "House", "Europe");
    account_react.createNewAccount("Daniel", "Chequeing", "Airdrie");
    account_react.createNewAccount("Justin", "Savings", "Fort Mac");
    expect(account_react.allCustomers.length).toBe(5);
    expect(account_react.allCustomers[0].Name).toBe("Larry");
    expect(account_react.allCustomers[4].Address).toBe("Fort Mac");
    expect(account_react.allCustomers[3].Accounts[0]).toStrictEqual({ "Chequeing": 0 });
    expect(account_react.allCustomers[2].Accounts.length).toBe(1);
    expect(account_react.allCustomers[0].Address).toBe("Calgary");
    expect(account_react.allCustomers[1].Accounts).toStrictEqual([{ "RESP": 0 }]);

});


test("Testing getAccountUser()", () => {
    let account_react = new AccountController();
    account_react.createNewAccount("Larry", "Savings", "Calgary");
    account_react.createNewAccount("Jen", "RESP", "BC");
    account_react.createNewAccount("Roman", "House", "Europe");
    account_react.createNewAccount("Daniel", "Chequeing", "Airdrie");
    account_react.createNewAccount("Justin", "Savings", "Fort Mac");
    expect(account_react.getAccountUser("Daniel")).toBe(3);
    expect(account_react.getAccountUser("Larry")).toBe(0);
    expect(account_react.getAccountUser("Justin")).toBe(4);
});

test("Testing deposit_Txn()", () => {
    let account_react = new AccountController();
    expect(account_react.deposit_Txn(500, 450)).toBe(950);
    expect(account_react.deposit_Txn(500, 1500)).toBe(2000);
    expect(account_react.deposit_Txn(500, 3500)).toBe(4000);
});

test("Testing withdraw_Txn()", () => {
    let account_react = new AccountController();
    expect(account_react.withdraw_Txn(500, 450)).toBe(50);
    expect(account_react.withdraw_Txn(500, 1500)).toBe(false);
    expect(account_react.withdraw_Txn(5000, 3500)).toBe(1500);
});

test("Testing returnImageAndSignature()", () => {
    let account_react = new AccountController();
    expect(account_react.returnImageAndSignature().length).toBe(2);
    expect(typeof (account_react.returnImageAndSignature()[0])).toBe("string");

});