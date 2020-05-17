import React, { Component } from 'react';
import { ThemeContext } from './context/ThemeContext';

//   let bgColor = (selectedThemeOption === "None") ? "#b9e8ee" : "#b9e8ee";
class NavBar extends Component {
    static contextType = ThemeContext;
    render() {
        return (
            <ThemeContext.Consumer>{(context) => {
                const { isLightTheme, light, dark, selectedThemeOption } = context;
                const currentTheme = isLightTheme ? light : dark;
                let bgColor = (selectedThemeOption === "None") ? "#b9e8ee" : currentTheme.ui;
                return (
                    <div className="" id="svgDiv" style={{ background: bgColor, display: 'flex', justifyContent: 'center' }}>
                        <img onClick={this.props.onClick} className="Svg-alt-logo" id="idHome" src={"/svg/optimised_Home.svg"} alt="logo" />
                        <img onClick={this.props.onClick} className="Svg-logo" id="idTicTacToe" src={"/svg/cog1.svg"} alt="logo" />
                        <img onClick={this.props.onClick} className="Svg-alt-logo" id="idAccount" src={"/svg/account.svg"} alt="logo" />
                        <img onClick={this.props.onClick} className="Svg-logo" id="idCities" src={"/svg/edit.svg"} alt="logo" />
                        <img onClick={this.props.onClick} className="Svg-alt-logo" id="idLL" src={"/svg/goal.svg"} alt="logo" />
                        <img onClick={this.props.onClick} className="Svg-logo" id="idQueue_Stack" src={"/svg/cell.svg"} alt="logo" />
                        <img onClick={this.props.onClick} className="Svg-alt-logo" id="idSettings" src={"/svg/settings.svg"} alt="logo" />
                    </div>
                )
            }}</ThemeContext.Consumer>
        );
    }
}

export default NavBar;