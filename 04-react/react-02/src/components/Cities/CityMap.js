import React, { Component } from 'react';

class CityMap extends Component {

    render() {
        let src = `https://maps.google.com/maps?q=${(this.props.currentCity).toLowerCase()}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
        // let src = "https://maps.google.com/maps?q={`${this.props.currentCity}`}&t=&z=13&ie=UTF8&iwloc=&output=embed"
        return (
            <div >
                <div className="mapouter">
                    <div className="gmap_canvas">
                        <iframe title={this.props.title} width="100%" height="600" id="gmap_canvas" src={src} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                        <a href="https://www.embedgooglemap.net">googlmeaps</a>

                    </div>
                </div>
            </div>
        );
    }
}

export default CityMap;