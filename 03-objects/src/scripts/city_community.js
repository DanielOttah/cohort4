export class City {
    constructor(nam, lat, lon, popul) {
        this.name = nam;
        this.latitude = lat;
        this.longitude = lon;
        this.population = popul;
        this.allCities = [];
        this.cnt = 0;

    }
    show(ct) {

        let count = 0;
        for (let i = 0; i < this.allCities.length; i++) {
            if (ct == this.allCities[i].name) {
                count = i;
            }
        }
        return `${this.allCities[count].name} is at latitude:${this.allCities[count].latitude} and longitude:${this.allCities[count].longitude} with a population of ${this.allCities[count].population}`;

    }
    movedIn(ct, num) {
        let count = 0;
        for (let i = 0; i < this.allCities.length; i++) {
            if (ct == this.allCities[i].name) {
                count = i;
            }
        }
        this.allCities[count].population = parseFloat(this.allCities[count].population) + num;
        return this.allCities[count].population;

    }
    movedOut(ct, num) {
        let count = 0;
        for (let i = 0; i < this.allCities.length; i++) {
            if (ct == this.allCities[i].name) {
                count = i;
            }
        }
        this.allCities[count].population = parseFloat(this.allCities[count].population) - num;
        return this.allCities[count].population;
    }
    howBig(cityName) {
        let size = "";
        try {
            let count = 0;
            for (let i = 0; i < this.allCities.length; i++) {
                if (cityName == this.allCities[i].name) {
                    count = i;
                }
            }
            if (this.allCities[count].population > 100000) {
                size = "City";
            } else if (20000 < this.allCities[count].population && this.allCities[count].population <= 100000) {
                size = "Large Town";
            } else if (1000 < this.allCities[count].population && this.allCities[count].population <= 20000) {
                size = "Town";
            } else if (100 < this.allCities[count].population && this.allCities[count].population <= 1000) {
                size = "Village";
            } else if (this.allCities[count].population && this.allCities[count].population <= 100) {
                size = "Hamlet";
            }
            return size;
        } catch (err) {
            alert(err);
        }
    }

}


export class Community {
    constructor() {
        this.newCt = new City();
        this.cityKey = 3;
        // this.url = 'http://localhost:5000/';
        this.url = 'http://127.0.0.1:5000/';
    }

    whichSphere(ct) {
        let sph = "";
        let count = 0;
        for (let i = 0; i < this.newCt.allCities.length; i++) {
            if (ct == this.newCt.allCities[i].name) {
                count = i;
            }
        }
        if (this.newCt.allCities[count].latitude > 45) {
            sph = "Northern Hemisphere";
        } else if (this.newCt.allCities[count].latitude <= 45) {
            sph = "Southern Hemisphere";
        }
        return sph;
    }
    getMostNorthern() {
        let northName = [];
        let northLat = [];
        let returnVal = [];
        for (let i = 0; i < this.newCt.allCities.length; i++) {
            northName[i] = this.newCt.allCities[i].name;
            northLat[i] = parseFloat(this.newCt.allCities[i].latitude);

        }
        cnt = northLat.indexOf(Math.max(...northLat));
        returnVal.push(northName[cnt], northLat[cnt])

        return returnVal;
    }
    getMostSouthern() {
        let northName = [];
        let northLat = [];
        let returnVal = [];
        let cnt;
        for (let i = 0; i < this.newCt.allCities.length; i++) {
            northName[i] = this.newCt.allCities[i].name;
            northLat[i] = parseFloat(this.newCt.allCities[i].latitude);
        }
        cnt = northLat.indexOf(Math.min(...northLat));
        returnVal.push(northName[cnt], northLat[cnt])

        return returnVal;
    }
    getTotalPopulation() {
        let totalPopulation = 0;
        for (let i = 0; i < this.newCt.allCities.length; i++) {
            totalPopulation += parseFloat(this.newCt.allCities[i].population);
        }
        return totalPopulation;
    }
    getPopulationofCity(ct) {
        let count = 0;
        for (let i = 0; i < this.newCt.allCities.length; i++) {
            if (ct == this.newCt.allCities[i].name) {
                count = i;
            }
        }
        return this.newCt.allCities[count].population;
    }
    createCity(nam, lat, lon, popul) {

        let cityObj = {};
        cityObj.key = ++this.cityKey;
        cityObj.name = nam;
        cityObj.latitude = parseFloat(lat);
        cityObj.longitude = parseFloat(lon);
        cityObj.population = parseInt(popul);
        this.newCt.allCities.push(cityObj);
        // console.log(cityObj.key);

        //======================================
        this.apiPostData();
    }
    deleteCity(ct) {
        let count = 0;
        for (let i = 0; i < this.newCt.allCities.length; i++) {
            if (ct == this.newCt.allCities[i].name) {
                count = i;
            }
        }
        this.newCt.allCities.splice(count, 1);
    }
    getindexOfCity(CtNam) {
        let count = 0;
        for (let i = 0; i < this.newCt.allCities.length; i++) {
            if (CtNam == this.newCt.allCities[i].name) {
                count = i;
            }
        }
        return count;
    }
    async postData(URL = '', data = {}) {
        // console.log(URL);
        // console.log(data);

        // Default options are marked with *
        const response = await fetch(URL, {
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
        json.status = response.status;
        json.statusText = response.statusText;
        // console.log(json, typeof(json));
        return json;
    }
    apiPostData = async () => {
        // let apiData = await this.postData(this.url + 'clear');
        let apiData = await this.postData(this.url + 'all');
        apiData = await this.postData(this.url + 'add', this.newCt.allCities[this.cityKey - 4])
        console.log("Add status: ", apiData.status);
        apiData = await this.postData(this.url + 'all');
        // console.log( apiData.status);
        console.log('Data Length:', apiData.length);
        console.log("All data: ", apiData);
        // this.apiSaveData();

    }
    apiSaveData = async () => {
        let apiData = await this.postData(this.url + 'save');
        console.log("Save status: ", apiData.status);
        // console.log(apiData.length);
        // console.log(apiData);
    }

}