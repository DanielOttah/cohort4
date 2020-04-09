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
    getAccountUser(name) {
        let counter;
        for (i = 0; i < this.allCustomers.length; i++) {
            if (name == this.allCustomers[i].Name) {
                counter = i;
            }
        }
        return counter;
    }
    returnImageAndSignature() {
        let imgSing = [];
        let img = ["./scripts/pictures/img1.jpg",
            "./scripts/pictures/img2.jpg",
            "./scripts/pictures/img3.jpg",
            "./scripts/pictures/img4.jpg",
            "./scripts/pictures/img5.jpg",
            "./scripts/pictures/img6.jpg",
            "./scripts/pictures/img7.jpg",
            "./scripts/pictures/img8.jpg",
            "./scripts/pictures/img9.jpg",
            "./scripts/pictures/img10.jpg",];
        let sign = ["./scripts/pictures/sign1.png",
            "./scripts/pictures/sign2.png",
            "./scripts/pictures/sign3.png",
            "./scripts/pictures/sign4.jpg",
            "./scripts/pictures/sign5.png",
            "./scripts/pictures/sign6.jpg",
            "./scripts/pictures/sign7.png",
            "./scripts/pictures/sign8.jpg",
            "./scripts/pictures/sign9.png",
            "./scripts/pictures/sign10.png",];
        imgSing.push(img[this.customersCount], sign[this.customersCount]);
        return imgSing;
    }
    createNewAccount(name, address, typeOfAccount) {
        let newAccount = {};
        let acc_Type = typeOfAccount;
        ++this.customersCount;

        newAccount.Name = name;
        newAccount.Account_Number = this.genAccNumber();
        newAccount.Address = address;
        newAccount.passport = this.returnImageAndSignature()[0];
        newAccount.signature = this.returnImageAndSignature()[1];
        newAccount[acc_Type] = 0;
        this.allCustomers.push(newAccount);

    }
    upDateCustomer(nam, new_acc) {
        let index = this.getAccountUser(nam);
        this.allCustomers[index][new_acc] = 0;
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