 export class Account {
     constructor(acctName, accType, initBal) {
         this.acctName = acctName;
         this.accType = accType;
         this.initBal = initBal;
         this.currentCash = initBal;
     }
     depositCash(cash) {
         this.currentCash = this.currentCash + cash;
         return this.currentCash;
     }
     withdrawCash(cash) {
         this.currentCash = this.currentCash - cash;
         return this.currentCash;
     }
     cashBalance() {
         return this.currentCash;
     }
 }

 export class AccountController {
     constructor() {
         this.customersCount = 0;
         this.allCustomers = [];

     }

     genAccNumber() {
         return `${Math.floor((Math.random() * 1000) + 1)}-${Math.floor((Math.random() * 1000) + 1)}`; //Generates Account Number
     }

     createAccount(name, address, typeOfAccount, initialDeposit) {
         let newAccount = {};
         let AccountType = {};
         ++this.customersCount;

         newAccount = Object.assign({ Name: name }, newAccount);
         newAccount = Object.assign({ Account_Number: this.genAccNumber() }, newAccount);
         newAccount = Object.assign({ Address: address }, newAccount);
         if (typeOfAccount == 'Savings') {
             AccountType = Object.assign({ Savings_Account: initialDeposit }, AccountType);
             newAccount = Object.assign(AccountType, newAccount);
         } else if (typeOfAccount == 'Chequeing') {
             AccountType = Object.assign({ Chequeing_Account: initialDeposit }, AccountType);
             newAccount = Object.assign(AccountType, newAccount);
         } else if (typeOfAccount == 'Car_Fund') {
             AccountType = Object.assign({ CarFundAccount: initialDeposit }, AccountType);
             newAccount = Object.assign(AccountType, newAccount);
         }
         this.allCustomers.push(newAccount);
         //return this.allCustomers;
     }
     removeAccount(accName, accToRemove) {
         let count;
         for (let i = 0; i < this.allCustomers.length; i++) {
             if (this.allCustomers[i].Name == accName) {
                 count = i;
             }
         }
         if (accToRemove.includes('Sav')) {
             delete this.allCustomers[count].Savings_Account;
         }
         if (accToRemove.includes('Cheq')) {
             delete this.allCustomers[count].Chequeing_Account;
         }
         if (accToRemove.includes('Car')) {
             delete this.allCustomers[count].CarFundAccount;
         }
         return count;

     }
     addAccount(accName, accToAdd, deposit) {
         let count;
         for (let i = 0; i < this.allCustomers.length; i++) {
             if (this.allCustomers[i].Name == accName) {
                 count = i;
             }
         }
         if (accToAdd.includes('Sav')) {
             this.allCustomers[count] = Object.assign({ Savings_Account: deposit }, this.allCustomers[count]);
         }
         if (accToAdd.includes('Cheq')) {
             this.allCustomers[count] = Object.assign({ Chequeing_Account: deposit }, this.allCustomers[count]);
         }
         if (accToAdd.includes('Car')) {
             this.allCustomers[count] = Object.assign({ CarFundAccount: deposit }, this.allCustomers[count]);
         }
         return count;

     }

 }