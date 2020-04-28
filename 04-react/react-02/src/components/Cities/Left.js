import React, { Component } from 'react';
import CityInputField from './CityInputField.js'
import Button from './Button.js';
import { CreateCityContainer, CreateAPICityContainer } from './CreateCityContainer.js';
import './Cities.css';

class Left extends Component {


    render() {
        const children = [];
        const apiChildren = [];
        // console.log(this.props.allAPICityArray);

        for (var r = 0; r < this.props.allAPICityArray.length; r++) {
            let btnName = this.props.allAPICityArray[r].Capital;
            apiChildren.push(<CreateAPICityContainer key={r} index={r} name={btnName.toUpperCase()}
                onClick={this.props.onClick} allAPICityArray={this.props.allAPICityArray} onClickAPIDelete={this.props.onClickAPIDelete} />);
        };
        for (var i = 0; i < this.props.allCityArray.length; i += 1) {
            let btnName = this.props.allCityArray[i].Name;
            children.push(<CreateCityContainer key={i} index={i} name={btnName.toUpperCase()}
                onClick={this.props.onClick} allCityArray={this.props.allCityArray} onClickDelete={this.props.onClickDelete} />);
        };
        return (
            <div className="LeftPane" id="LeftPane">
                <fieldset className="">
                    <legend ><b>City Information</b></legend>
                    <table style={{ margin: "0px" }}>
                        <tbody>
                            <tr><th>
                                City Name
                </th><td>
                                    <CityInputField type={this.props.TextType} id={this.props.CityNameId} placeholder={this.props.Nameplaceholder}
                                        value={this.props.cityNameInput} onChange={this.props.onChangeCityName} />
                                </td></tr>
                            <tr><th>
                                City Latitude
                </th><td>
                                    <CityInputField type={this.props.TextType} id={this.props.CityLatId} placeholder={this.props.Latplaceholder}
                                        value={this.props.cityLatInput} onChange={this.props.onChangeCityLat}
                                    />
                                </td></tr>
                            <tr><th>
                                City Longitude
                </th><td>
                                    <CityInputField type={this.props.TextType} id={this.props.CityLonId} placeholder={this.props.Lonplaceholder}
                                        value={this.props.cityLonInput} onChange={this.props.onChangeCityLon} />
                                </td></tr>
                            <tr><th>
                                City Population
                </th><td>
                                    <CityInputField type={this.props.TextType} id={this.props.CityPopId} placeholder={this.props.Popplaceholder}
                                        value={this.props.cityPopInput} onChange={this.props.onChangeCityPop} />
                                </td></tr>

                        </tbody>
                    </table>
                    <table style={{ margin: "0px" }}>
                        <tbody>
                            <tr><td><label> <CityInputField type={this.props.CheckType} id={this.props.checkId} />
                                 Save City to API Server</label></td></tr>
                        </tbody>
                    </table>
                    <Button name={this.props.AddCityName} onClick={this.props.onClickAddCity} style={{ margin: " 2px 2px" }} />
                    <div className="tooltip"> <Button name={this.props.randomCityName} onClick={this.props.onClickRandomCity} />
                        <span className="tooltiptext">European cities</span></div>
                </fieldset>

                <fieldset>
                    <legend><b>Cities</b></legend>
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