export class City {
    constructor(nam, lat, lon, popul) {
        this.name = nam;
        this.latitude = lat;
        this.longitude = lon;
        this.population = popul;
        this.allCities = [];

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
        this.allCities[count].population = this.allCities[count].population + num;
        return this.allCities[count].population;

    }
    movedOut(ct, num) {
        let count = 0;
        for (let i = 0; i < this.allCities.length; i++) {
            if (ct == this.allCities[i].name) {
                count = i;
            }
        }
        this.allCities[count].population = this.allCities[count].population - num;
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
        let cnt;
        for (let i = 0; i < this.newCt.allCities.length; i++) {
            northName[i] = this.newCt.allCities[i].name;
            northLat[i] = this.newCt.allCities[i].latitude;

        }
        cnt = northLat.indexOf(Math.max(...northLat));

        return northName[cnt];
    }
    getMostSouthern() {
        let northName = [];
        let northLat = [];
        let cnt;
        for (let i = 0; i < this.newCt.allCities.length; i++) {
            northName[i] = this.newCt.allCities[i].name;
            northLat[i] = this.newCt.allCities[i].latitude;
        }
        cnt = northLat.indexOf(Math.min(...northLat));

        return northName[cnt];
    }
    getTotalPopulation() {
        let totalPopulation = 0;
        for (let i = 0; i < this.newCt.allCities.length; i++) {
            totalPopulation += this.newCt.allCities[i].population;
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
        cityObj.name = nam;
        cityObj.latitude = lat;
        cityObj.longitude = lon;
        cityObj.population = popul;
        this.newCt.allCities.push(cityObj);

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

}