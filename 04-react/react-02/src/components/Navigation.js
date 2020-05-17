import React, { Component } from 'react';
import '../App.css';
import '../Navigation.css';
import Home from './Home';
import App from '../App';
import Account from './Account/Account.js';
import Cities from './Cities/Cities.js';
import { Settings } from './Settings/Settings.js';
import LIFO_FIFO from './Queue_Stack/LIFO_FIFO.js';
import { LLComponent } from './LinkedList/LLComponent.js';
import Footer from './Footer';
import ThemeContextProvider from '../context/ThemeContext';
import NavBar from '../NavBar';



class Navigation extends Component {
    state = {
        activePage: <Home />,
        activePageId: "idHome",
        previousPage: "idHome"

    }
    handlePage = (e) => {
        let idPage = e.target.id
        document.getElementById(this.state.previousPage).className = document.getElementById(this.state.previousPage).className.replace(" iconGlow", "");
        if (idPage === "idHome") {
            this.setState({
                activePage: <Home />,
                previousPage: "idHome"

            })
            e.target.className += " iconGlow";

        }
        else if (idPage === "idTicTacToe") {
            document.getElementById(this.state.previousPage).className = document.getElementById(this.state.previousPage).className.replace(" iconGlow", "");
            this.setState({
                activePage: <App />,
                previousPage: "idTicTacToe"
            })
            e.target.className += " iconGlow";
        }
        else if (idPage === "idAccount") {
            document.getElementById(this.state.previousPage).className = document.getElementById(this.state.previousPage).className.replace(" iconGlow", "");

            this.setState({
                activePage: <Account />,
                previousPage: "idAccount"
            })
            e.target.className += " iconGlow";
        }
        else if (idPage === "idCities") {
            document.getElementById(this.state.previousPage).className = document.getElementById(this.state.previousPage).className.replace(" iconGlow", "");

            this.setState({
                activePage: <Cities />,
                previousPage: "idCities"
            })
            e.target.className += " iconGlow";
        }
        else if (idPage === "idLL") {
            document.getElementById(this.state.previousPage).className = document.getElementById(this.state.previousPage).className.replace(" iconGlow", "");

            this.setState({
                activePage: <LLComponent />,
                previousPage: "idLL"
            })
            e.target.className += " iconGlow";
        }
        else if (idPage === "idQueue_Stack") {
            document.getElementById(this.state.previousPage).className = document.getElementById(this.state.previousPage).className.replace(" iconGlow", "");

            this.setState({
                activePage: <LIFO_FIFO />,
                previousPage: "idQueue_Stack"
            })
            e.target.className += " iconGlow";
        }
        else if (idPage === "idSettings") {
            document.getElementById(this.state.previousPage).className = document.getElementById(this.state.previousPage).className.replace(" iconGlow", "");

            this.setState({
                activePage: <Settings />,
                previousPage: "idSettings"
            })
            e.target.className += " iconGlow";
        }
    }
    render() {
        return (
            <div className="home">
                <ThemeContextProvider>
                    <NavBar onClick={this.handlePage} />
                    {this.state.activePage}
                    <Footer />
                </ThemeContextProvider>
            </div>

        );

    }
}

export default Navigation;