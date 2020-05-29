import React, { Component } from 'react';
import './Cities.css'
import Left from './Left.js';
import Right from './Right.js';


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
export class SplitPane extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cityName: "",
            cityLatitude: "",
            cityLongitude: "",
            cityPopulation: ""
        }
    }

    handleAddCity = (e) => {
        //    const nameOfCity = document.getElementById("cityName");
        //     const latOfCity = document.getElementById("cityLatitude");
        //     const longOfCity = document.getElementById("cityLongitude");
        //     const popOfCity = document.getElementById("cityPopulation");

        // this.setState({
        //     cityName: nameOfCity.value,
        //     cityLatitude: latOfCity.value,
        //     cityLongitude: longOfCity.value,
        //     cityPopulation: popOfCity.value
        // })
        // console.log(latOfCity);
        console.log(this.state.cityName);
        //     console.log(longOfCity);
        //     console.log(popOfCity);
    }
    // handleGetRandomCity = (e) => {
    // }
    handlCityNameInput = (e) => {
        this.setState({
            cityName: e.target.value
        });

    }
    render() {
        return (
            <JoinPane
                leftPane={
                    <Left CityNameId={"cityName"} CityLatId={"cityLat"} CityLonId={"cityLon"} CityPopId={"cityPop"} Nameplaceholder={"city name"}
                        Latplaceholder={"city latitude"} Lonplaceholder={"city longitude"} Popplaceholder={"city population"}
                        CheckType={"checkBox"} TextType={"text"} checkId={"saveCityToAPI"} AddCityName={"Add City"} onClickAddCity={this.handleAddCity}
                        randomCityName={"Get Random City"} onClickRandomCity={this.handleGetRandomCity} cityNameInput={this.state.cityName}
                        cityLatInput={this.state.cityLatitude} cityLonInput={this.state.cityLongitude} cityPopInput={this.state.cityPopulation}
                        onChangeCityName={this.handlCityNameInput}
                    />
                }
                rightPane={
                    <Right title={this.props.title} />
                } />
        );
    }
}

