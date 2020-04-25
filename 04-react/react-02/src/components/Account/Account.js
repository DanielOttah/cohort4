import React, { Component } from 'react';
import './Account.css';
import Button from './Button.js';
import InputField from './InputField.js';
import { AccountController } from './AccountController.js';
import { Select } from './Select.js';
import DisplayTableOfAllAccounts from './DisplayTableOfAllAccounts.js';
import ImageComponent from './ImageComponent.js';
import DisplayContent from './DisplayContent.js';
import avatar from './avatar.png'
import sign5 from './sign5.png';
import { SectionAllAccount, CurrentCash, AccountServices, TotalCash, AddNewAccount, SelectTransaction } from './AccountFunctions';


class Account extends Component {
    constructor(props) {
        super(props)
        this.newCustomer = new AccountController();
        this.state = {
            currentUserIndex: null,
            selectedCustomer: null,
            selectedCustomerAccount: null,
            selectedAccountValue: null,
            customerList: this.newCustomer.allCustomers,
            accountList: [],
            customerPicture: avatar,
            customerSignature: sign5,
            accountCurrentCash: "",
            newAccountName: "",
            inputAmount: "",
            allAccountList: [],
            totalCash: ""
        }
    }
    handleAccordionButton = () => {       //Opens the section to enter a new customer
        const enterAccDetails = document.getElementById("enterAccDetails");
        if (enterAccDetails.style.maxHeight) {
            enterAccDetails.style.maxHeight = null;
        } else {
            enterAccDetails.style.maxHeight = enterAccDetails.scrollHeight + "px";
        }

    }
    handleOpenAccount = () => {           //Adds a new customer
        const enterAccDetails = document.getElementById("enterAccDetails");
        try {
            const customer_Name = document.getElementById("customerName").value;
            const Account_Name = document.getElementById("accountName").value;
            const customer_Address = document.getElementById("customerAddress").value;
            if (customer_Name === "" || Account_Name === "" || customer_Address === "") {
                // throw "All fields must be complete to open an account."
                alert("Error, all input fields must be filled.")
            }
            else {
                let index = this.newCustomer.getAccountUser(customer_Name);
                let customers = [];
                if (index !== undefined) {
                    // throw "Account user already exist! You may want to update your account instead";
                    alert("Account user already exist! You may want to update your account instead")
                } else if (index === undefined) {
                    this.newCustomer.createNewAccount(customer_Name, Account_Name, customer_Address);
                    for (let i = 0; i < this.newCustomer.allCustomers.length; i++) {
                        customers.push(this.newCustomer.allCustomers[i].Name)
                    }

                    this.setState({ customerList: customers });

                }
                enterAccDetails.style.maxHeight = null;
                console.log(this.newCustomer.allCustomers);

            }
        }
        catch (err) {
            alert(err);
        }
    }
    getAllAccountOfCustomer = (obj) => {  //Get all accounts of a particular customer
        let allAccs = [];
        for (let i = 0; i < obj.length; i++) {
            allAccs.push(Object.keys(obj[i]));
        }
        return allAccs;
    }
    getParticularAccount = (accList, acc) => {
        let accIndex;
        for (let i = 0; i < accList.length; i++) {
            if (Object.keys(accList[i]).includes(acc)) {
                accIndex = i;
            }
        }
        return accIndex;
    }
    getAllAccountList = () => {
        let accounts = [];
        let sum = 0.00;
        let accArray = this.newCustomer.allCustomers[this.state.currentUserIndex].Accounts
        for (let i = 0; i < accArray.length; i++) {
            accounts[i] = [Object.keys(accArray[i])[0], accArray[i][Object.keys(accArray[i])]];
            sum += parseFloat(accounts[i][1]);

        }
        console.log(accounts)
        this.setState({ allAccountList: accounts, totalCash: sum });

    }
    handleSelectCustomer = (e) => {       //Display all details of a selected customer from dropdown

        let elID = e.target.value;
        if (elID === "Select") {
            this.setState({
                selectedCustomer: elID,
                customerPicture: avatar,
                customerSignature: sign5,
                customerName: "",
                customerAddress: "",
                customerAccNo: "",
                customerAccounts: "",
                accountList: []

            });
        } else {
            let index = this.newCustomer.getAccountUser(elID);
            let allCustomerAccounts = this.getAllAccountOfCustomer(this.newCustomer.allCustomers[index].Accounts);
            let totalBalance = 0.00;

            let accArray = this.newCustomer.allCustomers[index].Accounts
            for (let i = 0; i < accArray.length; i++) {
                totalBalance += parseFloat(accArray[i][Object.keys(accArray[i])]);
            }
            this.setState({
                selectedCustomer: elID,
                currentUserIndex: index,
                customerPicture: this.newCustomer.allCustomers[index].passport,
                customerSignature: this.newCustomer.allCustomers[index].signature,
                customerName: this.newCustomer.allCustomers[index].Name,
                customerAddress: this.newCustomer.allCustomers[index].Address,
                customerAccNo: this.newCustomer.allCustomers[index].Account_Number,
                customerAccounts: this.newCustomer.allCustomers[index].Accounts.length,
                accountList: allCustomerAccounts,
                totalCash: totalBalance

            });

        }
    }
    handleSelectCustomerAccount = (e) => {        //Display current balance on a selected account
        let elID = e.target.value;
        if (elID === "Select") {

        } else {
            let currentUser = this.state.currentUserIndex;
            let userAccounts = this.newCustomer.allCustomers[currentUser].Accounts;
            let indexOfAccount = this.getParticularAccount(userAccounts, elID);

            this.setState({
                accountCurrentCash: userAccounts[indexOfAccount][elID],
                selectedCustomerAccount: elID
            })
            this.getAllAccountList()
        }
    }
    handleEnterNewAccountName = (e) => {      //Open dialog to enter a new account
        let selectCustomer = document.getElementById("selectCustomer");
        if (selectCustomer.value === "Select") {

        } else {
            const enterNewAccName = document.getElementById("enterNewAccName");
            if (enterNewAccName.style.maxHeight) {
                enterNewAccName.style.maxHeight = null;
            } else {
                enterNewAccName.style.maxHeight = enterNewAccName.scrollHeight + "px";
            }
        }

    }
    handleNewInputAccountName = (e) => {      // Get and set name of new account
        let elID = e.target.value;
        this.setState({
            newAccountName: elID
        })

    }
    handleOpenNewAccount = (e) => {       //Add account to customers' list of account
        let enterNewAccName = document.getElementById("enterNewAccName");
        let currentUser = this.state.currentUserIndex;
        let userAccounts = this.newCustomer.allCustomers[currentUser].Accounts;

        let allCustomerAccounts = this.getAllAccountOfCustomer(this.newCustomer.allCustomers[currentUser].Accounts)
        let doesAccountExist;

        for (let i = 0; i < allCustomerAccounts.length; i++) {
            if (allCustomerAccounts[i].includes(this.state.newAccountName)) {
                doesAccountExist = true;
            }
        }
        if (doesAccountExist === true) {
            alert('Error, Account already exist!')
        } else {
            userAccounts.push({ [this.state.newAccountName]: 0 });
            allCustomerAccounts = this.getAllAccountOfCustomer(this.newCustomer.allCustomers[currentUser].Accounts)

            this.setState({
                customerAccounts: this.newCustomer.allCustomers[currentUser].Accounts.length,
                accountList: allCustomerAccounts
            })
            this.getAllAccountList();
            enterNewAccName.style.maxHeight = null;
            console.log(this.newCustomer.allCustomers);
        }

    }
    handleInputAmount = (e) => {      // Get amount to deposit, withdraw or transfer
        let elID = e.target.value;
        this.setState({
            inputAmount: elID
        })
    }
    handleCompleteTransaction = (e) => {      // Complete Transaction
        let idAmount = document.getElementById("idAmount");
        let selectCustomerAccount = document.getElementById("selectCustomerAccount");
        let selectTransaction = document.getElementById("selectTransaction");
        if (idAmount.value === '' || idAmount <= 0 || selectCustomerAccount.value === "Select" || isNaN(parseFloat(idAmount.value))) {
            alert("Error, ensure input value is valid and an account is selected.")
        }
        else {
            let currentUser = this.state.currentUserIndex;
            let userAccounts = this.newCustomer.allCustomers[currentUser].Accounts;
            let indexOfAccount = this.getParticularAccount(userAccounts, selectCustomerAccount.value);

            if (selectTransaction.value === "deposit") {

                userAccounts[indexOfAccount][selectCustomerAccount.value] = this.newCustomer.deposit_Txn(userAccounts[indexOfAccount][selectCustomerAccount.value], parseFloat(idAmount.value))
                this.getAllAccountList();
                this.setState({
                    accountCurrentCash: userAccounts[indexOfAccount][selectCustomerAccount.value]
                })

            }
            if (selectTransaction.value === "withdraw") {

                let balance = this.newCustomer.withdraw_Txn(userAccounts[indexOfAccount][selectCustomerAccount.value], parseFloat(idAmount.value));
                if (balance === false) {
                    alert("Insufficient Funds");
                } else {
                    userAccounts[indexOfAccount][selectCustomerAccount.value] = balance;
                    this.getAllAccountList();
                    this.setState({
                        accountCurrentCash: userAccounts[indexOfAccount][selectCustomerAccount.value]
                    })
                }

            }
            if (selectTransaction.value === "transfer") {
                console.log("Seeing transfer");
            }

        }
    }
    handleDeleteAccount = (e) => {      // Delete Account
        let selectCustomerAccount = document.getElementById("selectCustomerAccount");
        if (selectCustomerAccount.value === "Select") {

        } else {


            let currentUser = this.state.currentUserIndex;
            let userAccounts = this.newCustomer.allCustomers[currentUser].Accounts;
            let indexOfAccount = this.getParticularAccount(userAccounts, selectCustomerAccount.value);
            userAccounts.splice(indexOfAccount, 1);
            let allCustomerAccounts = this.getAllAccountOfCustomer(this.newCustomer.allCustomers[currentUser].Accounts)

            this.setState({
                customerAccounts: this.newCustomer.allCustomers[currentUser].Accounts.length,
                accountList: allCustomerAccounts
            })
            this.getAllAccountList();
        }
    }
    render() {

        return (
            <div className="container">
                <div className="Account-Container w3-content w3-container">

                    <Button name={'Add A New Customer'} class={"accordion"} onClick={this.handleAccordionButton} />
                    <AddNewAccount divId="enterAccDetails" div1Class="panel" div2Class={"inputRow"}
                        input1Id={"customerName"} input1placeholder={"Enter Name Here"}
                        input2Id={"accountName"} input2placeholder={"Enter Account Name Here"}
                        input3Id={"customerAddress"} input3placeholder={"Enter Address Here"}
                        name={'Open Account'} onClick={this.handleOpenAccount} />
                    <div>
                        <fieldset className="padTop">
                            <legend ><b>Transaction</b></legend>
                            <div className="col1_1_1_1">
                                <label> Select Customer:
                            <Select value={this.state.selectedCustomer} id={"selectCustomer"}
                                        onChange={this.handleSelectCustomer} list={this.state.customerList} />
                                </label>
                                <SelectTransaction />
                                <div>  <InputField id={"idAmount"} inputValue={this.state.inputAmount} onChange={this.handleInputAmount}
                                    placeholder={"Enter amount $CAD"} readOnly={false} /></div>
                                <div> <Button name={"Complete Transaction"} onClick={this.handleCompleteTransaction} /></div>
                            </div>
                        </fieldset>
                    </div>
                    <div id="displayAccDetails" className="">
                        <fieldset>
                            <legend ><b>{`${this.state.selectedCustomer}'s`} Account Details</b></legend>
                            <div className="col1_2_1">
                                <div>
                                    <div>
                                        <ImageComponent customerPicture={this.state.customerPicture} width={"160px"} height={"140px"} />
                                        <ImageComponent customerPicture={this.state.customerSignature} width={"120px"} height={"60px"} style={{ marginTop: "5px", border: "1px solid black" }} />
                                    </div>

                                </div>
                                <div className="col40_60 " >
                                    <div className="padLeft row_4">
                                        <DisplayContent content={"Customer Name"} style={{ fontWeight: "bold" }} />
                                        <DisplayContent content={"Customer Address"} style={{ fontWeight: "bold" }} />
                                        <DisplayContent content={"Account Number"} style={{ fontWeight: "bold" }} />
                                        <DisplayContent content={"Accounts"} style={{ fontWeight: "bold" }} />
                                    </div>
                                    <div className="row_4">
                                        <DisplayContent content={this.state.customerName} />
                                        <DisplayContent content={this.state.customerAddress} />
                                        <DisplayContent content={this.state.customerAccNo} />
                                        <DisplayContent content={this.state.customerAccounts} />

                                    </div>
                                </div>
                                <div className="padLeft" >
                                    <TotalCash inputValue={`$CAD ${this.state.totalCash}`} readOnly={true} />
                                    <fieldset>
                                        <legend ><b>All Accounts</b></legend>
                                        <SectionAllAccount selectClass={"padRight"} selectValue={this.state.selectedAccountValue} selectId={"selectCustomerAccount"}
                                            selectOnChange={this.handleSelectCustomerAccount} selectList={this.state.accountList}
                                            name1={"+ Acc"} onClick1={this.handleEnterNewAccountName} style1={{ backgroundColor: "lightgreen", marginRight: "5px" }}
                                            name2={"X Acc"} onClick2={this.handleDeleteAccount} style2={{ backgroundColor: "rgb(235, 118, 118)", marginRight: "5px" }}
                                            class={"panel padTop "} id={"enterNewAccName"} inputClass={"padBottom padRight"}
                                            inputValue={this.state.newAccountName} onChange={this.handleNewInputAccountName}
                                            placeholder={"New account name"} readOnly={false} btnName={"+"} onClick={this.handleOpenNewAccount}
                                        />

                                    </fieldset>
                                    <CurrentCash inputValue={`$CAD ${this.state.accountCurrentCash}`} readOnly={true} />
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    <AccountServices class={" col_1_4"} />
                    <DisplayTableOfAllAccounts accountName={`${this.state.selectedCustomer}'s`} accList={this.state.allAccountList} />
                </div>
            </div>

        );
    }
}

export default Account;