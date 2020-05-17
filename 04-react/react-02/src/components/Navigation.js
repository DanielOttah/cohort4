import React, { Component } from 'react';
import '../App.css';
import '../Navigation.css';
import Home from './Home';
import App from '../App';
import Account from './Account/Account.js';
import Cities from './Cities/Cities.js';
import { Settings } from './Settings/Settings.js';
import LIFO_FIFO from './Queue_Stack/LIFO_FIFO.js';
// import { LinkedListComponent } from './LinkedList/LinkedListComponent.js';
import { LLComponent } from './LinkedList/LLComponent.js';
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from './Footer';
import ThemeContextProvider from '../context/ThemeContext';
import NavBar from '../NavBar';



class Navigation extends Component {
    state = {
        activePage: <Home />,
        activePageId: "idHome"

    }
    handlePage = (e) => {
        let idPage = e.target.id
        if (idPage === "idHome") {
            this.setState({
                activePage: <Home />
            })
        }
        else if (idPage === "idTicTacToe") {
            this.setState({
                activePage: <App />
            })
        }
        else if (idPage === "idAccount") {
            this.setState({
                activePage: <Account />
            })
        }
        else if (idPage === "idCities") {
            this.setState({
                activePage: <Cities />
            })
        }
        else if (idPage === "idLL") {
            this.setState({
                activePage: <LLComponent />
                // activePage: <LinkedListComponent />
            })
        }
        else if (idPage === "idQueue_Stack") {
            this.setState({
                activePage: <LIFO_FIFO />
            })
        }
        else if (idPage === "idSettings") {
            this.setState({
                activePage: <Settings />
            })
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