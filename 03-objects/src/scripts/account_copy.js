export class Account {
    constructor(prevBal) {
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
        this.acc_txn = new Account(0);
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
            "./scripts/pictures/img9.jpg",
            "./scripts/pictures/img7.jpg",
            "./scripts/pictures/img5.jpg",
            "./scripts/pictures/img2.jpg",
            "./scripts/pictures/img3.jpg",
            "./scripts/pictures/img4.jpg",
            "./scripts/pictures/img6.jpg",
            "./scripts/pictures/img8.jpg",
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
        let user = this.getAccountUser(accName);
        delete this.allCustomers[user][accToRemove];
    }
    accountTotal(accName) {
        let ind = this.getAccountUser(accName);
        let allAcc = this.returnAllAcc(ind);
        let totalCash = 0;
        for (i = 0; i < allAcc.length; i++) {
            totalCash += this.allCustomers[ind][allAcc[i]];
        }

        return totalCash;
    }
    deposit_Txn(nam, acc, amt) {
        let cash = [];
        let ind = this.getAccountUser(nam);
        cash[0] = this.allCustomers[ind][acc];
        this.allCustomers[ind][acc] += amt;
        cash[1] = this.allCustomers[ind][acc];
        return cash;
    }
    withdraw_Txn(nam, acc, amt) {
        let cash = [];
        let ind = this.getAccountUser(nam);
        cash[0] = this.allCustomers[ind][acc];
        if (cash[0] > amt) {
            this.allCustomers[ind][acc] -= amt;
            cash[1] = this.allCustomers[ind][acc];
            return cash;
        }
        else if (cash[0] < amt) {
            return false;
        }




    }
    returnAllAcc(ind) {
        let all_Acc = Object.keys(this.allCustomers[ind]);
        let allAcc = all_Acc.slice(5, all_Acc.length);
        return allAcc;
    }
    transferFunds(accName, accFrom, accTo, amt) {
        try {
            let user = this.getAccountUser(accName);
            // if (!isNaN(amt)) {
            //     throw "Enter valid amount to transfer";
            // }
            // else if (amt > this.allCustomers[user][accFrom]) {
            //     throw "Cannot complete transaction - Insufficient funds."
            // } else {
            this.allCustomers[user][accFrom] -= amt;
            this.allCustomers[user][accTo] += amt;
            // }
            // return ;
        } catch (err) {
            return err;
        }

    }


}