import React from 'react';

export class AccountController extends React.Component {
    constructor(props) {
        super(props)
        this.allCustomers = [];
        this.customerCount = 0;
        this.createNewAccount = this.createNewAccount.bind(this);
        this.getAccountUser = this.getAccountUser.bind(this);

    }
    genAccNumber() {
        return `${Math.floor((Math.random() * 1000) + 1)}-${Math.floor((Math.random() * 1000) + 1)}`; //Generates Account Number
    }
    returnImageAndSignature() {
        let imgSign = [];
        let img = ["./src/pictures/img1.jpg",
            "./src/pictures/img9.jpg",
            "./src/pictures/img7.jpg",
            "./src/pictures/img5.jpg",
            "./src/pictures/img2.jpg",
            "./src/pictures/img3.jpg",
            "./src/pictures/img4.jpg",
            "./src/pictures/img6.jpg",
            "./src/pictures/img8.jpg",
            "./src/pictures/img10.jpg",];
        let sign = ["./src/pictures/sign1.png",
            "./src/pictures/sign2.png",
            "./src/pictures/sign3.png",
            "./src/pictures/sign4.jpg",
            "./src/pictures/sign5.png",
            "./src/pictures/sign6.jpg",
            "./src/pictures/sign7.png",
            "./src/pictures/sign8.jpg",
            "./src/pictures/sign9.png",
            "./src/pictures/sign10.png",];
        imgSign.push(img[this.customerCount], sign[this.customerCount]);
        return imgSign;
    }
    getAccountUser(name) {
        let counter;
        for (let i = 0; i < this.allCustomers.length; i++) {
            if (name === this.allCustomers[i].Name) {
                counter = i;
            }
        }
        return counter;
    }
    createNewAccount(name, typeOfAccount, address) {
        let newAccount = {};
        let acc_Type = typeOfAccount;
        newAccount.Key = ++this.customerCount;
        newAccount.Name = name;
        newAccount.Account_Number = this.genAccNumber();
        newAccount.Address = address;
        newAccount.passport = this.returnImageAndSignature()[0];
        newAccount.signature = this.returnImageAndSignature()[1];
        newAccount[acc_Type] = 0;
        this.allCustomers.push(newAccount);

        console.log(this.allCustomers);
    }
    render() {
        return null;
    }
}

export class AccountCalculator {

}
export function createNewAccount(props) {
    // let newAccount = {};
    // let acc_Type = typeOfAccount;

    // newAccount.Key = ++this.customersCount;
    // newAccount.Name = name;
    // newAccount.Account_Number = this.genAccNumber();
    // newAccount.Address = address;
    // newAccount.passport = this.returnImageAndSignature()[0];
    // newAccount.signature = this.returnImageAndSignature()[1];
    // newAccount[acc_Type] = 0;
    // this.allCustomers.push(newAccount);

    return console.log("seeing", props.name, props.address, props.typeOfAccount);


}

