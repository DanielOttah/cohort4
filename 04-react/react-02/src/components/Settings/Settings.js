import React, { Component } from 'react';
import 'C:/code/cohort4/04-react/react-02/src/App.css'
import { ThemeContext } from '../../context/ThemeContext';
import ThemeOptions from './ThemeOptions';
// import SelectThemeList from './SelectThemeList';

// export class Settings extends Component {
//     static contextType = ThemeContext;
//     render() {
//         const { isLightTheme, grayLight, grayDark } = this.context;
//         const currentTheme = isLightTheme ? grayLight : grayDark;
//         const themeType = isLightTheme ? "Gray-Light" : "Gray-Dark";
//         return (

//             <div className="containerSettings" style={{ background: currentTheme.bg, color: currentTheme.textColor }}>

//                 <fieldset >
//                     <legend><b>Application Settings</b></legend>
//                     <div className="" style={{ paddingBottom: "10px" }}>
//                         <fieldset >
//                             <legend><b>Select Theme to Use</b></legend>
//                             <SelectThemeList style={{ background: currentTheme.ui }} />
//                         </fieldset>
//                     </div>
//                     <fieldset >
//                         <legend></legend>
//                         <div className="col2" >
//                             <label><b>Toggle Theme:</b> (Theme is currently {themeType})</label>
//                             <label className="switch">
//                                 <input id="themeId" type="checkbox" onChange={this.handleChange} />
//                                 <span className="slider round"></span>
//                             </label>

//                         </div>
//                     </fieldset>
//                     <div className=""></div>
//                     <div className=""></div>
//                 </fieldset>
//             </div>
//         );
//     }

// }

//Using ThemeContext.Consumer
export class Settings extends Component {
    static contextType = ThemeContext;
    render() {
        return (
            <ThemeContext.Consumer>{(context) => {
                const { isLightTheme, light, dark, toggleLight_Dark } = context;
                const currentTheme = isLightTheme ? light : dark;
                const themeType = (currentTheme.ui === "") ? "No theme selected" : (isLightTheme ? "Light Theme" : " Dark Theme");//  ;
                return (
                    <div className="bodySettings" style={{ background: currentTheme.ui }}>
                        <div className="containerSettings" style={{ background: currentTheme.bg, color: currentTheme.textColor }}>
                            <fieldset >
                                <legend><b>Application Settings</b></legend>
                                <div className="" style={{ paddingBottom: "10px" }}>
                                    <fieldset >
                                        <legend><b>Select Theme to Use</b></legend>
                                        <ThemeOptions themeType={themeType} toggleLight_Dark={toggleLight_Dark} />
                                    </fieldset>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                )
            }}</ThemeContext.Consumer>
        );
    }
}
