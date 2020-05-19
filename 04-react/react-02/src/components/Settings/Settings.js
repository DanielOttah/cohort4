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
                const { isCustomTheme, isLightTheme, light, dark, toggleLight_Dark, onChangeBG, isCustomThemeTC, isCustomThemeBG,
                    onChangeUI, onChangeTC, selectedThemeOption, isCustomThemeUI } = context;
                const currentTheme = isLightTheme ? light : dark;
                const themeType = (selectedThemeOption !== "None" && selectedThemeOption !== "custom") ? (isLightTheme ? "Light Theme" : " Dark Theme") : ((selectedThemeOption === "None") ? "No theme selected" : "Custom Theme");
                const isOnCustomTheme = (isCustomTheme) ? "block" : "none";
                return (
                    <div className="bodySettings" style={{ background: currentTheme.bg }}>
                        <div className="containerSettings" style={{ background: currentTheme.ui, color: currentTheme.textColor }}>
                            <fieldset >
                                <legend><b>Application Settings</b></legend>
                                <div className="" style={{ paddingBottom: "10px" }}>
                                    <fieldset >
                                        <legend><b>Select Theme to Use</b></legend>
                                        <ThemeOptions themeType={themeType} toggleLight_Dark={toggleLight_Dark} />
                                        <div id="idCustomTheme" style={{ display: `${isOnCustomTheme}`, marginTop: "10px", marginBottom: "10px" }}>
                                            <legend ><b>Select Custom Theme</b></legend>
                                            <label style={{ marginRight: "50px" }}>Background: <input id="idCustomeThemeBG" type="color" value={isCustomThemeBG} onChange={onChangeBG} /></label>
                                            <label style={{ marginRight: "50px" }}>UI: <input id="idCustomeThemeUI" type="color" value={isCustomThemeUI} onChange={onChangeUI} /></label>
                                            <label style={{ marginRight: "50px" }}>Text Color: <input id="idCustomeThemeTextColor" type="color" value={isCustomThemeTC} onChange={onChangeTC} /></label>
                                        </div>
                                    </fieldset>

                                </div>

                            </fieldset>

                            <div className="AnimeDiv" >
                                <div className="sign">
                                    {/* <span className="fast-flicker">d</span>an<span className="flicker">i</span>el <br /> */}
                                    <span className="fast-flicker">en</span>d-<br />
                                    <span className="flicker">of</span><br />
                                    <span className="fast-flicker">-fe</span>d<br />
                                </div>
                            </div>

                        </div>

                    </div>
                )
            }}</ThemeContext.Consumer>
        );
    }
}
