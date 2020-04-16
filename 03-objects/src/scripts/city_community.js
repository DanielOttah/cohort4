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
        return parseInt(this.allCities[count].population);

    }
    movedOut(ct, num) {
        let count = 0;
        for (let i = 0; i < this.allCities.length; i++) {
            if (ct == this.allCities[i].name) {
                count = i;
            }
        }
        this.allCities[count].population = parseFloat(this.allCities[count].population) - num;
        return parseInt(this.allCities[count].population);
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
        this.cityKey;
        this.url = 'http://localhost:5000/';
        //  this.url = 'http://127.0.0.1:5000/';
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
        let cnt = northLat.indexOf(Math.max(...northLat));
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
        this.cityKey = this.newCt.allCities.length;
        let cityObj = {};
        cityObj.key = ++this.cityKey;
        cityObj.name = nam;
        cityObj.latitude = parseFloat(lat);
        cityObj.longitude = parseFloat(lon);
        cityObj.population = parseInt(popul);
        this.newCt.allCities.push(cityObj);
        //======================================
        this.apiPostData();
    }

    async deleteCity(ct) {
        let cityNm = ct.substr(1, ct.length);//Using this because a white space was added to the name so the caret arrows can be used in the accordion button 
        let count = this.getindexOfCity(cityNm);
        const getKey = this.newCt.allCities[count].key.toString();
        this.newCt.allCities.splice(count, 1);

        let apiData = await this.postData(this.url + 'delete', { key: getKey });
        apiData = await this.postData(this.url + 'all');
        console.log(apiData);

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
    async loadAPICity() {
        let apiData;
        let apiCity = await fetch(this.url + 'clear');
        apiCity = await fetch(this.url + 'load');
        apiCity = await fetch(this.url + 'all');
        apiData = await apiCity.json();

        for (let r = 0; r < apiData.length; r++) {
            this.newCt.allCities.push(apiData[r]);
        }
        console.log(this.newCt.allCities);
        return apiData;
    }

    async upDateData(ct, upDateIten, upDatData) {
        // let cnt = this.getindexOfCity(this.newCt.allCities[0].name);
        const getKey = this.newCt.allCities[ct].key;
        let apiDataUpdate;

        if (upDateIten == "name") {
            let lat = parseFloat(this.newCt.allCities[ct].latitude);
            let lon = parseFloat(this.newCt.allCities[ct].longitude);
            let popul = parseInt(this.newCt.allCities[ct].population);
            apiDataUpdate = await this.postData(this.url + 'update', {
                key: getKey,
                latitude: lat,
                longitude: lon,
                name: `${upDatData}`,
                population: popul
            });
        }
        if (upDateIten == "latitude") {
            let lat = parseFloat(upDatData);
            let lon = parseFloat(this.newCt.allCities[ct].longitude);
            let popul = parseInt(this.newCt.allCities[ct].population);

            apiDataUpdate = await this.postData(this.url + 'update', {
                key: getKey, latitude: lat,
                longitude: lon, name: this.newCt.allCities[ct].name,
                population: popul
            });
        }
        if (upDateIten == "longitude") {
            let lon = parseFloat(upDatData);
            let lat = parseFloat(this.newCt.allCities[ct].latitude);
            let popul = parseInt(this.newCt.allCities[ct].population);

            apiDataUpdate = await this.postData(this.url + 'update', {
                key: getKey, latitude: lat,
                longitude: lon, name: this.newCt.allCities[ct].name,
                population: popul
            });
        }
        if (upDateIten == "population") {
            let lon = parseFloat(this.newCt.allCities[ct].longitude);
            let lat = parseFloat(this.newCt.allCities[ct].latitude);
            let popul = parseInt(upDatData);

            apiDataUpdate = await this.postData(this.url + 'update', {
                key: getKey, latitude: lat,
                longitude: lon, name: this.newCt.allCities[ct].name, population: popul
            });
        }
        apiDataUpdate = await fetch(this.url + 'all');
        let updatedCity = await apiDataUpdate.json();
        console.log(updatedCity);

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
        json.status = response.status;
        json.statusText = response.statusText;
        // console.log(json, typeof(json));
        return json;
    }
    apiPostData = async () => {
        let apiData = await this.postData(this.url + 'add', this.newCt.allCities[this.cityKey - 1])
        apiData = await this.postData(this.url + 'save', this.newCt.allCities[this.cityKey - 1]);//

        // apiData = await fetch(this.url + 'all');
        // let updatedCity = await apiData.json();
        // console.log(updatedCity);

    }

}