import { Account } from './account.js';
import { AccountController } from './account.js';
import { Community } from './city_community.js';
import { getAPICities } from './fetchcityAPI.js';
const dan = new AccountController(); //Create an Instance
const newTxn = new Account(0);

//===== Event Listeners ======================
window.addEventListener('load', () => {
    loadDetails();
    // loadCities("Airdrie", 51.2369, 144.2546, 79000);
    // loadCities("Calgary", 51.0236, 143.0056, 1200000);
    // loadCities("British Columbia", 52.3654, 145.987, 600000);
    // loadCities("Halifax", "50.9874", 143.2546, 500000);
});
// btnTxnAcc1.addEventListener('click', calcTransaction);
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
        totalNoOFAcc.textContent = checkForNoOfAccount();
    } catch (er) {
        alert(er);
    }
}

function loadDetails() {
    // fName.textContent = danAcc.Name;
    address.textContent = danAcc.Address;
    AccNumber.textContent = danAcc.Account_Number;
    totalNoOFAcc.textContent = checkForNoOfAccount();

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
        totalNoOFAcc.textContent = checkForNoOfAccount();
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
            typeOfAcccountSelect.value = typeOfAcccountSelect[0];
            alert("Account does not exist");
        }
    }
    totalNoOFAcc.textContent = checkForNoOfAccount();
    accTotal.textContent = `Total Cash: $CAD ${dan.accountTotal(danAcc.Name)}`;
    accHighest.textContent = `Highest $: $CAD ${dan.highestValueAccount(danAcc.Name)[1]} | ${dan.highestValueAccount(danAcc.Name)[0]}`;
    accLowest.textContent = `Lowest $: $CAD ${dan.lowestValueAccount(danAcc.Name)[1]} | ${dan.lowestValueAccount(danAcc.Name)[0]}`;

}

function checkForNoOfAccount() {
    let cnt = 0;
    for (let r = 0; r < Object.keys(danAcc).length; r++) {
        if (Object.keys(danAcc)[r].includes("Account")) {
            cnt++;
        }
    }
    return cnt - 1;
}


//========================== End Account Functions==================================

let ct = new Community();
let count = ct.newCt.allCities.length; //Get number of cities
let cityToEdit, cityTabToEdit;
addCity.addEventListener('click', addNewCity);
cities.addEventListener('click', cityButtons);
UpdateCity.addEventListener('click', editCityInformation);
getGenInfo.addEventListener('click', genCityInformation);


//========================== City Functions==================================

function loadCities(nameOfcity, latitudeOFcity, longitudeOfcity, populationOfCity) {
    ct.createCity(nameOfcity, latitudeOFcity, longitudeOfcity, populationOfCity);
    ++count;
    // alert(`${cityName.value} has been entered succesfully.`);
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
    div1.appendChild(createPElement(`City Population: ${ct.getPopulationofCity(nameOfcity)}`));
    div1.appendChild(createPElement(`City Category: ${ct.newCt.howBig(nameOfcity)}`));
    div1.appendChild(createPElement(`City Latitude: ${ct.newCt.allCities[count - 1].latitude}`));
    div1.appendChild(createPElement(`City Longitude: ${ct.newCt.allCities[count - 1].longitude}`));
    div1.appendChild(createPElement(`City Location: ${ct.whichSphere(nameOfcity)}`));
    let h = document.createElement("hr");
    div1.appendChild(h);
    div1.appendChild(createButtonElement(`Edit City`));
    div1.appendChild(createButtonElement(`Delete City`));
    div1.appendChild(createButtonElement(`Discover`));

    cities.appendChild(div1);
    div1.appendChild(h);
}

