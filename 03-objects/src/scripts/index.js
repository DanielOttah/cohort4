import { Account } from './account.js';
import { AccountController } from './account.js';
import { Community } from './city_community.js';
// import { City } from './city_community.js';


const dan = new AccountController(); //Create an Instance
const newTxn = new Account(0);

//===== Event Listeners ======================
window.addEventListener('load', loadDetails);
btnTxnAcc1.addEventListener('click', calcTransaction);
typeOfAcccountSelect.addEventListener('change', showAccount);
makeChangeAccount.addEventListener('click', editAccount);

//=================== Account Functions ==========================================

dan.createAccount('Daniel Ottah', 'Airdrie', 'Savings', 50000); //create an account
let danAcc = dan.allCustomers[0]; // name it danAcc



function editAccount() {
    try {
        if (acctsAddRemove.value == 'addSavings') {
            if (Object.keys(danAcc).includes('Savings_Account')) {
                acctsAddRemove.value = acctsAddRemove[0].value;
                throw "Account already exist";
            } else {
                dan.addAccount(danAcc.Name, 'Saving', 0);
                report.style.backgroundColor = "lightgreen";
                report.textContent = "Savings Account Opened"
            }
        } else if (acctsAddRemove.value == 'addChequeing') {
            if (Object.keys(danAcc).includes('Chequeing_Account')) {
                acctsAddRemove.value = acctsAddRemove[0].value;
                throw "Account already exist";
            } else {
                report.style.backgroundColor = "lightgreen";
                report.textContent = "Chequeing Account Opened"
                dan.addAccount(danAcc.Name, 'Chequeing', 0);
            }
        } else if (acctsAddRemove.value == 'addCarFund') {
            if (Object.keys(danAcc).includes('CarFundAccount')) {
                acctsAddRemove.value = acctsAddRemove[0].value;
                throw "Account already exist";
            } else {
                report.style.backgroundColor = "lightgreen";
                report.textContent = "Car Fund Account Opened"
                dan.addAccount(danAcc.Name, 'Car_Fund', 0);
            }
        } else if (acctsAddRemove.value == 'removeSavings') {
            if (Object.keys(danAcc).includes('Savings_Account')) {
                report.style.backgroundColor = "lightgreen";
                report.textContent = "Savings Account Removed"
                dan.removeAccount(danAcc.Name, 'Saving');
            } else {
                acctsAddRemove.value = acctsAddRemove[0].value;
                throw "Account does not exist";
            }
        } else if (acctsAddRemove.value == 'removeChequeing') {
            if (Object.keys(danAcc).includes('Chequeing_Account')) {
                report.style.backgroundColor = "lightgreen";
                report.textContent = "Chequeing Account Removed"
                dan.removeAccount(danAcc.Name, 'Chequeing');
            } else {
                acctsAddRemove.value = acctsAddRemove[0].value;
                throw "Account does not exist";
            }
        } else if (acctsAddRemove.value == 'removeCarFund') {
            if (Object.keys(danAcc).includes('CarFundAccount')) {
                report.style.backgroundColor = "lightgreen";
                report.textContent = "Car Fund Account Removed"
                dan.removeAccount(danAcc.Name, 'Car Fund');
            } else {
                acctsAddRemove.value = acctsAddRemove[0].value;
                throw "Account does not exist";
            }
        }
    } catch (er) {
        alert(er);
    }
}

function loadDetails() {
    fName.textContent = danAcc.Name;
    address.textContent = danAcc.Address;
    AccNumber.textContent = danAcc.Account_Number;
    // totalNoOFAcc.textContent = Object.keys(checkForAccount(danAcc)).length; //get number of Accs   
}

