import React, { Component } from 'react';
import '../App.css';
import Home from './Home';
import App from '../App';
import Account from './Account';
import Cities from './Cities';
import MyComponent from './MyComponent';
import home from '../svg/home.svg';
import cog1 from '../svg/cog1.svg';
import account from '../svg/account.svg';
import edit from '../svg/edit.svg';
import goal from '../svg/goal.svg';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from './Footer';

class Navigation extends Component {
    render() {
        return (
            <div>
                <div className="" onClick={this.getSVG} id="svgDiv" style={{ padding: '5px', backgroundColor: '#b9e8ee', display: 'flex', justifyContent: 'center' }}>
                    <a href="/" rel="noopener noreferrer" id="svg1" style={{ padding: '5px' }}> <img id="home" src={home} className="Svg-alt-logo" alt="logo" /></a>
                    <a href="/App" rel="noopener noreferrer" id="svg2" style={{ padding: '5px' }}><img id="cog1" src={cog1} className="Svg-logo" alt="logo" /></a>
                    <a href="/Account" rel="noopener noreferrer" id="svg3" style={{ padding: '5px' }}><img id="account" src={account} className="Svg-alt-logo" alt="logo" /></a>
                    <a href="/Cities" rel="noopener noreferrer" id="svg4" style={{ padding: '5px' }}><img id="edit" src={edit} className="Svg-logo" alt="logo" /></a>
                    <a href="/MyComponent" rel="noopener noreferrer" id="svg5" style={{ padding: '5px' }}><img id="goal" src={goal} className="Svg-alt-logo" alt="logo" /></a>
                </div>
                <div>
                    <BrowserRouter>
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/App" exact component={App} />
                            <Route path="/Account" exact component={Account} />
                            <Route path="/Cities" exact component={Cities} />
                            <Route path="/MyComponent" exact component={MyComponent} />
                        </Switch>
                    </BrowserRouter>
                </div>
                <div><Footer /></div>
            </div>
        );
    }
}

export default Navigation;