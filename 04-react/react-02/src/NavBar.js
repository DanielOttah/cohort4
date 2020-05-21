import React, { Component } from 'react';
import { ThemeContext } from './context/ThemeContext';

class NavBar extends Component {
    static contextType = ThemeContext;
    render() {
        return (
            <ThemeContext.Consumer>{(context) => {
                const { isLightTheme, light, dark, selectedThemeOption } = context;
                const currentTheme = isLightTheme ? light : dark;
                let bgColor = (selectedThemeOption === "None" || selectedThemeOption === "custom") ? "#b9e8ee" : currentTheme.ui;
                return (
                    <div className="" id="svgDiv" style={{ background: bgColor, display: 'flex', justifyContent: 'center' }}>
                        <img onClick={this.props.onClick} className="Svg-alt-logo myShakeImg iconGlow" id="idHome" src={"/svg/optimised_Home.svg"} alt="logo" />
                        <img onClick={this.props.onClick} className="Svg-logo myShakeImg" id="idTicTacToe" src={"/svg/cog1.svg"} alt="logo" />
                        <img onClick={this.props.onClick} className="Svg-alt-logo myShakeImg" id="idAccount" src={"/svg/account.svg"} alt="logo" />
                        <img onClick={this.props.onClick} className="Svg-logo myShakeImg" id="idCities" src={"/svg/edit.svg"} alt="logo" />
                        <img onClick={this.props.onClick} className="Svg-alt-logo myShakeImg" id="idLL" src={"/svg/goal.svg"} alt="logo" />
                        <img onClick={this.props.onClick} className="Svg-logo myShakeImg" id="idQueue_Stack" src={"/svg/cell.svg"} alt="logo" />
                        <img onClick={this.props.onClick} className="Svg-alt-logo myShakeImg" id="idSettings" src={"/svg/settings.svg"} alt="logo" />
                    </div>
                )
            }}</ThemeContext.Consumer>
        );
    }
}

export default NavBar;