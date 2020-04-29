import React, { Component } from 'react';
import CityMap from './CityMap.js';
import './Cities.css'

class Right extends Component {
    render() {
        return (
            <div className="RightPane">
                <CityMap title={this.props.title} currentCity={this.props.currentCity} />
                <div className="">
                    <div style={{ borderBottom: "1px solid cadetblue", borderTop: "2px solid cadetblue" }}><h4 className="hTag low_top_margin inLineDiv">{`${this.props.currentCity}| `}</h4>
                        <h1 className="inLineDiv">{` ${this.props.cityTempData[0]}°C `}</h1>
                        <span className="inLineDiv" style={{ color: "cadetblue" }}> [Feels like{` ${this.props.cityTempData[0]}°C]`}</span>
                    </div>
                    <div><img className="weatherpix" src={"/pictures/cloud.jpg"} alt={"WeatherPicture"} /> Try Me</div>
                </div>
            </div>
        );
    }
}

export default Right;