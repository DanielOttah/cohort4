import React from 'react';
import logo from './logo.svg';
import './App.css';
import cell from './svg/cell.svg';
import cog1 from './svg/cog1.svg';
import user from './svg/user.svg';
import edit from './svg/edit.svg';
import goal from './svg/goal.svg';
import { Game } from './components/Game';


// function App() {
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      mycomp: ''
    }

  }
  getSVG = (event) => {

    console.log(`Element clicked: ${event.target.tagName} | ${event.target.id}`);
    if (event.target.id === "svg1") {
      this.setState({ mycomp: 'First SVG file clicked!' });
    }
    else if (event.target.id === "svg2") {
      this.setState({ mycomp: 'Second SVG file clicked!' });
    }
    else if (event.target.id === "svg3") {
      this.setState({ mycomp: 'Third SVG file clicked!' });
    }
    else if (event.target.id === "svg4") {
      this.setState({ mycomp: 'Fourth SVG file clicked!' });
    }
    if (event.target.id === "svg5") {
      this.setState({ mycomp: 'Fifth SVG file clicked!' });
    }
  }
  render() {
    return (
      <div className="App">

        <div className="" onClick={this.getSVG} id="svgDiv" style={{ paddingTop: '5px', backgroundColor: '#b9e8ee', display: 'flex', justifyContent: 'center' }}>
          <a href="#" rel="noopener noreferrer" id="svg1"> <img id="cell" src={cell} className="Svg-alt-logo" alt="logo" /></a>
          <a href="#" rel="noopener noreferrer" id="svg2"><img id="cog1" src={cog1} className="Svg-logo" alt="logo" /></a>
          <a href="#" rel="noopener noreferrer" id="svg3"><img id="user" src={user} className="Svg-alt-logo" alt="logo" /></a>
          <a href="#" rel="noopener noreferrer" id="svg4"><img id="edit" src={edit} className="Svg-logo" alt="logo" /></a>
          <a href="#" rel="noopener noreferrer" id="svg5"><img id="goal" src={goal} className="Svg-alt-logo" alt="logo" /></a>
        </div>
        <div style={{ paddingTop: '5px' }}>
          <Game />
        </div>
        <header className="App-header">
          <h2> {this.state.mycomp}</h2>
          {/* <MyComponent name={this.state.mycomp} /> */}
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    );
  }
}

export default App;