function calcTransaction() {

    try {
        let c = parseFloat(cashInputAcc1.value);
        if (typeOfAcccountSelect.value == 'savings') {
            if (Object.keys(danAcc).includes('Savings_Account')) {
                if (txnAcc1.value == 'deposit') {
                    if (isNaN(c)) {
                        throw `Error! '${cashInputAcc1.value}' is not a number. Enter a valid number.`;
                    } else {
                        danAcc.Savings_Account = danAcc.Savings_Account + c; //dan.newAccTxn.depositCash(c);
                        showAccount();
                    }
                } else if (txnAcc1.value == 'withdraw') {
                    if (isNaN(c)) {
                        throw `Error! '${cashInputAcc1.value}' is not a number. Enter a valid number.`;
                    } else {
                        danAcc.Savings_Account = danAcc.Savings_Account - c; //dan.newAccTxn.withdrawCash(c);
                        showAccount();
                    }
                }
            } else {
                throw "This account does not exist";
            }
        } else if (typeOfAcccountSelect.value == 'chequeing') {
            if (Object.keys(danAcc).includes('Chequeing_Account')) {
                if (txnAcc1.value == 'deposit') {
                    if (isNaN(c)) {
                        throw `Error! '${cashInputAcc1.value}' is not a number. Enter a valid number.`;
                    } else {
                        danAcc.Chequeing_Account = danAcc.Chequeing_Account + c; //dan.newAccTxn.depositCash(c);
                        showAccount();
                    }
                } else if (txnAcc1.value == 'withdraw') {
                    if (isNaN(c)) {
                        throw `Error! '${cashInputAcc1.value}' is not a number. Enter a valid number.`;
                    } else {
                        danAcc.Chequeing_Account = danAcc.Chequeing_Account - c; //dan.newAccTxn.withdrawCash(c);
                        showAccount();
                    }
                }
            } else {
                throw "This account does not exist";
            }

        } else if (typeOfAcccountSelect.value == 'carFund') {
            if (Object.keys(danAcc).includes('CarFundAccount')) {

                if (txnAcc1.value == 'deposit') {
                    if (isNaN(c)) {
                        throw `Error! '${cashInputAcc1.value}' is not a number. Enter a valid number.`;
                    } else {
                        danAcc.CarFundAccount = danAcc.CarFundAccount + c; //dan.newAccTxn.depositCash(c);
                        showAccount();
                    }
                } else if (txnAcc1.value == 'withdraw') {
                    if (isNaN(c)) {
                        throw `Error! '${cashInputAcc1.value}' is not a number. Enter a valid number.`;
                    } else {
                        danAcc.CarFundAccount = danAcc.CarFundAccount + c; //dan.newAccTxn.withdrawCash(c);
                        showAccount();
                    }
                }
            } else {
                throw "This account does not exist";
            }
        }
    } catch (err) {
        alert(err);
    }
}

function showAccount() {

    if (typeOfAcccountSelect.value == 'options') {
        acc1InitBal.textContent = `Initial Balance: $CAD N/A`;
        acc1CurrBal.textContent = `Current Balance: $$CAD N/A`;

    } else if (typeOfAcccountSelect.value == 'savings') {
        if (Object.keys(danAcc).includes('Savings_Account')) {
            acc1InitBal.textContent = `Initial Balance: $CAD ${danAcc.initialSavCash}`;
            acc1CurrBal.textContent = `Current Balance: $CAD ${danAcc.Savings_Account}`;
        } else {
            alert("Account does not exist");
        }

    } else if (typeOfAcccountSelect.value == 'chequeing') {
        if (Object.keys(danAcc).includes('Chequeing_Account')) {
            acc1InitBal.textContent = `Initial Balance: $CAD ${danAcc.initialCheqCash}`;
            acc1CurrBal.textContent = `Current Balance: $CAD ${danAcc.Chequeing_Account}`;
        } else {
            alert("Account does not exist");
        }

    } else if (typeOfAcccountSelect.value == 'carFund') {
        if (Object.keys(danAcc).includes('CarFundAccount')) {
            acc1InitBal.textContent = `Initial Balance: $CAD ${danAcc.initialCarCash}`;
            acc1CurrBal.textContent = `Current Balance: $CAD ${danAcc.CarFundAccount}`;
        } else {
            alert("Account does not exist");
        }
    }
    accTotal.textContent = `Total Cash: $CAD ${dan.accountTotal(danAcc.Name)}`;
    accHighest.textContent = `Highest $: $CAD ${dan.highestValueAccount(danAcc.Name)[1]} | ${dan.highestValueAccount(danAcc.Name)[0]}`;
    accLowest.textContent = `Lowest $: $CAD ${dan.lowestValueAccount(danAcc.Name)[1]} | ${dan.lowestValueAccount(danAcc.Name)[0]}`;

}
//========================== End Account Functions==================================
let ct = new Community();
let count = ct.newCt.allCities.length; //Get number of cities
addCity.addEventListener('click', addNewCity);
cities.addEventListener('click', cityButtons);


