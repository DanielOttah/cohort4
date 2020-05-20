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
        //Trial=======================
        let displayPage1 = document.getElementById("idCompHome");
        let displayPage2 = document.getElementById("idCompTTT");
        let displayPage3 = document.getElementById("idCompAccount");
        let displayPage4 = document.getElementById("idCompCities");
        let displayPage5 = document.getElementById("idCompLL");
        let displayPage6 = document.getElementById("idCompQS");
        let displayPage7 = document.getElementById("idCompSettings");
        //Trial======================= 

        if (idPage === "idHome") {
            //Trial=======================  
            if (displayPage1.style.display === "none") {
                displayPage1.style.display = "block"
                displayPage2.style.display = "none"
                displayPage3.style.display = "none"
                displayPage4.style.display = "none"
                displayPage5.style.display = "none"
                displayPage6.style.display = "none"
                displayPage7.style.display = "none"
            }
            //Trial=======================
            this.setState({
                // activePage: <Home />,
                previousPage: "idHome"
            })
            e.target.className += " iconGlow";

        }
        else if (idPage === "idTicTacToe") {
            document.getElementById(this.state.previousPage).className = document.getElementById(this.state.previousPage).className.replace(" iconGlow", "");
            //Trial=======================  
            if (displayPage2.style.display === "none") {
                displayPage2.style.display = "block"
                displayPage1.style.display = "none"
                displayPage3.style.display = "none"
                displayPage4.style.display = "none"
                displayPage5.style.display = "none"
                displayPage6.style.display = "none"
                displayPage7.style.display = "none"
            }
            //Trial=======================
            this.setState({
                // activePage: <App />,
                previousPage: "idTicTacToe"
            })
            e.target.className += " iconGlow";
        }
        else if (idPage === "idAccount") {
            document.getElementById(this.state.previousPage).className = document.getElementById(this.state.previousPage).className.replace(" iconGlow", "");
            //Trial=======================
            if (displayPage3.style.display === "none") {
                displayPage3.style.display = "block"
                displayPage2.style.display = "none"
                displayPage1.style.display = "none"
                displayPage4.style.display = "none"
                displayPage5.style.display = "none"
                displayPage6.style.display = "none"
                displayPage7.style.display = "none"
            }
            //Trial=======================
            this.setState({
                // activePage: <Account />,
                previousPage: "idAccount"
            })
            e.target.className += " iconGlow";
        }
        else if (idPage === "idCities") {
            document.getElementById(this.state.previousPage).className = document.getElementById(this.state.previousPage).className.replace(" iconGlow", "");
            //Trial=======================            
            if (displayPage4.style.display === "none") {
                displayPage4.style.display = "block"
                displayPage2.style.display = "none"
                displayPage3.style.display = "none"
                displayPage1.style.display = "none"
                displayPage5.style.display = "none"
                displayPage6.style.display = "none"
                displayPage7.style.display = "none"
            }
            //Trial=======================
            this.setState({
                // activePage: <Cities />,
                previousPage: "idCities"
            })
            e.target.className += " iconGlow";
        }
        else if (idPage === "idLL") {
            document.getElementById(this.state.previousPage).className = document.getElementById(this.state.previousPage).className.replace(" iconGlow", "");
            //Trial=======================
            if (displayPage5.style.display === "none") {
                displayPage5.style.display = "block"
                displayPage2.style.display = "none"
                displayPage3.style.display = "none"
                displayPage4.style.display = "none"
                displayPage1.style.display = "none"
                displayPage6.style.display = "none"
                displayPage7.style.display = "none"
            }
            //Trial=======================
            this.setState({
                // activePage: <LLComponent />,
                previousPage: "idLL"
            })
            e.target.className += " iconGlow";
        }
        else if (idPage === "idQueue_Stack") {
            document.getElementById(this.state.previousPage).className = document.getElementById(this.state.previousPage).className.replace(" iconGlow", "");
            //Trial=======================
            if (displayPage6.style.display === "none") {
                displayPage6.style.display = "block"
                displayPage2.style.display = "none"
                displayPage3.style.display = "none"
                displayPage4.style.display = "none"
                displayPage5.style.display = "none"
                displayPage1.style.display = "none"
                displayPage7.style.display = "none"
            }
            //Trial=======================
            this.setState({
                // activePage: <LIFO_FIFO />,
                previousPage: "idQueue_Stack"
            })
            e.target.className += " iconGlow";
        }
        else if (idPage === "idSettings") {
            document.getElementById(this.state.previousPage).className = document.getElementById(this.state.previousPage).className.replace(" iconGlow", "");
            //Trial=======================
            if (displayPage7.style.display === "none") {
                displayPage7.style.display = "block"
                displayPage2.style.display = "none"
                displayPage3.style.display = "none"
                displayPage4.style.display = "none"
                displayPage5.style.display = "none"
                displayPage6.style.display = "none"
                displayPage1.style.display = "none"
            }
            //Trial=======================
            this.setState({
                // activePage: <Settings />,
                previousPage: "idSettings"
            })
            e.target.className += " iconGlow";
        }
    }
    // render() {
    //     return (
    //         <div className="home">
    //             <ThemeContextProvider>
    //                 <NavBar onClick={this.handlePage} />
    //                 {this.state.activePage}
    //                 <Footer />
    //             </ThemeContextProvider>
    //         </div>

    //     );

    // }
    render() {
        return (
            <div className="home">
                <ThemeContextProvider>
                    <NavBar onClick={this.handlePage} />
                    <div id="idCompHome" style={{ display: "block" }}>
                        <Home />
                    </div>
                    <div id="idCompTTT" style={{ display: "none" }}>
                        <App />
                    </div>
                    <div id="idCompAccount" style={{ display: "none" }}>
                        <Account />
                    </div>
                    <div id="idCompCities" style={{ display: "none" }}>
                        <Cities />
                    </div>
                    <div id="idCompLL" style={{ display: "none" }}>
                        <LLComponent />
                    </div>
                    <div id="idCompQS" style={{ display: "none" }}>
                        <LIFO_FIFO />
                    </div>
                    <div id="idCompSettings" style={{ display: "none" }}>
                        <Settings />
                    </div>

                    <Footer />
                </ThemeContextProvider>
            </div>

        );

    }
}

export default Navigation;