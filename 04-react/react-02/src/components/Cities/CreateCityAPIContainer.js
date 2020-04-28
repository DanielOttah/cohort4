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
                    <p className="low_top_margin">City Name: {this.props.allCityArray[this.props.index].Name}</p>
                    <p className="low_top_margin">City Population: {this.props.allCityArray[this.props.index].Population}</p>
                    <p className="low_top_margin">City Latitude: {this.props.allCityArray[this.props.index].Latitude}</p>
                    <p className="low_top_margin">City Longitude: {this.props.allCityArray[this.props.index].Longitude}</p>
                    <p className="low_top_margin">City Location: {location}</p>
                    <hr />
                    <Button name={"Delete City"} id={`delete${this.props.allCityArray[this.props.index].Name}`} onClick={this.props.onClickDelete} style={{ marginRight: "2px 0px 0px 0px" }} />
                    <Button name={"Learn More"} onClick={this.handleLearnClick} />
                </div>
            </div>
        );
    }
}