//========================== City Functions==================================

function addNewCity() {
    //  try {
    let cityLat = Number(cityLatitude.value);
    let cityLon = Number(cityLongitude.value);
    let cityPop = Number(cityPopulation.value);
    let cityNam = cityName.value;

    if (cityLat < 0 || cityLon < 0 || cityPop < 0 || cityNam - 1 == NaN || cityLat - 1 == NaN || cityLon - 1 == NaN || cityPop - 1 == NaN) {
        throw "Error! Please check your input values again."
    } else {
        ct.createCity(cityName.value, cityLatitude.value, cityLongitude.value, cityPopulation.value);
        ++count;
        //alert(`${cityNam} has been entered succesfully.`);
        let btnCity = document.createElement("button"); //Create Accordion Button
        btnCity.className = "accordion1"; //Give button class
        btnCity.id = `btnCity${count}`; //Give button id
        let city = ct.newCt.allCities[count - 1].name; //get text that will be on button
        btnCity.appendChild(document.createTextNode(city)); //place text on button
        cities.appendChild(btnCity); //add accordion button to page
        let div1 = document.createElement('div'); //Container holding all the infoirmation
        div1.className = "pullLeft";
        div1.classList.add("panelShow");
        div1.id = `infoContainer${count}`;
        div1.style = "height:460;"
        div1.style = "overflow-y:scroll;"
        div1.appendChild(createPElement(`City Population: ${ct.getPopulationofCity(cityName.value)}`));
        div1.appendChild(createPElement(`City Latitude: ${ct.newCt.allCities[count - 1].latitude}`));
        div1.appendChild(createPElement(`City Longitude: ${ct.newCt.allCities[count - 1].longitude}`));
        div1.appendChild(createPElement(`City Location: ${ct.whichSphere(cityName.value)}`));
        let h = document.createElement("hr");
        div1.appendChild(h);
        div1.appendChild(createButtonElement(`Edit City`));
        div1.appendChild(document.createElement('span'));
        div1.appendChild(createButtonElement(`Delete City`));
        cities.appendChild(div1);
        div1.appendChild(h);
        clearAllEntries();

    }

    // } catch (err) {
    //     alert(err);
    // }
}

function clearAllEntries() {
    cityLatitude.value = "";
    cityLongitude.value = "";
    cityPopulation.value = "";
    cityName.value = "";
}

function createPElement(txt) { // Creates <p> tag Elements and attaches the texts
    let p = document.createElement('P');
    let text = document.createTextNode(txt);
    text.style = "color:blue";
    p.appendChild(text);
    return p;
}

function createButtonElement(txt) { // Creates <button> tag Elements and attaches the texts
    let btn = document.createElement('Button');
    btn.appendChild(document.createTextNode(txt));
    return btn;
}

function getElementClicked(event) {
    let x = event.target;
    return x.id;
}

function cityButtons() {
    let elId = getElementClicked(event); //get id of element
    let num = elId.substring(7, elId.length); //get id number
    let cont = document.getElementById(`infoContainer${num}`)
    if (cont.style.display == "block") {
        cont.style.display = "none";
    } else {
        cont.style.display = "block";
    }

}