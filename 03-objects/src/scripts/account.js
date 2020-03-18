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
         this.newAccTxn;
         this.initialDepositSav;
         this.initialDepositCheq;
         this.initialDepositCar;
     }
     genAccNumber() {
         return `${Math.floor((Math.random() * 1000) + 1)}-${Math.floor((Math.random() * 1000) + 1)}`; //Generates Account Number
     }

     createAccount(name, address, typeOfAccount, initialDeposit) {
         let newAccount = {};
         ++this.customersCount;

         //Another Method of adding:  newAccount = Object.assign({ Name: name }, newAccount);
         newAccount.Name = name;
         newAccount.Account_Number = this.genAccNumber();
         newAccount.Address = address;

         if (typeOfAccount == 'Savings') {
             this.newAccTxn = new Account(initialDeposit);
             this.initialDepositSav = initialDeposit;
             newAccount.initialSavCash = this.initialDepositSav;
             newAccount.Savings_Account = this.initialDepositSav;
         } else if (typeOfAccount == 'Chequeing') {
             this.newAccTxn = new Account(initialDeposit);
             this.initialDepositCheq = initialDeposit;
             newAccount.initialCheqCash = this.initialDepositCheq;
             newAccount.Chequeing_Account = this.initialDepositCheq;
         } else if (typeOfAccount == 'Car Fund') {
             this.newAccTxn = new Account(initialDeposit);
             this.initialDepositCar = initialDeposit;
             newAccount.initialCarCash = this.initialDepositCar;
             newAccount.CarFundAccount = this.initialDepositCar;
         }
         // newAccount = Object.assign(AccountType, newAccount);
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
         //return count;

     }
     addAccount(accName, accToAdd, deposit) {
         let count;
         for (let i = 0; i < this.allCustomers.length; i++) {
             if (this.allCustomers[i].Name == accName) {
                 count = i;
             }
         }
         if (accToAdd.includes('Sav')) {
             this.allCustomers[count].initialSavCash = deposit;
             this.allCustomers[count].Savings_Account = deposit;
         }
         if (accToAdd.includes('Cheq')) {
             this.allCustomers[count].initialCheqCash = deposit;
             this.allCustomers[count].Chequeing_Account = deposit;
         }
         if (accToAdd.includes('Car')) {
             this.allCustomers[count].initialCarCash = deposit;
             this.allCustomers[count].CarFundAccount = deposit;
         }
         //return count;

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
         let result = [];
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
             result.push('Savings', v3);
             return result;
         } else if (v1 == undefined && v2 != undefined && v3 != undefined) {
             (v2 > v3 ? result.push('Chequeing', v2) : result.push('Savings', v3));
             return result;
         } else if (v1 != undefined && v2 != undefined && v3 != undefined) {
             if (v1 > v2 && v1 > v3) {
                 result.push('Car Fund', v1);
                 return result;
             } else if (v2 > v1 && v2 > v3) {
                 result.push('Chequeing', v2);
                 return result;
             } else if (v3 > v1 && v3 > v2) {
                 result.push('Savings', v3);
                 return result;
             }
         } else if (v1 != undefined && v2 == undefined && v3 == undefined) {
             result.push('Car Fund', v1);
             return result;
         } else if (v1 != undefined && v2 != undefined && v3 == undefined) {
             (v1 > v2 ? result.push('Car Fund', v1) : result.push('Chequeing', v2));
             return result;
         } else if (v1 != undefined && v2 == undefined && v3 != undefined) {
             (v1 > v3 ? result.push('Car Fund', v1) : result.push('Savings', v3));
             return result;
         } else if (v1 == undefined && v2 != undefined && v3 == undefined) {
             result.push('Chequeing', v2);
             return result;
         } else if (v1 == undefined && v2 == undefined && v3 == undefined) {
             result.push('N/A', 0);
             return result;
         } else if (v1 != undefined && v2 != undefined && v3 == undefined) {
             (v1 == v2 ? result.push(('Car Fund', v1), ('Chequeing', v2)) : "");
             return result;
         } else if (v1 != undefined && v2 == undefined && v3 != undefined) {
             (v1 == v3 ? result.push(('Car Fund', v1), ('Savings', v3)) : "");
             return result;
         } else if (v1 == undefined && v2 != undefined && v3 != undefined) {
             (v2 == v3 ? result.push(('Chequeing', v2), ('Savings', v3)) : "");
             return result;
         } else if ((v1 != undefined && v2 != undefined && v3 != undefined) && v1 == v2 == v3) {
             result.push(('Car Fund', v1), ('Chequeing', v2), ('Savings', v3));
             return result;
         }
     }
     lowestValueAccount(accName) {
         let result = [];
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
             result.push('Savings', v3);
             return result;
         } else if (v1 == undefined && v2 != undefined && v3 != undefined) {
             (v2 > v3 ? result.push('Savings', v3) : result.push('Chequeing', v2));
             return result;

         } else if (v1 != undefined && v2 != undefined && v3 != undefined) {
             if (v1 < v2 && v1 < v3) {
                 result.push('Car Fund', v1);
                 return result;
             } else if (v2 < v1 && v2 < v3) {
                 result.push('Chequeing', v2);
                 return result;
             } else if (v3 < v1 && v3 < v2) {
                 result.push('Savings', v1);
                 return result;
             }
         } else if (v1 != undefined && v2 == undefined && v3 == undefined) {
             result.push('Car Fund', v1);
             return result;
         } else if (v1 != undefined && v2 != undefined && v3 == undefined) {
             (v1 > v2 ? result.push('Chequeing', v2) : result.push('Car Fund', v1));
             return result;
         } else if (v1 != undefined && v2 == undefined && v3 != undefined) {
             (v1 > v3 ? result.push('Savings', v3) : result.push('Car Fund', v1));
             return result;
         } else if (v1 == undefined && v2 != undefined && v3 == undefined) {
             result.push('Chequeing', v2);
             return result;
         } else if (v1 == undefined && v2 == undefined && v3 == undefined) {
             result.push('N/A', 0);
             return result;
         } else if (v1 != undefined && v2 == undefined && v3 != undefined) {
             (v1 == v3 ? result.push(('Car Fund', v1), ('Savings', v3)) : "");
             return result;
         } else if (v1 == undefined && v2 != undefined && v3 != undefined) {
             (v2 == v3 ? result.push(('Chequeing', v2), ('Savings', v3)) : "");
             return result;
         } else if ((v1 != undefined && v2 != undefined && v3 != undefined) && v1 == v2 == v3) {
             result.push(('Car Fund', v1), ('Chequeing', v2), ('Savings', v3));
             return result;
         }
     }


 }