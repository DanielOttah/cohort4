import React, { Component } from 'react';
import CityMap from './CityMap.js';
import './Cities.css'

class Right extends Component {
    render() {
        return (
            <div>
                <CityMap title={this.props.title} currentCity={this.props.currentCity} />
                <div className="weatherDiv">
                    <div style={{ borderBottom: "1px solid cadetblue" }}><h4 className="hTag low_top_margin inLineDiv">{`${this.props.currentCity}| `}</h4>
                        <h1 className="inLineDiv">{` ${this.props.cityTempData[0]}°C `}</h1>
                        <span className="inLineDiv" style={{ color: "cadetblue" }}> [Feels like{` ${this.props.cityTempData[0]}°C]`}</span>
                    </div>
                    <div><span ><img src={"/pictures/weather.jpg"} alt={"WeatherPicture"} /></span></div>

                </div>
            </div>
        );
    }
}

export default Right;