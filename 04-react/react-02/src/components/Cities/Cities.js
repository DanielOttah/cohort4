import React, { Component } from 'react';
import './Cities.css'
import Left from './Left.js';
import Right from './Right.js';
import { Community } from './AllCities';


const JoinPane = (props) => {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.leftPane}
            </div>
            <div className="SplitPane-right">
                {props.rightPane}
            </div>
        </div>
    );
}
class Cities extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cityKey: 0,
            cityName: "",
            cityLatitude: "",
            cityLongitude: "",
            cityPopulation: "",
            allCityArray: [],
            allAPICityArray: [],
            currentCity: "Calgary",
            cityTempData: {},
            cityInfoData: [],
            cityToUpDate: "",

            updateCityName: "",
            updateCityLat: "",
            updateCityLon: "",
            updateCityPop: ""
        }
        this.newCity = new Community();
    }
    async componentDidMount() {
        try {
            let serverCities = await this.newCity.loadAPICity();
            for (let i = 0; i < serverCities.length; i++) {
                if (serverCities[i].code === "Manual") {
                    this.state.allCityArray.push(serverCities[i]);
                }
                else {
                    this.state.allAPICityArray.push(serverCities[i]);
                }
            }
            let cnt = this.state.allCityArray.length + this.state.allAPICityArray.length;
            this.setState({
                allCityArray: this.state.allCityArray,
                allAPICityArray: this.state.allAPICityArray,
                cityKey: cnt,
                cityTempData: await this.newCity.getCityTemp(this.state.currentCity),
                cityInfoData: await this.newCity.getCityInfo(this.state.currentCity)
            })
            console.log(this.state.allCityArray);
            console.log(this.state.allAPICityArray);

        } catch (err) {
            alert("Failed to load cities from server! Please confirm the server is running", err)
        }
    }
    handleAccordionClick = async (e) => {
        const leftdiv = document.getElementById(`${e.target.textContent}`);
        if (leftdiv.style.display === "block") {
            leftdiv.style.display = "none";
        } else {
            leftdiv.style.display = "block";
            this.setState({
                currentCity: e.target.textContent
            })
            this.setState({
                cityTempData: await this.newCity.getCityTemp(this.state.currentCity),
                cityInfoData: await this.newCity.getCityInfo(this.state.currentCity)
            })

        }
    }
    saveCityToServer = () => {
        const saveCityToAPI = document.getElementById("saveCityToAPI");
        if (saveCityToAPI.checked) {
            return true;
        }
        else {
            return false;
        }
    }
    handleAddCity = () => {
        try {
            let ind = this.newCity.getindexOfCity(this.state.cityName, this.state.allCityArray);

            if (ind >= 0) {
                alert("Error! City exists already");
            } else if (ind === undefined) {
                if (this.state.cityName === "" || this.state.cityLatitude === "" || this.state.cityLongitude === "" || this.state.cityPopulation === "") {
                    // alert("Error! Please check your input values again - No entries in one or more fields.");
                } else if (this.state.cityLatitude < 0 || this.state.cityLongitude < 0 || this.state.cityPopulation < 0) {
                    // alert("Error! Please check your input values again - invalid entries entered.");
                } else if (isNaN(this.state.cityLatitude - 1) || isNaN(this.state.cityLongitude - 1) || isNaN(this.state.cityPopulation - 1)) {
                    // alert("Error! Please check your input values again - invalid entries entered.");
                }
                else {
                    let key = this.state.cityKey + 1;
                    let newCity = this.newCity.createCity(this.state.cityName, this.state.cityLatitude,
                        this.state.cityLongitude, this.state.cityPopulation, key.toString());

                    this.state.allCityArray.push(newCity);

                    this.setState({
                        allCityArray: this.state.allCityArray,
                        cityKey: key
                    })
                    this.newCity.apiPostData(this.saveCityToServer(), this.state.allCityArray[this.state.allCityArray.length - 1])
                    console.log(this.state.allCityArray);

                }
            }
        }
        catch (err) {
            alert(err);//"Failed to load cities from server! Please confirm the server is running",
        }
    }
    handleGetRandomCity = async (e) => {
        try {
            let ind = this.newCity.getindexOfCity(this.state.cityName, this.state.allCityArray);
            if (ind >= 0) {
                alert("Error! City exists already");
            } else if (ind === undefined) {
                let indx = this.state.cityKey + 1;
                let serverCities = await this.newCity.getRandomCity();
                console.log(serverCities);
                let apiCity = {};
                apiCity.key = indx;
                apiCity.code = "Auto";
                apiCity.NativeName = serverCities[0].nativeName;
                apiCity.CountryName = serverCities[0].name;
                apiCity.CallingCodes = serverCities[0].callingCodes[0];
                apiCity.Region = serverCities[0].region;
                apiCity.Subregion = serverCities[0].subregion;
                apiCity.TimeZone = serverCities[0].timezones[0];
                apiCity.Population = serverCities[0].population;
                apiCity.Location = serverCities[0].latlng;
                apiCity.Area = serverCities[0].area;
                apiCity.borders = serverCities[0].borders;
                apiCity.flag = serverCities[0].flag;
                apiCity.Name = serverCities[0].capital;
                apiCity.Demonym = serverCities[0].demonym;

                this.state.allAPICityArray.push(apiCity);
                this.setState({
                    allAPICityArray: this.state.allAPICityArray,
                    cityKey: indx
                })
                await this.newCity.apiPostData(this.saveCityToServer(), this.state.allAPICityArray[this.state.allAPICityArray.length - 1])
            }
        } catch (err) {
            alert("Failed to load cities from server! Please confirm the server is running", err)
        }
    }
    handleClickDelete = async (e) => {
        let cityToDelete = e.target.id;
        let index = await this.newCity.deleteCity(cityToDelete, this.state.allCityArray)
        console.log(index);
        this.state.allCityArray.splice(index, 1);

        this.setState({
            allCityArray: this.state.allCityArray
        })
    }
    handleClickUpdate = (e) => {
        let cityToUpdate = (e.target.id).toString();
        let nameOfCity = cityToUpdate.substr(4, cityToUpdate.length);

        this.setState({
            cityToUpDate: nameOfCity
        })
        const updatediv = document.getElementById("updateCityInfo");
        if (updatediv.style.display === "block") {
            updatediv.style.display = "none";
        } else {
            updatediv.style.display = "block";

        }

    }
    handleUpdateCity = async (e) => {

        const updatediv = document.getElementById("updateCityInfo");
        let count = this.newCity.getindexOfCity(this.state.cityToUpDate, this.state.allCityArray);
        try {
            if (this.state.updateCityName < 0 || this.state.updateCityLat < 0 || this.state.updateCityLon < 0 || this.state.updateCityPop < 0) {
                // throw "Error! Please check your input values again - invalid entries entered."
            } else if (isNaN(this.state.updateCityLat - 1) || isNaN(this.state.updateCityLon - 1) || isNaN(this.state.updateCityPop - 1)) {
                //  throw "Error! Please check your input values again - invalid entries entered."
            } else {
                if (this.state.updateCityName !== this.state.allCityArray[count].Name) {
                    this.newCity.upDateData(count, "Name", this.state.updateCityName, this.state.allCityArray);
                    this.state.allCityArray[count].Name = this.state.updateCityName
                    this.setState({
                        allCityArray: this.state.allCityArray,
                        currentCity: this.state.updateCityName
                    })
                }
                if (this.state.updateCityLat !== this.state.allCityArray[count].Latitude) {
                    this.newCity.upDateData(count, "Latitude", this.state.updateCityLat, this.state.allCityArray);
                    this.state.allCityArray[count].Latitude = this.state.updateCityLat
                    this.setState({
                        allCityArray: this.state.allCityArray
                    })
                }
                if (this.state.updateCityLon !== this.state.allCityArray[count].Longitude) {
                    this.newCity.upDateData(count, "Longitude", this.state.updateCityLon, this.state.allCityArray);
                    this.state.allCityArray[count].Longitude = this.state.updateCityLat
                    this.setState({
                        allCityArray: this.state.allCityArray
                    })
                }
                if (this.state.updateCityPop !== this.state.allCityArray[count].Population) {
                    const selectUpdateCityInfo = document.getElementById("selectUpdateCityInfo");
                    if (selectUpdateCityInfo.value === "realPopulation") {
                        this.newCity.upDateData(count, "Population", this.state.updateCityPop, this.state.allCityArray);
                        this.state.allCityArray[count].Population = this.state.updateCityPop
                        this.setState({
                            allCityArray: this.state.allCityArray
                        })
                    }
                    else if (selectUpdateCityInfo.value === "movedIn") {
                        const popMovedIn = this.newCity.newCt.movedIn(this.state.updateCityName, this.state.updateCityPop, this.state.allCityArray);
                        this.newCity.upDateData(count, "Population", popMovedIn, this.state.allCityArray);
                        this.state.allCityArray[count].Population = this.state.updateCityPop
                        this.setState({
                            allCityArray: this.state.allCityArray
                        })
                    }
                    else if (selectUpdateCityInfo.value === "movedOut") {
                        const popMovedIn = this.newCity.newCt.movedOut(this.state.updateCityName, this.state.updateCityPop, this.state.allCityArray);
                        this.newCity.upDateData(count, "Population", popMovedIn, this.state.allCityArray);
                        this.state.allCityArray[count].Population = this.state.updateCityPop
                        this.setState({
                            allCityArray: this.state.allCityArray
                        })
                    }
                }
                updatediv.style.display = "none";
            }


        } catch (err) {
            alert(err);
        }








    }
    handleClickAPIDelete = async (e) => {
        let cityToDelete = e.target.id;
        let index = await this.newCity.deleteCity(cityToDelete, this.state.allAPICityArray)
        console.log(index);
        this.state.allAPICityArray.splice(index, 1);

        this.setState({
            allAPICityArray: this.state.allAPICityArray
        })
    }
    handleCityNameInput = (e) => {
        this.setState({
            cityName: e.target.value,
        });
    }
    handleCityLatInput = (e) => {
        this.setState({
            cityLatitude: e.target.value
        });
    }
    handleCityLonInput = (e) => {
        this.setState({
            cityLongitude: e.target.value
        });
    }
    handleCityPopInput = (e) => {
        this.setState({
            cityPopulation: e.target.value
        });
    }

    handleupdateCityInputName = (e) => {
        this.setState({
            updateCityName: e.target.value
        });
    }
    handleupdateCityInputLat = (e) => {
        this.setState({
            updateCityLat: e.target.value
        });
    }
    handleupdateCityInputLon = (e) => {
        this.setState({
            updateCityLon: e.target.value
        });
    }
    handleupdateCityInputPop = (e) => {
        this.setState({
            updateCityPop: e.target.value
        });
    }


    render() {

        return (
            <div className="container city-Container" >
                <JoinPane
                    leftPane={
                        <Left
                            onClickAddCity={this.handleAddCity}
                            onClickRandomCity={this.handleGetRandomCity} cityNameInput={this.state.cityName}
                            cityLatInput={this.state.cityLatitude} cityLonInput={this.state.cityLongitude} cityPopInput={this.state.cityPopulation}
                            onChangeCityName={this.handleCityNameInput} onChangeCityLat={this.handleCityLatInput} onChangeCityLon={this.handleCityLonInput}
                            onChangeCityPop={this.handleCityPopInput} onClick={this.handleAccordionClick}
                            allCityArray={this.state.allCityArray} allAPICityArray={this.state.allAPICityArray} onClickDelete={this.handleClickDelete}
                            onClickAPIDelete={this.handleClickAPIDelete} onClickUpdate={this.handleClickUpdate} updateCity={this.state.cityToUpDate}
                            onClickUpdateCity={this.handleUpdateCity}

                            onChangeUpdateCityName={this.handleupdateCityInputName} onChangeUpdateCityLat={this.handleupdateCityInputLat}
                            onChangeUpdateCityLon={this.handleupdateCityInputLon} onChangeUpdateCityPop={this.handleupdateCityInputPop}
                            popValue={this.state.updateCityPop} latValue={this.state.updateCityLat} lonValue={this.state.updateCityLon}
                            nameValue={this.state.updateCityname}

                        />
                    }
                    rightPane={
                        <Right title={this.props.title} currentCity={this.state.currentCity} cityTempData={this.state.cityTempData}
                            cityInfoData={this.state.cityInfoData} />
                    } />

            </div>
        );
    }
}

export default Cities;