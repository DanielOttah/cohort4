 export class Account {
     constructor(prevBal) {
         //  this.acctName = accName;
         //  this.accType = accType;
         this.prevBal = prevBal;
         this.currentCash = prevBal;
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
         const AccountType = {};
         ++this.customersCount;

         //Another Method of adding:  newAccount = Object.assign({ Name: name }, newAccount);
         newAccount.Name = name;
         newAccount.Account_Number = this.genAccNumber();
         newAccount.Address = address;

         if (typeOfAccount == 'Savings') {
             newAccount.Savings_Account = initialDeposit;
         } else if (typeOfAccount == 'Chequeing') {
             newAccount.Chequeing_Account = initialDeposit;
         } else if (typeOfAccount == 'Car_Fund') {
             newAccount.CarFundAccount = initialDeposit;
         }
         newAccount = Object.assign(AccountType, newAccount);
         this.allCustomers.push(newAccount);
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
             this.allCustomers[count].Savings_Account = deposit;
         }
         if (accToAdd.includes('Cheq')) {
             this.allCustomers[count].Chequeing_Account = deposit;
         }
         if (accToAdd.includes('Car')) {
             this.allCustomers[count].CarFundAccount = deposit;
         }
         return count;

     }
     accountTotal(accName) {
         let count, accTotal, v1, v2, v3;
         for (let i = 0; i < this.allCustomers.length; i++) {
             if (this.allCustomers[i].Name == accName) {
                 count = i;
             }
         }
         v1 = this.allCustomers[count].CarFundAccount;
         v2 = this.allCustomers[count].Chequeing_Account;
         v3 = this.allCustomers[count].Savings_Account;

         if (v1 == undefined && v2 == undefined && v3 != undefined) {
             accTotal = v3;
         } else if (v1 == undefined && v2 != undefined && v3 != undefined) {
             accTotal = v3 + v2;
         } else if (v1 != undefined && v2 != undefined && v3 != undefined) {
             accTotal = v3 + v2 + v1;
         } else if (v1 != undefined && v2 == undefined && v3 == undefined) {
             accTotal = v1;
         } else if (v1 != undefined && v2 != undefined && v3 == undefined) {
             accTotal = v1 + v2;
         } else if (v1 != undefined && v2 == undefined && v3 != undefined) {
             accTotal = v1 + v3;
         } else if (v1 == undefined && v2 != undefined && v3 == undefined) {
             accTotal = v2;
         } else if (v1 == undefined && v2 == undefined && v3 == undefined) {
             accTotal = 0;
         }
         return accTotal;
     }
     highestValueAccount(accName) {
         let count, v1, v2, v3;
         for (let i = 0; i < this.allCustomers.length; i++) {
             if (this.allCustomers[i].Name == accName) {
                 count = i;
             }
         }
         v1 = this.allCustomers[count].CarFundAccount;
         v2 = this.allCustomers[count].Chequeing_Account;
         v3 = this.allCustomers[count].Savings_Account;

         if (v1 == undefined && v2 == undefined && v3 != undefined) {
             return v3;
         } else if (v1 == undefined && v2 != undefined && v3 != undefined) {
             return (v2 > v3 ? v2 : v3);

         } else if (v1 != undefined && v2 != undefined && v3 != undefined) {
             if (v1 > v2 && v1 > v3) {
                 return v1;
             } else if (v2 > v1 && v2 > v3) {
                 return v2;
             } else if (v3 > v1 && v3 > v2) {
                 return v3;
             }
         } else if (v1 != undefined && v2 == undefined && v3 == undefined) {
             return v1;
         } else if (v1 != undefined && v2 != undefined && v3 == undefined) {
             return (v1 > v2 ? v1 : v2);
         } else if (v1 != undefined && v2 == undefined && v3 != undefined) {
             return (v1 > v3 ? v1 : v3);
         } else if (v1 == undefined && v2 != undefined && v3 == undefined) {
             return v2;
         } else if (v1 == undefined && v2 == undefined && v3 == undefined) {
             return 0;
         }
     }
     lowestValueAccount(accName) {
         let count, v1, v2, v3;
         for (let i = 0; i < this.allCustomers.length; i++) {
             if (this.allCustomers[i].Name == accName) {
                 count = i;
             }
         }
         v1 = this.allCustomers[count].CarFundAccount;
         v2 = this.allCustomers[count].Chequeing_Account;
         v3 = this.allCustomers[count].Savings_Account;

         if (v1 == undefined && v2 == undefined && v3 != undefined) {
             return v3;
         } else if (v1 == undefined && v2 != undefined && v3 != undefined) {
             return (v2 > v3 ? v3 : v2);

         } else if (v1 != undefined && v2 != undefined && v3 != undefined) {
             if (v1 < v2 && v1 < v3) {
                 return v1;
             } else if (v2 < v1 && v2 < v3) {
                 return v2;
             } else if (v3 < v1 && v3 < v2) {
                 return v3;
             }
         } else if (v1 != undefined && v2 == undefined && v3 == undefined) {
             return v1;
         } else if (v1 != undefined && v2 != undefined && v3 == undefined) {
             return (v1 > v2 ? v2 : v1);
         } else if (v1 != undefined && v2 == undefined && v3 != undefined) {
             return (v1 > v3 ? v3 : v1);
         } else if (v1 == undefined && v2 != undefined && v3 == undefined) {
             return v2;
         } else if (v1 == undefined && v2 == undefined && v3 == undefined) {
             return 0;
         }
     }


 }