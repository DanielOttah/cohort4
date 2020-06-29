import React, { Component } from 'react';
import CityInputField from './CityInputField.js'
import Button from './Button.js';
import { CreateCityContainer, CreateAPICityContainer } from './CreateCityContainer.js';
import UpdateCityComponent from './UpdateCityComponent.js';
import './Cities.css';
import { Community } from './AllCities.js'

class Left extends Component {
    constructor(props) {
        super(props)
        this.myCity = new Community()
        this.state = {
            mostSouthern: "",
            mostNorthern: ""

        }
    }

    onClickMostNorthern = () => {
        let apiCity = this.myCity.getMostNorthern(this.props.allAPICityArray)[0]
        let ct = this.myCity.getMostNorthern(this.props.allCityArray)[0]
        this.setState({
            mostNorthern: (apiCity > ct) ? apiCity : ct
        })
    }
    onClickMostSouthern = () => {
        let apiCity = this.myCity.getMostSouthern(this.props.allAPICityArray)[0]
        let ct = this.myCity.getMostSouthern(this.props.allCityArray)[0]
        this.setState({
            mostSouthern: (apiCity > ct) ? apiCity : ct
        })
    }

    render() {
        const children = [];
        const apiChildren = [];
        // const checkAPICitiesLoaded = (this.props.allAPICityArray.length === 0 || this.props.allCityArray.length === 0) ? true : false
        for (var r = 0; r < this.props.allAPICityArray.length; r++) {
            let btnName = this.props.allAPICityArray[r].Name;
            apiChildren.push(<CreateAPICityContainer key={r} index={r} name={btnName.toUpperCase()}
                onClick={this.props.onClick} allAPICityArray={this.props.allAPICityArray} onClickAPIDelete={this.props.onClickAPIDelete}
                onClickEdit={this.props.onClickUpdate} />);
        };
        for (var i = 0; i < this.props.allCityArray.length; i += 1) {
            let btnName = this.props.allCityArray[i].Name;
            children.push(<CreateCityContainer key={i} index={i} name={btnName.toUpperCase()}
                onClick={this.props.onClick} allCityArray={this.props.allCityArray} onClickDelete={this.props.onClickDelete}
                onClickEdit={this.props.onClickUpdate} />);
        };
        return (
            <div className="LeftPane" id="LeftPane">
                <fieldset className="">
                    <legend ><b>City Information</b></legend>
                    <span className="tooltiptext" id="" style={{ display: this.props.toolTip }}>{this.props.error_msg1}</span>

                    <table style={{ margin: "0px" }}>
                        <tbody>
                            <tr><th>
                                City Name
                </th><td>
                                    <CityInputField type="text" id="cityName" placeholder="city name"
                                        value={this.props.cityNameInput} onChange={this.props.onChangeCityName} />
                                </td></tr>
                            <tr><th>
                                City Latitude
                </th><td>
                                    <CityInputField type="text" id="cityLat" placeholder="city latitude"
                                        value={this.props.cityLatInput} onChange={this.props.onChangeCityLat}
                                    />
                                </td></tr>
                            <tr><th>
                                City Longitude
                </th><td>
                                    <CityInputField type="text" id="cityLon" placeholder="city longitude"
                                        value={this.props.cityLonInput} onChange={this.props.onChangeCityLon} />
                                </td></tr>
                            <tr><th>
                                City Population
                </th><td>
                                    <CityInputField type="text" id="cityPop" placeholder="city population"
                                        value={this.props.cityPopInput} onChange={this.props.onChangeCityPop} />
                                </td></tr>

                        </tbody>
                    </table>
                    <table style={{ margin: "0px" }}>
                        <tbody>
                            <tr><td><label> <CityInputField type="checkBox" id="saveCityToAPI" />
                                 Save City to API Server</label></td></tr>
                        </tbody>
                    </table>

                    <Button name="Add City" onClick={this.props.onClickAddCity} style={{ margin: " 2px 2px" }} />
                    <div className="tooltip"> <Button name="Get Random City" onClick={this.props.onClickRandomCity} />
                        <span className="tooltiptext">European cities</span></div>

                    <table style={{ margin: "0px" }}>
                        <tbody>
                            <tr><th><Button name="Most Northern" onClick={this.onClickMostNorthern} /></th>
                                <td><input type="text" id="mostNorthern" value={this.state.mostNorthern} readOnly /></td></tr>
                            <tr><th><Button name="Most Southern" onClick={this.onClickMostSouthern} /></th>
                                <td><input type="text" id="mostSouthern" value={this.state.mostSouthern} readOnly /></td></tr>
                        </tbody>
                    </table>
                    <UpdateCityComponent TextType={"text"} toolTipStyle={this.props.toolTipStyle} error_msg={this.props.error_msg} onClickUpdateCity={this.props.onClickUpdateCity} nameValue={this.props.nameValue}
                        latValue={this.props.latValue} lonValue={this.props.lonValue} popValue={this.props.popValue}
                        onChangeUpdateCityPop={this.props.onChangeUpdateCityPop} onChangeUpdateCityLon={this.props.onChangeUpdateCityLon}
                        onChangeUpdateCityLat={this.props.onChangeUpdateCityLat} onChangeUpdateCityName={this.props.onChangeUpdateCityName} />
                </fieldset>

                <fieldset>
                    <legend><b>Cities</b></legend>
                    [api: https://leins-cities.herokuapp.com/]
                    {/* <div className={`${(checkAPICitiesLoaded) ? "CityContainerScroll" : "loader"}`} id="CityContainer" > */}
                    <div className="CityContainerScroll" id="CityContainer" >
                        {children}
                        {apiChildren}
                    </div>
                </fieldset>
            </div>

        );
    }
}
export default Left;