function addNewCity() {

    try {
        let cityLat = parseFloat(cityLatitude.value);
        let cityLon = parseFloat(cityLongitude.value);
        let cityPop = parseFloat(cityPopulation.value);
        let cityNam = cityName.value;
        if (cityLatitude.value == "" || cityLongitude.value == "" || cityPopulation.value == "" || cityName.value == "") {
            throw "Error! Please check your input values again - No entries in one or more fields.";
        } else if (cityLat < 0 || cityLon < 0 || cityPop < 0) {
            throw "Error! Please check your input values again - invalid entries entered."
        } else if (isNaN(cityLatitude.value - 1) || isNaN(cityLongitude.value - 1) || isNaN(cityPopulation.value - 1)) {
            throw "Error! Please check your input values again - invalid entries entered."
        } else {
            ct.createCity(cityName.value, cityLatitude.value, cityLongitude.value, cityPopulation.value);
            ++count;
            // alert(`${cityName.value} has been entered succesfully.`);
            let btnCity = document.createElement("button"); //Create Accordion Button
            btnCity.className = "accordion1"; //Give button class
            btnCity.id = `btnCity${count}`; //Give button id
            //  let city = ct.newCt.allCities[count - 1].name; //get text that will be on button
            btnCity.appendChild(document.createTextNode(cityNam)); //place text on button
            cities.appendChild(btnCity); //add accordion button to page
            let div1 = document.createElement('div'); //Container holding all the infoirmation
            div1.className = "pullLeft";
            div1.classList.add("panelShow");
            div1.id = `infoContainer${count}`;
            div1.appendChild(createPElement(`City Population: ${ct.getPopulationofCity(cityName.value)}`));
            div1.appendChild(createPElement(`City Category: ${ct.newCt.howBig(cityName.value)}`));
            div1.appendChild(createPElement(`City Latitude: ${ct.newCt.allCities[count - 1].latitude}`));
            div1.appendChild(createPElement(`City Longitude: ${ct.newCt.allCities[count - 1].longitude}`));
            div1.appendChild(createPElement(`City Location: ${ct.whichSphere(cityName.value)}`));
            let h = document.createElement("hr");
            div1.appendChild(h);
            div1.appendChild(createButtonElement(`Edit City`));
            div1.appendChild(createButtonElement(`Delete City`));
            div1.appendChild(createButtonElement(`Discover`));

            cities.appendChild(div1);
            div1.appendChild(h);
            clearAllEntries();
            // console.log(ct.newCt.allCities);

        }

    } catch (err) {
        alert(err);
    }
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
    p.className = "smallFont";
    p.appendChild(text);
    return p;
}

function createButtonElement(txt) { // Creates <button> tag Elements and attaches the texts
    let btn = document.createElement('Button');
    if (txt == "Edit City") {
        btn.appendChild(document.createTextNode(txt));
        btn.id = `edit${count}`;
        btn.style = "margin-right: 5px;"
    } else if (txt == "Delete City") {
        btn.appendChild(document.createTextNode(txt));
        btn.id = `delete${count}`;
        btn.style = "margin-right: 5px;"
    } else if (txt == "Discover") {
        btn.appendChild(document.createTextNode(txt));
        btn.id = `discover${count}`;
    }
    else if (txt == "Learn More") {
        btn.appendChild(document.createTextNode(txt));
        btn.id = `learn${count}`;
    }

    return btn;
}

function getElementClicked(event) {
    let x = event.target;
    return x;
}

