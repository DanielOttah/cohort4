import React from 'react';

class City {
    constructor() {
        this.allCities = [];
        this.cnt = 0;
    }
    show(ct, arr) {

        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (ct === arr[i].Name) {
                count = i;
            }
        }
        return `${arr[count].Name} is at latitude:${arr[count].Latitude} and longitude:${arr[count].Longitude} with a population of ${arr[count].Population}`;

    }
    movedIn(ct, num, arr) {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (ct === arr[i].Name) {
                count = i;
            }
        }
        arr[count].Population = parseFloat(arr[count].Population) + num;
        return parseInt(arr[count].Population);

    }
    movedOut(ct, num, arr) {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (ct === arr[i].Name) {
                count = i;
            }
        }
        arr[count].Population = parseFloat(arr[count].Population) - num;
        return parseInt(arr[count].Population);
    }
    howBig(cityName, arr) {
        let size = "";
        try {
            let count = 0;
            for (let i = 0; i < arr.length; i++) {
                if (cityName === arr[i].Name) {
                    count = i;
                }
            }
            if (arr[count].Population > 100000) {
                size = "City";
            } else if (20000 < arr[count].Population && arr[count].Population <= 100000) {
                size = "Large Town";
            } else if (1000 < arr[count].Population && arr[count].Population <= 20000) {
                size = "Town";
            } else if (100 < arr[count].Population && arr[count].Population <= 1000) {
                size = "Village";
            } else if (arr[count].Population && arr[count].Population <= 100) {
                size = "Hamlet";
            }
            return size;
        } catch (err) {
            alert(err);
        }
    }

}

