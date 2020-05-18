import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    constructor(props) {
        super(props)
        this.none = {
            isLightTheme: true,
            light: { textColor: "#000000", ui: "#FFFFFF", bg: "#FFFFFF" },
            dark: { textColor: "#000000", ui: "#FFFFFF", bg: "#FFFFFF" }
        }
        this.state = {
            isLightTheme: true,
            isCustomTheme: false,
            isCustomThemeBG: "#FFFFFF",
            isCustomThemeUI: "#FFFFFF",
            isCustomThemeTC: "#000000",
            gray: {
                light: { textColor: "#555", ui: "#ddd", bg: "#eee" },
                dark: { textColor: "#ddd", ui: "#333", bg: "#555" }
            },
            brown: {
                light: { textColor: "#14191a", ui: "#ebd495", bg: "#ecdcb0" },
                dark: { textColor: "#f5f5f5", ui: "#523f0e", bg: "#5e4503" }
            },
            blue: {
                light: { textColor: "#111a1f", ui: "#309cd6", bg: "#a9d4ec" },
                dark: { textColor: "#aed7eb", ui: "#313e44", bg: "#111a1f" }
            },
            green: {
                light: { textColor: "#0a1a0e", ui: "#90f7aa", bg: "#6cb37e" },
                dark: { textColor: "#d8dad9", ui: "#2a6e3b", bg: "#0c3316" }
            },
            whichTheme: this.none,
            selectedThemeOption: "None",
        }
        this.customTheme = {
            light: { textColor: "#000000", ui: "#FFFFFF", bg: "#FFFFFF" },
            dark: { textColor: "#000000", ui: "#FFFFFF", bg: "#FFFFFF" }
        }

    }
    selectTheme = (e) => {
        const selectedTheme = e.target.value;
        const themeId = document.getElementById("themeId");

        if (selectedTheme === "None") {
            themeId.disabled = true;
            this.setState({
                whichTheme: this.none,
                selectedThemeOption: "None",
                isCustomTheme: false
            })
            themeId.value = "None";
        } else if (selectedTheme === "blue") {
            themeId.disabled = false;

            this.setState({
                whichTheme: this.state.blue,
                selectedThemeOption: "blue",
                isCustomTheme: false
            })

        } else if (selectedTheme === "gray") {
            themeId.disabled = false;

            this.setState({
                whichTheme: this.state.gray,
                selectedThemeOption: "gray",
                isCustomTheme: false
            })
        } else if (selectedTheme === "green") {
            themeId.disabled = false;

            this.setState({
                whichTheme: this.state.green,
                selectedThemeOption: "green",
                isCustomTheme: false
            })

        } else if (selectedTheme === "brown") {
            themeId.disabled = false;

            this.setState({
                whichTheme: this.state.brown,
                selectedThemeOption: "brown",
                isCustomTheme: false
            })
        }
        else if (selectedTheme === "custom") {
            themeId.disabled = true;
            this.setState({
                selectedThemeOption: "custom",
                isCustomTheme: true,
                whichTheme: this.customTheme
            })
        }
    }
    toggleLight_Dark = () => {

        if (this.state.whichTheme === this.none) {
            return;
        } else if (this.state.whichTheme === this.state.blue) {
            this.setState({
                isLightTheme: !this.state.isLightTheme
            })

        } else if (this.state.whichTheme === this.state.gray) {
            this.setState({
                isLightTheme: !this.state.isLightTheme
            })
        } else if (this.state.whichTheme === this.state.green) {
            this.setState({
                isLightTheme: !this.state.isLightTheme
            })

        } else if (this.state.whichTheme === this.state.brown) {
            this.setState({
                isLightTheme: !this.state.isLightTheme
            })
        }
    }
    onChangeBG = (e) => {
        this.customTheme.light.bg = e.target.value;
        this.customTheme.dark.bg = e.target.value;
        this.setState({
            isCustomThemeBG: e.target.value
        })
    }
    onChangeUI = (e) => {
        this.customTheme.light.ui = e.target.value;
        this.customTheme.dark.ui = e.target.value;
        this.setState({
            isCustomThemeUI: e.target.value
        })
    }
    onChangeTC = (e) => {
        this.customTheme.light.textColor = e.target.value;
        this.customTheme.dark.textColor = e.target.value;
        this.setState({
            isCustomThemeTC: e.target.value
        })
    }
    render() {
        return (
            <ThemeContext.Provider value={{
                ...this.state.whichTheme, isLightTheme: this.state.isLightTheme,
                toggleLight_Dark: this.toggleLight_Dark, selectTheme: this.selectTheme,
                selectedThemeOption: this.state.selectedThemeOption, onChangeBG: this.onChangeBG,
                onChangeUI: this.onChangeUI, onChangeTC: this.onChangeTC, isCustomTheme: this.state.isCustomTheme,
                setCustomTheme: this.setCustomTheme, isCustomThemeTC: this.state.isCustomThemeTC,
                isCustomThemeUI: this.state.isCustomThemeUI, isCustomThemeBG: this.state.isCustomThemeBG
            }}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeContextProvider;