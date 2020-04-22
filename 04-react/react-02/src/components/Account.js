import React, { Component } from 'react';
import './Account.css';
import ButtonAccordion from './ButtonAccordion.js';
import InputField from './InputField.js';
import { AccountController } from './AccountController.js';
import { SelectCustomer } from './SelectCustomer.js';
import ImageComponent from './ImageComponent.js';

class Account extends Component {
    constructor(props) {
        super(props)
        this.newCustomer = new AccountController();
        this.state = {
            selectedValue: null,
            customerList: this.newCustomer.allCustomers,
            customerPicture: ""
        }

        this.handleOpenAccount = this.handleOpenAccount.bind(this);
        this.handleSelectCustomer = this.handleSelectCustomer.bind(this);
    }
    handleAccordionButton() {
        const enterAccDetails = document.getElementById("enterAccDetails");
        if (enterAccDetails.style.maxHeight) {
            enterAccDetails.style.maxHeight = null;
        } else {
            enterAccDetails.style.maxHeight = enterAccDetails.scrollHeight + "px";
        }

    }
    handleOpenAccount() {
        try {
            const customer_Name = document.getElementById("customerName").value;
            const Account_Name = document.getElementById("accountName").value;
            const customer_Address = document.getElementById("customerAddress").value;
            if (customer_Name === "" || Account_Name === "" || customer_Address === "") {
                // throw "All fields must be complete to open an account."
            }
            else {
                let index = this.newCustomer.getAccountUser(customer_Name);
                if (index !== undefined) {
                    // throw "Account user already exist! You may want to update your account instead";
                } else if (index === undefined) {
                    this.newCustomer.createNewAccount(customer_Name, Account_Name, customer_Address);
                    this.setState({ customerList: this.newCustomer.allCustomers });
                }
            }
        }
        catch (err) {
            alert(err);
        }
    }
    handleSelectCustomer(e) {

        let elID = e.target.value;
        console.log('Seleted Element', elID);
        let index = this.newCustomer.getAccountUser(elID);
        console.log(index);

        this.setState({
            selectedValue: e.target.value,
            customerPicture: this.newCustomer.allCustomers[index].passport
        });

    }

    render() {

        return (

            <div className="Account-Container w3-content w3-container">

                <ButtonAccordion name={'Add A New Customer'} accordion={"accordion"} onClick={this.handleAccordionButton} />
                <div id="enterAccDetails" className="panel">
                    <div className="inputRow">
                        <InputField id={"customerName"} placeholder={"Enter Name Here"} />
                        <InputField id={"accountName"} placeholder={"Enter Account Name Here"} />
                        <InputField id={"customerAddress"} placeholder={"Enter Address Here"} />
                        <ButtonAccordion name={'Open Account'} onClick={this.handleOpenAccount} />
                    </div>
                </div>
                <div>
                    <fieldset>
                        <legend >Select Customer</legend>
                        <div className="col1_1_1_1">
                            <SelectCustomer value={this.state.selectedValue} id={"selectCustomer"} onChange={this.handleSelectCustomer} customerList={this.state.customerList} />
                        </div>
                    </fieldset>
                </div>
                <div id="displayAccDetails" className="">
                    <fieldset>
                        <legend >Account Details</legend>
                        <div className="col1_2_1">
                            <div>
                                <div>
                                    <ImageComponent customerPicture={this.state.customerPicture} />
                                </div>
                                <div>

                                </div>
                            </div>
                            <div> Hello World col 2</div>
                            <div> Hello World col 3</div>
                        </div>
                    </fieldset>
                </div>
            </div>

        );
    }
}

export default Account;