export class Community extends React.Component {
    constructor(props) {
        super(props);
        this.newCt = new City();
        this.url = 'http://localhost:5000/';
        //  this.url = 'http://127.0.0.1:5000/';
        this.urlEurope = `https://restcountries.eu/rest/v2/capital/`; // url of api used
        this.capitals = [];
    }
    whichSphere = (ct, arr) => {
        let sph = "";
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (ct === arr[i].Name) {
                count = i;
            }
        }
        if (arr[count].Latitude > 45) {
            sph = "Northern Hemisphere";
        } else if (arr[count].Latitude <= 45) {
            sph = "Southern Hemisphere";
        }
        return sph;
    }
    getMostNorthern = (arr) => {
        let northName = [];
        let northLat = [];
        let returnVal = [];
        for (let i = 0; i < arr.length; i++) {
            northName[i] = arr[i].Name;
            northLat[i] = parseFloat(arr[i].Latitude);
        }
        let cnt = northLat.indexOf(Math.max(...northLat));
        returnVal.push(northName[cnt], northLat[cnt])

        return returnVal;
    }
    getMostSouthern = (arr) => {
        let northName = [];
        let northLat = [];
        let returnVal = [];
        let cnt;
        for (let i = 0; i < arr.length; i++) {
            northName[i] = arr[i].Name;
            northLat[i] = parseFloat(arr[i].Latitude);
        }
        cnt = northLat.indexOf(Math.min(...northLat));
        returnVal.push(northName[cnt], northLat[cnt])

        return returnVal;
    }
    getTotalPopulation = (arr) => {
        let totalPopulation = 0;
        for (let i = 0; i < arr.length; i++) {
            totalPopulation += parseInt(arr[i].Population);
        }
        return totalPopulation;
    }
    getPopulationofCity = (ct, arr) => {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (ct === arr[i].Name) {
                count = i;
            }
        }
        return arr[count].Population;
    }
    createCity = (nam, lat, lon, popul, cityKey) => {
        //  let city_temp = await this.getCityTemp(nam);

        let cityObj = {};
        cityObj.key = cityKey;
        cityObj.code = "Manual";
        cityObj.Name = nam;
        cityObj.Latitude = parseFloat(lat);
        cityObj.Longitude = parseFloat(lon);
        cityObj.Population = parseInt(popul);
        // cityObj.Temp = city_temp; 
        return cityObj;
    }
    getindexOfCity = (CtNam, arr) => {
        let count;
        for (let i = 0; i < arr.length; i++) {
            if (CtNam === arr[i].Name) {
                count = i;
            }
        }
        return count;
    }
    async deleteCity(cityId, arr) {
        let cityIdString = cityId.toString();
        let nameOfCity = cityIdString.substr(6, cityIdString.length);
        let count = this.getindexOfCity(nameOfCity, arr);
        const getKey = arr[count];

        let apiData = await this.postData(this.url + 'delete', getKey);
        apiData = await fetch(this.url + 'all');
        let response = await apiData.json();
        console.log(response);
        return count;

    }
    apiPostData = async (saveCity_q, obj) => {

        if (saveCity_q === true) {
            let apiData = await this.postData(this.url + 'add', obj);
            apiData = await this.postData(this.url + 'save', obj);// save city cos checkbox was clicked
            apiData = await fetch(this.url + 'all');
            const res = await apiData.json();
            console.log(res);
        } else {
            let apiData = await this.postData(this.url + 'add', obj)
            apiData = await fetch(this.url + 'all');
            const res = await apiData.json();
            console.log(res);
        }
    }
    async loadAPICity() {
        let apiData;
        let apiCity = await fetch(this.url + 'clear');
        apiCity = await fetch(this.url + 'load');
        apiCity = await fetch(this.url + 'all');
        apiData = await apiCity.json();

        // for (let r = 0; r < apiData.length; r++) {
        //     let temp = [];
        //     temp = await this.getCityTemp(apiData[r].name);
        //     apiData[r].temp = temp; // Assign temperature values to the cities retireved from the server
        // }
        // for (let r = 0; r < apiData.length; r++) {
        //     this.newCt.allCities.push(apiData[r]);
        // }
        // console.log(this.newCt.allCities);
        return apiData;
    }
    async postData(link = '', data = {}) {

        // Default options are marked with *
        const response = await fetch(link, {
            method: 'POST',     // *GET, POST, PUT, DELETE, etc.
            mode: 'cors',       // no-cors, *cors, same-origin
            cache: 'no-cache',  // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow',         // manual, *follow, error
            referrer: 'no-referrer',    // no-referrer, *client
            body: JSON.stringify(data)  // body data type must match "Content-Type" header
        });

        const json = await response.json();    // parses JSON response into native JavaScript objects
        // json.status = response.status;
        // json.statusText = response.statusText;
        // console.log(json, typeof(json));
        return json;
    }
    cityCapitals() {
        this.capitals = ["Tirana", "Andorra la Vella", " Yerevan", "Vienna", " Baku", "Minsk", "Brussels", "Sarajevo", "Sofia", "Zagreb",
            "Nicosia", "Prague", "Copenhagen", "Tallinn", "Helsinki", "Paris", "Tbilisi", 'Berlin', "Athens", 'Budapest', "Reykjavik", "Dublin",
            "Nur-Sultan", "Pristina", "Riga", "Vaduz", "Vilnius", "Luxembourg", "Valletta", "Chisinau", "Monaco", "Podgorica", "Amsterdam",
            "Skopje", "Oslo", "Warsaw", "Lisbon", "Bucharest", "Moscow", "San Marino", "Belgrade", "Bratislava", "Ljubljana", "Madrid", "Stockholm",
            "Bern", "Ankara", "Kiev", "London"];
        return this.capitals[Math.floor(Math.random() * 52)]
    }
    async getRandomCity() {
        const response = await fetch(this.urlEurope + `${this.cityCapitals()}`); //Use GET to retrieve city data
        let data = await response.json();// parse it as json format
        return data; //return the data          
    }
    getCityTemp = async (city) => {
        let temp = [];
        let city_temp = await fetch(`http://api.weatherapi.com/v1/current.json?key=f9eb724cfbe348d5a00114754201904&q=${city}`);
        const json = await city_temp.json();
        temp.push(parseFloat(json.current.temp_c).toFixed(2));
        temp.push(parseFloat(json.current.feelslike_c).toFixed(2));
        return temp;
    }
    render() {
        return null;
    }

}





