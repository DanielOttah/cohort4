import React from 'react';

export class AccountController extends React.Component {
    constructor(props) {
        super(props)
        this.allCustomers = [];
        this.customerCount = 0;
        // this.createNewAccount = this.createNewAccount.bind(this);
        // this.getAccountUser = this.getAccountUser.bind(this);

    }
    genAccNumber() {//Generates Account Number
        return `${Math.floor((Math.random() * 10) + 1)}${Math.floor((Math.random() * 10) + 1)}${Math.floor((Math.random() * 10) + 1)}-${Math.floor((Math.random() * 10) + 1)}${Math.floor((Math.random() * 10) + 1)}${Math.floor((Math.random() * 10) + 1)}${Math.floor((Math.random() * 10) + 1)}`;

    }
    returnImageAndSignature() {
        let imgSign = [];
        let img = ["/pictures/img1.jpg",
            "/pictures/img3.jpg",
            "/pictures/img7.jpg",
            "/pictures/img2.jpg",
            "/pictures/img4.jpg",
            "/pictures/img5.png",
            "/pictures/img6.jpg",
            "/pictures/img8.jpg",
            "/pictures/img9.jpg",
            "/pictures/img10.jpg",];
        let sign = ["/pictures/sign1.png",
            "/pictures/sign2.png",
            "/pictures/sign3.png",
            "/pictures/sign4.jpg",
            "/pictures/sign5.png",
            "/pictures/sign6.jpg",
            "/pictures/sign7.png",
            "/pictures/sign8.jpg",
            "/pictures/sign9.png",
            "/pictures/sign10.png",];
        imgSign.push(img[this.customerCount], sign[this.customerCount]);
        return imgSign;
    }
    getAccountUser = (name) => {
        let counter;
        for (let i = 0; i < this.allCustomers.length; i++) {
            if (name === this.allCustomers[i].Name) {
                counter = i;
            }
        }
        return counter;
    }
    deposit_Txn(acc, amt) {
        let bal = acc + amt;
        return bal;
    }
    withdraw_Txn(acc, amt) {
        if (parseFloat(amt) > parseFloat(acc)) {
            return false;
        } else {
            let bal = acc - amt;
            return bal;
        }
    }
    createNewAccount = (name, typeOfAccount, address) => {
        let newAccount = {};
        newAccount.Key = ++this.customerCount;
        newAccount.Name = name;
        newAccount.Account_Number = this.genAccNumber();
        newAccount.Address = address;
        newAccount.passport = this.returnImageAndSignature()[0];
        newAccount.signature = this.returnImageAndSignature()[1];
        newAccount.Accounts = [];
        newAccount.Accounts.push({ [typeOfAccount]: 0 });
        this.allCustomers.push(newAccount);
    }
    render() {
        return null;
    }
}

export class AccountCalculator {

}


