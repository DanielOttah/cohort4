import React from 'react';

class City {
    constructor() {
        // this.allCities = [];
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
        arr[count].Population = parseInt(arr[count].Population) + parseInt(num);
        return parseInt(arr[count].Population);

    }
    movedOut(ct, num, arr) {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (ct === arr[i].Name) {
                count = i;
            }
        }
        arr[count].Population = parseInt(arr[count].Population) - parseInt(num);
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
        let cityObj = {};
        cityObj.key = cityKey;
        cityObj.code = "Manual";
        cityObj.Name = nam;
        cityObj.Latitude = parseFloat(lat);
        cityObj.Longitude = parseFloat(lon);
        cityObj.Population = parseInt(popul);
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
            return res;
            // console.log(res);
        } else {
            let apiData = await this.postData(this.url + 'add', obj)
            apiData = await fetch(this.url + 'all');
            const res = await apiData.json();
            return res;
            // console.log(res.length);
        }
    }
    async loadAPICity() {
        let apiData;
        let apiCity = await fetch(this.url + 'clear');
        apiCity = await fetch(this.url + 'load');
        apiCity = await fetch(this.url + 'all');
        apiData = await apiCity.json();
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

    upDateData = async (cityIndex, optn, upDateOption, arr) => {
        const getKey = arr[cityIndex].key.toString();
        let apiDataUpdate;

        if (optn === "Name") {
            let lat = parseFloat(arr[cityIndex].Latitude);
            let lon = parseFloat(arr[cityIndex].Longitude);
            let popul = parseInt(arr[cityIndex].Population);
            apiDataUpdate = await this.postData(this.url + 'update', {
                key: getKey,
                Latitude: lat,
                Longitude: lon,
                Name: `${upDateOption}`,
                Population: popul
            });
        }
        if (optn === "Latitude") {
            let lat = parseFloat(upDateOption);
            let lon = parseFloat(arr[cityIndex].Longitude);
            let popul = parseInt(arr[cityIndex].Population);

            apiDataUpdate = await this.postData(this.url + 'update', {
                key: getKey, Latitude: lat,
                Longitude: lon, Name: arr[cityIndex].Name,
                Population: popul
            });
        }
        if (optn === "Longitude") {
            let lon = parseFloat(upDateOption);
            let lat = parseFloat(arr[cityIndex].Latitude);
            let popul = parseInt(arr[cityIndex].Population);

            apiDataUpdate = await this.postData(this.url + 'update', {
                key: getKey, Latitude: lat,
                Longitude: lon, Name: arr[cityIndex].Name,
                Population: popul
            });
        }
        if (optn === "Population") {
            let lon = parseFloat(arr[cityIndex].Longitude);
            let lat = parseFloat(arr[cityIndex].Latitude);
            let popul = parseInt(upDateOption);

            apiDataUpdate = await this.postData(this.url + 'update', {
                key: getKey, Latitude: lat,
                Longitude: lon, Name: arr[cityIndex].Name, Population: popul
            });
        }
        apiDataUpdate = await fetch(this.url + 'all');
        let updatedCity = await apiDataUpdate.json();
        console.log(updatedCity);

    }
    render() {
        return null;
    }

}


