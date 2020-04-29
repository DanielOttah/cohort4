import React, { Component } from 'react';
import Button from './Button.js'
import './Cities.css'
import { Community } from './AllCities.js';

export class CreateCityContainer extends Component {
    constructor(props) {
        super(props)
        this.getWhichSphere = new Community();
    }
    handleLearnClick = () => {
        let url = `https://www.google.com/search?q=${this.props.name.toLowerCase()}&rlz=1C1CHBF_enCA883CA883&oq=${this.props.name.toLowerCase()}&aqs=chrome..69i57j46j69i59l3j69i60l3.10207j0j7&sourceid=chrome&ie=UTF-8`
        window.open(url, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=600,height=400");

    }
    render() {
        let location = this.getWhichSphere.whichSphere(this.props.allCityArray[this.props.index].Name, this.props.allCityArray);

        return (
            <div id={`city_${this.props.name}`}>

                <Button className="accordion" name={this.props.name} onClick={this.props.onClick} />
                <div className="panel1" id={this.props.name}>
                    <p className="low_top_margin">City Name: <span className="textBlue">{this.props.allCityArray[this.props.index].Name}</span></p>
                    <p className="low_top_margin">City Population: <span className="textBlue">{this.props.allCityArray[this.props.index].Population}</span></p>
                    <p className="low_top_margin">City Latitude: <span className="textBlue">{this.props.allCityArray[this.props.index].Latitude}</span></p>
                    <p className="low_top_margin">City Longitude: <span className="textBlue">{this.props.allCityArray[this.props.index].Longitude}</span></p>
                    <p className="low_top_margin">City Location: <span className="textBlue">{location}</span></p>
                    <hr />
                    <Button name={"Delete City"} id={`delete${this.props.allCityArray[this.props.index].Name}`} onClick={this.props.onClickDelete} style={{ marginRight: "2px 0px 0px 0px" }} />
                    <Button name={"Edit City"} id={`edit${this.props.allCityArray[this.props.index].Name}`} onClick={this.props.onClickEdit} />
                    <Button name={"Learn More"} onClick={this.handleLearnClick} />
                </div>
            </div>
        );
    }
}
export class CreateAPICityContainer extends Component {
    handleLearnClick = () => {
        let url = `https://www.google.com/search?q=${this.props.name.toLowerCase()}&rlz=1C1CHBF_enCA883CA883&oq=${this.props.name.toLowerCase()}&aqs=chrome..69i57j46j69i59l3j69i60l3.10207j0j7&sourceid=chrome&ie=UTF-8`
        window.open(url, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=600,height=400");

    }
    render() {
        let cntry_boarders = this.props.allAPICityArray[this.props.index].borders; // Get all country borders
        let boarder = "";
        for (let i = 0; i < cntry_boarders.length - 1; i++) {
            boarder += `${cntry_boarders[i]} | `; // concatenate all borders into single string except the last country hence the 'cntry_boarders.length - 1'
        }
        return (
            <div id={`city_${this.props.name}`}>

                <Button className="accordion" name={this.props.name} onClick={this.props.onClick} />
                <div className="panel1" id={this.props.name}>
                    <p className="low_top_margin">Native Country Name: <span className="textBlue">{this.props.allAPICityArray[this.props.index].NativeName}</span></p>
                    <p className="low_top_margin">Country of City: <span className="textBlue">{this.props.allAPICityArray[this.props.index].CountryName}</span></p>
                    <p className="low_top_margin">Country Demonym: <span className="textBlue">{this.props.allAPICityArray[this.props.index].Demonym}</span></p>
                    <p className="low_top_margin">Calling Code: <span className="textBlue">{this.props.allAPICityArray[this.props.index].CallingCodes}</span></p>
                    <p className="low_top_margin">Region: <span className="textBlue">{this.props.allAPICityArray[this.props.index].Region}</span></p>
                    <p className="low_top_margin">Sub-Region: <span className="textBlue">{this.props.allAPICityArray[this.props.index].Subregion}</span></p>
                    <p className="low_top_margin">Time-Zone: <span className="textBlue">{this.props.allAPICityArray[this.props.index].TimeZone}</span></p>
                    <p className="low_top_margin">Population: <span className="textBlue">{this.props.allAPICityArray[this.props.index].Population}</span></p>
                    <p className="low_top_margin">Location: <span className="textBlue">{`${this.props.allAPICityArray[this.props.index].Location[0]}° | ${this.props.allAPICityArray[this.props.index].Location[1]}°`}</span></p>
                    <p className="low_top_margin">Land Area: <span className="textBlue">{this.props.allAPICityArray[this.props.index].Area}</span></p>
                    <p className="low_top_margin">Border: <span className="textBlue">{`${boarder} ${cntry_boarders[cntry_boarders.length - 1]}`}</span></p>
                    <a href={this.props.allAPICityArray[this.props.index].flag} target={"_blank"} rel={"noopener noreferrer"} style={{ color: "blue" }}> <p className="low_top_margin">Country flag</p></a>
                    <hr />
                    <Button name={"Delete City"} id={`delete${this.props.allAPICityArray[this.props.index].Name}`} onClick={this.props.onClickAPIDelete} style={{ marginRight: "2px 0px 0px 0px" }} />
                    <Button name={"Learn More"} onClick={this.handleLearnClick} />
                </div>
            </div>
        );
    }
}