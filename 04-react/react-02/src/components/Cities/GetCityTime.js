import React, { Component } from 'react';
import "./Cities.css"
import Clock from './Clock.js'

class GetCityTime extends Component {
    render() {
        return (
            <span className="Time">
                <Clock />
            </span>
        );
    }
}

export default GetCityTime;