function cityButtons() {
    let elId = getElementClicked(event); //get element
    let num = elId.id.substring(7, elId.length); //get id number
    if (elId.id.includes("btnCity")) {
        let cont = document.getElementById(`infoContainer${num}`);
        if (cont.style.display == "block") {
            cont.style.display = "none";
        } else {
            cont.style.display = "block";
            document.querySelector("#gmap_canvas1").src = `https://maps.google.com/maps?q=${(elId.textContent).toLowerCase()}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
        }
    } else if (elId.id.includes("delete")) {
        let cityToDelete = elId.parentNode.previousElementSibling.textContent; //get name of city to delete
        ct.deleteCity(cityToDelete); //parse name to delete city from array store
        elId.parentNode.previousElementSibling.remove(); //delete button 
        elId.parentNode.remove(); //delete city info container
        document.querySelector("#gmap_canvas1").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18876468.200307723!2d-113.72221585646199!3d54.72270517403909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0d03d337cc6ad9%3A0x9968b72aa2438fa5!2sCanada!5e0!3m2!1sen!2sca!4v1584990289869!5m2!1sen!2sca";

    } else if (elId.id.includes("edit")) {
        cityToEdit = elId.parentNode;
        let ed = document.getElementById("editCityInfo");
        if (ed.style.display == "block") {
            ed.style.display = "none";
        } else {
            ed.style.display = "block";
        }
    } else if (elId.id.includes("discover")) {
        let cityToLearn = elId.parentNode.previousElementSibling.textContent; //get name of city to learn more about
        let url = `https://www.google.com/search?q=${cityToLearn.toLowerCase()}&rlz=1C1CHBF_enCA883CA883&oq=${cityToLearn.toLowerCase()}&aqs=chrome..69i57j46j69i59l3j69i60l3.10207j0j7&sourceid=chrome&ie=UTF-8`
        window.open(url, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=600,height=400");
    }

}

function editCityInformation() {
    //cityToEdit is name of city - global variable

    try {
        if (newCityName.value < 0 || newCityLatitude.value < 0 || newCityLongitude.value < 0 || newCityPopulation.value < 0) {
            throw "Error! Please check your input values again - invalid entries entered."
        } else if (isNaN(newCityLatitude.value - 1) || isNaN(newCityLongitude.value - 1) || isNaN(newCityPopulation.value - 1)) {
            throw "Error! Please check your input values again - invalid entries entered."
        } else {

            let cityIndex = ct.getindexOfCity(cityToEdit.previousElementSibling.textContent);
            let allPs = cityToEdit.getElementsByTagName("P"); //get all p tags and update them

            if (newCityName.value.length == 0) {

            } else if (newCityName.value.length > 0) {
                ct.newCt.allCities[cityIndex].name = newCityName.value;
                cityToEdit.previousElementSibling.textContent = newCityName.value; //update old name to new name

            }
            if (newCityLatitude.value.length == 0) {

            } else if (newCityLatitude.value.length > 0) {
                ct.newCt.allCities[cityIndex].latitude = newCityLatitude.value;
                allPs[2].textContent = `City Latitude: ${ct.newCt.allCities[cityIndex].latitude}`; //update old name to new latitude
            }
            if (newCityLongitude.value.length == 0) {

            } else if (newCityLongitude.value.length > 0) {
                ct.newCt.allCities[cityIndex].longitude = newCityLongitude.value;
                allPs[3].textContent = `City Longitude: ${ct.newCt.allCities[cityIndex].longitude}`; //update old name to new longitude
            }
            if (newCityPopulation.value.length == 0) {

            } else if (newCityPopulation.value.length > 0) {
                const ppleMigrate = parseFloat(newCityPopulation.value);
                if (selectMove.value == "popUpdate") {
                    ct.newCt.allCities[cityIndex].popupation = newCityPopulation.value;
                    allPs[0].textContent = `City Population: ${ct.newCt.allCities[cityIndex].popupation}`; //update old name to new popupation
                } else if (selectMove.value == "movedIn") {
                    ct.newCt.allCities[cityIndex].popupation = ct.newCt.movedIn(cityToEdit.previousElementSibling.textContent, ppleMigrate);
                    allPs[0].textContent = `City Population: ${ct.newCt.allCities[cityIndex].popupation}`; //update old name to new popupation
                } else if (selectMove.value == "movedOut") {
                    ct.newCt.allCities[cityIndex].popupation = ct.newCt.movedOut(cityToEdit.previousElementSibling.textContent, ppleMigrate);
                    allPs[0].textContent = `City Population: ${ct.newCt.allCities[cityIndex].popupation}`; //update old name to new popupation
                }
            }

            allPs[4].textContent = `City Location: ${ct.whichSphere(cityToEdit.previousElementSibling.textContent)}`;
            allPs[1].textContent = `City Category: ${ct.newCt.howBig(cityToEdit.previousElementSibling.textContent)}`;

            //===============Update Map of City==========
            document.querySelector("#gmap_canvas1").src = `https://maps.google.com/maps?q=${cityToEdit.previousElementSibling.textContent.toLowerCase()}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
            document.getElementById("editCityInfo").style.display = "none"; //close edit panel
            newCityName.value = "";
            newCityLatitude.value = "";
            newCityLongitude.value = "";
            newCityPopulation.value = "";
        }
    } catch (err) {
        alert(err);
    }

}

function genCityInformation() {
    if (selectGenInfo.value == "mostNorthern") {
        genInfoText.textContent = `${ct.getMostNorthern()[0]}`;
        genInfoAnswer.textContent = `${ct.getMostNorthern()[1]}°`;
    } else if (selectGenInfo.value == "mostSouthern") {
        genInfoText.textContent = `${ct.getMostSouthern()[0]}`;
        genInfoAnswer.textContent = `${ct.getMostSouthern()[1]}°`;
    } else if (selectGenInfo.value == "totalPopulation") {
        genInfoText.textContent = `Total Pop.: `;
        genInfoAnswer.textContent = `${ct.getTotalPopulation()}`;
    }
}

//========================== API City Functions==================================
const myAPICity = new getAPICities();

const getCityInformation = async () => {
    try {
        if ((await myAPICity.getRealCityData(apiCityInput.value)).status == 404) {
            throw `An error occured, ${apiCityInput.value} is not a capital city in Europe.`;
        }
        else {
            let myCity = await myAPICity.getRealCityData(apiCityInput.value) //Call getRealCityData() passing city name as argument and Get city data from api (nb data comes back as an array)
            myAPICity.allAPICities.push(myCity[0]);//push the object inside the array retieved above to the 'myAPICity.allAPICities' that stores all the cities
            let btnCity = document.createElement("button"); //Create Accordion Button
            btnCity.className = "accordion1"; //Give button class
            btnCity.id = `btnCity${apiCityInput.value}`; //Give button id
            btnCity.appendChild(document.createTextNode(apiCityInput.value.toUpperCase())); //place text on button
            apiCities.appendChild(btnCity); //add accordion button to page
            let apidiv1 = document.createElement('div'); //Container holding all city information
            apidiv1.className = "pullLeft"; // assign className
            apidiv1.classList.add("panelShow"); //add another class to div
            apidiv1.id = `infoContainer ${apiCityInput.value}`; // give div an id

            apidiv1.appendChild(createPElement(`Country of City: ${myAPICity.allAPICities[myAPICity.getCityIndex(apiCityInput.value)].name}`)); // display name nb accessed the info direclty by getting the index from the array and retrieving the value using the keys
            apidiv1.appendChild(createPElement(`Calling Codes: ${myAPICity.allAPICities[myAPICity.getCityIndex(apiCityInput.value)].callingCodes[0]}`)); // display calling code
            apidiv1.appendChild(createPElement(`Region: ${myAPICity.allAPICities[myAPICity.getCityIndex(apiCityInput.value)].region}`)); // display region
            apidiv1.appendChild(createPElement(`Sub-Region: ${myAPICity.allAPICities[myAPICity.getCityIndex(apiCityInput.value)].subregion}`)); // display subregion
            apidiv1.appendChild(createPElement(`Population: ${myAPICity.allAPICities[myAPICity.getCityIndex(apiCityInput.value)].population}`)); // display population
            let latitude = myAPICity.allAPICities[myAPICity.getCityIndex(apiCityInput.value)].latlng[0]; //get latitude
            let longitude = myAPICity.allAPICities[myAPICity.getCityIndex(apiCityInput.value)].latlng[1]; // get longitude
            apidiv1.appendChild(createPElement(`Location (Lat|Lon): ${latitude}° | ${longitude}°`)); // display latitude and longitude
            apidiv1.appendChild(createPElement(`Land Area: ${myAPICity.allAPICities[myAPICity.getCityIndex(apiCityInput.value)].area}`)); // display area

            let link = document.createElement('a'); // create a tag for links
            link.setAttribute("href", `${myAPICity.allAPICities[myAPICity.getCityIndex(apiCityInput.value)].flag}`); //set attribute for a tag
            link.setAttribute("target", "_blank");//set attribute for a tag
            link.setAttribute("style", "color:blue");//set attribute for a tag
            link.appendChild(document.createTextNode("Country Flag")); //append text to a tag
            apidiv1.appendChild(link); // append a tag to div

            let h = document.createElement("hr"); // create horizontal line
            apidiv1.appendChild(h);// append horizontal line
            apidiv1.appendChild(createButtonElement(`Delete City`)); //append button delete
            apidiv1.appendChild(createButtonElement(`Learn More`)); // append button learn more
            apiCities.appendChild(apidiv1);
        }
    } catch (error) {
        alert(error);
    }

}
const apiCityButton = () => {
    try {
        let elId = getElementClicked(event); //get element
        if (elId.id.includes("btnCity")) {
            let cont = document.getElementById(`infoContainer ${elId.textContent.toLowerCase()}`); // open info div if button is clicked

            if (cont.style.display == "block") {
                cont.style.display = "none";
            } else {
                cont.style.display = "block";
                document.querySelector("#apiGmap_canvas1").src = `https://maps.google.com/maps?q=${(elId.textContent).toLowerCase()}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
            }
        } else if (elId.id.includes("delete")) { // if delete is clicked, delete the city
            let cityToDelete = elId.parentNode.previousElementSibling.textContent.toLowerCase(); //get name of city to delete
            myAPICity.deleteCity(cityToDelete); //parse name to delete city from array store
            elId.parentNode.previousElementSibling.remove(); //delete button 
            elId.parentNode.remove(); //delete city info container
            document.querySelector("#apiGmap_canvas1").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21826362.71734335!2d4.176574417919653!3d48.103465957001404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46ed8886cfadda85%3A0x72ef99e6b3fcf079!2sEurope!5e0!3m2!1sen!2sca!4v1585727376421!5m2!1sen!2sca";

        } else if (elId.id.includes("learn")) {// if learn more is clicked, open a new window
            let cityToLearn = elId.parentNode.previousElementSibling.textContent; //get name of city to learn more about
            let url = `https://www.google.com/search?q=${cityToLearn.toLowerCase()}&rlz=1C1CHBF_enCA883CA883&oq=${cityToLearn.toLowerCase()}&aqs=chrome..69i57j46j69i59l3j69i60l3.10207j0j7&sourceid=chrome&ie=UTF-8`
            window.open(url, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=600,height=400");
        }
    } catch (error) {
        alert('An error occured! Can not complete operation.', error);
    }
}


apiGetGenCityInfo.addEventListener('click', getCityInformation);
apiCities.addEventListener('click', apiCityButton);