// async const upDateData = (ct, upDateIten, upDatData) => {
//     const getKey = this.newCt.allCities[ct].key.toString();
//     let apiDataUpdate;

//     if (upDateIten == "name") {
//         let lat = parseFloat(this.newCt.allCities[ct].latitude);
//         let lon = parseFloat(this.newCt.allCities[ct].longitude);
//         let popul = parseInt(this.newCt.allCities[ct].population);
//         apiDataUpdate = await this.postData(this.url + 'update', {
//             key: getKey,
//             latitude: lat,
//             longitude: lon,
//             name: `${upDatData}`,
//             population: popul
//         });
//     }
//     if (upDateIten == "latitude") {
//         let lat = parseFloat(upDatData);
//         let lon = parseFloat(this.newCt.allCities[ct].longitude);
//         let popul = parseInt(this.newCt.allCities[ct].population);

//         apiDataUpdate = await this.postData(this.url + 'update', {
//             key: getKey, latitude: lat,
//             longitude: lon, name: this.newCt.allCities[ct].name,
//             population: popul
//         });
//     }
//     if (upDateIten == "longitude") {
//         let lon = parseFloat(upDatData);
//         let lat = parseFloat(this.newCt.allCities[ct].latitude);
//         let popul = parseInt(this.newCt.allCities[ct].population);

//         apiDataUpdate = await this.postData(this.url + 'update', {
//             key: getKey, latitude: lat,
//             longitude: lon, name: this.newCt.allCities[ct].name,
//             population: popul
//         });
//     }
//     if (upDateIten == "population") {
//         let lon = parseFloat(this.newCt.allCities[ct].longitude);
//         let lat = parseFloat(this.newCt.allCities[ct].latitude);
//         let popul = parseInt(upDatData);

//         apiDataUpdate = await this.postData(this.url + 'update', {
//             key: getKey, latitude: lat,
//             longitude: lon, name: this.newCt.allCities[ct].name, population: popul
//         });
//     }
//     apiDataUpdate = await fetch(this.url + 'all');
//     let updatedCity = await apiDataUpdate.json();
//     console.log(updatedCity);

// }
// async const postData = (link = '', data = {}) => {

//     // Default options are marked with *
//     const response = await fetch(link, {
//         method: 'POST',     // *GET, POST, PUT, DELETE, etc.
//         mode: 'cors',       // no-cors, *cors, same-origin
//         cache: 'no-cache',  // *default, no-cache, reload, force-cache, only-if-cached
//         credentials: 'same-origin', // include, *same-origin, omit
//         headers: {
//             'Content-Type': 'application/json'
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         redirect: 'follow',         // manual, *follow, error
//         referrer: 'no-referrer',    // no-referrer, *client
//         body: JSON.stringify(data)  // body data type must match "Content-Type" header
//     });

//     const json = await response.json();    // parses JSON response into native JavaScript objects
//     json.status = response.status;
//     json.statusText = response.statusText;
//     // console.log(json, typeof(json));
//     return json;
// }
// const getAPICities = () => {
//     const urlEurope = `https://restcountries.eu/rest/v2/capital/`; // url of api used

//     getCity = async (cityName) => {
//         try {
//             const response = await fetch(this.url + `${cityName}`); //Use GET to retrieve city data
//             let data = await response.json();// parse it as json format
//             return data; //return the data

//         } catch (error) {
//             // alert(`${cityName} is not a capital city.`, error);

//         }
//     }
//     getRealCityData = async (ct) => {
//         try {
//             let data = await this.getCity(ct); //get the parsed data
//             // this.allAPICities.push(data[0]);
//             return data; //return the data           
//         } catch (error) {
//             // alert(`${cityName} is not a capital city.`, error);

//         }
//     }

// }

