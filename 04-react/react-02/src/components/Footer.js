import React, { Component } from 'react';
import '../App.css';

class Footer extends Component {
    render() {
        return (
            <div className="App" style={{ backgroundColor: '#283234', color: 'white', padding: '10px' }}>
                React App developed and maintained by
                <a className="App-link"
                    href="https://danielottah.github.io/portfolio/"
                    target="_blank"
                    rel="noopener noreferrer"> Daniel</a>
            </div>
        );
    }
}

export default Footer;