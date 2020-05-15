import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    constructor(props) {
        super(props)
        this.none = {
            isLightTheme: true,
            light: { textColor: "", ui: "", bg: "" },
            dark: { textColor: "", ui: "", bg: "" }
        }
        this.state = {
            isLightTheme: true,
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
            whichTheme: this.none
        }

    }
    selectTheme = (e) => {
        const selectedTheme = e.target.value;
        const themeId = document.getElementById("themeId");

        if (selectedTheme === "None") {
            themeId.disabled = true;
            this.setState({
                whichTheme: this.none
            })
        } else if (selectedTheme === "blue") {
            themeId.disabled = false;
            this.setState({
                whichTheme: this.state.blue
            })

        } else if (selectedTheme === "gray") {
            themeId.disabled = false;
            this.setState({
                whichTheme: this.state.gray
            })
        } else if (selectedTheme === "green") {
            themeId.disabled = false;
            this.setState({
                whichTheme: this.state.green
            })
        } else if (selectedTheme === "brown") {
            themeId.disabled = false;
            this.setState({
                whichTheme: this.state.brown
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
    render() {
        return (
            <ThemeContext.Provider value={{
                ...this.state.whichTheme, isLightTheme: this.state.isLightTheme,
                toggleLight_Dark: this.toggleLight_Dark, selectTheme: this.selectTheme
            }}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeContextProvider;