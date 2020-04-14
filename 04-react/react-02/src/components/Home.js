import React from 'react';
import logo from '../logo.svg';
import '../App.css';

// import { Game } from './components/Game';



class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            React Project Experimentation
            <p>
              Click on <code>svg files</code> to navigate to other pages.
              <ul style={{ textAlign: "left" }}>
                <li>1st icon - Home</li>
                <li>2nd icon - Tic-Tac-Toe</li>
                <li>3rd icon - Account</li>
                <li>4th icon - Cities</li>
              </ul>

            </p>
          </p>
        </header>
      </div>
    );
  }
}

export default Home;
