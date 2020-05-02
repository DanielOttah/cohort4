import React, { Component } from 'react';
import CityMap from './CityMap.js';
import './Cities.css'
import GetCityInfo from './GetCityInfo.js';
import GetCityTime from './GetCityTime.js';

class Right extends Component {
    render() {
        // let tym = new AllCities();
        // let cityTime = tym.getTime();
        return (
            <div className="RightPane">
                <CityMap title={this.props.title} currentCity={this.props.currentCity} />
                <div className="">
                    <div style={{ borderBottom: "1px solid cadetblue", borderTop: "2px solid cadetblue" }}>
                        <h4 className="hTag low_top_margin inLineDiv">{`${this.props.currentCity} |`}</h4>
                        <h1 className="low_top_margin inLineDiv" style={{ marginRight: "5px" }}> {`${this.props.cityTempData[0]}°C `}</h1>
                        <span className=" low_top_margin inLineDiv" style={{ color: "cadetblue" }}>{`[Feels like ${this.props.cityTempData[1]}°C]`}</span>
                        <GetCityTime currentTime={this.props.currentTime} />
                    </div>

                    <div>
                        <GetCityInfo info={this.props.cityInfoData} cityName={this.props.currentCity} />
                    </div>
                </div>
            </div>
        );
    }
}


export default Right;