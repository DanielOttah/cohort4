import React, { Component } from 'react';
import '../App.css';
import { ThemeContext } from '../context/ThemeContext';

class Footer extends Component {
    static contextType = ThemeContext;
    render() {
        return (
            <ThemeContext.Consumer>{(context) => {
                const { isLightTheme, light, dark, selectedThemeOption } = context;
                const currentTheme = isLightTheme ? light : dark;
                let bgColor = (selectedThemeOption === "None" || selectedThemeOption === "custom") ? '#283234' : currentTheme.ui;
                let txtColor = (selectedThemeOption === "None" || selectedThemeOption === "custom") ? 'white' : currentTheme.textColor;
                return (
                    <div className="App" style={{ backgroundColor: bgColor, color: txtColor, padding: '10px' }}>
                        React App developed and maintained by
                        <a className="App-link"
                            href="https://danielottah.github.io/portfolio/"
                            target="_blank"
                            rel="noopener noreferrer"> Daniel</a>
                    </div>
                )
            }}</ThemeContext.Consumer>
        );
    }
}

export default Footer;