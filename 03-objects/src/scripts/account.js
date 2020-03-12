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

     createAccount(name, address, initialDeposit) {
         let newAccount = {};
         ++this.customersCount;
         newAccount = Object.assign({ Name: name }, newAccount);
         newAccount = Object.assign({ Address: address }, newAccount);
         newAccount = Object.assign({ Savings_Account: this.genAccNumber() }, newAccount);
         newAccount = Object.assign({ Chequeing_Account: '' }, newAccount);
         newAccount = Object.assign({ CarFundAccount: '' }, newAccount);
         newAccount = Object.assign({ Initial_Deposit: initialDeposit }, newAccount);
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
             this.allCustomers[count].Savings_Account = '';
         }
         if (accToRemove.includes('Cheq')) {
             this.allCustomers[count].Chequeing_Account = '';
         }
         if (accToRemove.includes('Car')) {
             this.allCustomers[count].CarFundAccount = '';
         }
         return count;

     }
     addAccount(accName, accToRemove) {
         let count;
         for (let i = 0; i < this.allCustomers.length; i++) {
             if (this.allCustomers[i].Name == accName) {
                 count = i;
             }
         }
         if (accToRemove.includes('Sav')) {
             this.allCustomers[count].Savings_Account = this.genAccNumber();
         }
         if (accToRemove.includes('Cheq')) {
             this.allCustomers[count].Chequeing_Account = this.genAccNumber();
         }
         if (accToRemove.includes('Car')) {
             this.allCustomers[count].CarFundAccount = this.genAccNumber();
         }
         return count;

     }

 }