import React, { Component } from 'react';
import '../App.css';
import '../Navigation.css';
import Home from './Home';
import App from '../App';
import Account from './Account/Account.js';
import Cities from './Cities/Cities.js';
import React_Main_Concepts from './React_Main_Concepts';
import optimised_Home from '../svg/optimised_Home.svg';
import cog1 from '../svg/cog1.svg';
import account from '../svg/account.svg';
import edit from '../svg/edit.svg';
import goal from '../svg/goal.svg';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from './Footer';


class Navigation extends Component {
    render() {
        return (
            <div className="home">
                <div className="" id="svgDiv" style={{ backgroundColor: '#b9e8ee', display: 'flex', justifyContent: 'center' }}>
                    <a href="/" rel="noopener noreferrer" id="svg1" >
                        <img className="Svg-alt-logo" id="home" src={optimised_Home} alt="logo" /></a>
                    <a href="/App" rel="noopener noreferrer" id="svg2" >
                        <img className="Svg-logo" id="cog1" src={cog1} alt="logo" /></a>
                    <a href="/Account" rel="noopener noreferrer" id="svg3">
                        <img className="Svg-alt-logo" id="account" src={account} alt="logo" /></a>
                    <a href="/Cities" rel="noopener noreferrer" id="svg4" >
                        <img className="Svg-logo" id="edit" src={edit} alt="logo" /></a>
                    <a href="/React_Main_Concepts" rel="noopener noreferrer" id="svg5">
                        <img className="Svg-alt-logo" id="goal" src={goal} alt="logo" /></a>
                </div>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact active component={Home} />
                        <Route path="/App" exact component={App} />
                        <Route path="/Account" exact component={Account} />
                        <Route path="/Cities" exact component={Cities} />
                        <Route path="/React_Main_Concepts" exact component={React_Main_Concepts} />
                    </Switch>
                </BrowserRouter>
                <Footer />
            </div>

        );

    }
}

export default Navigation;