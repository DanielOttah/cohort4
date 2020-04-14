import React from 'react';
import './App.css';
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
        {/* <h2> {this.state.mycomp}</h2> */}
        <div style={{ paddingTop: '5px' }}>
          <Game />
        </div>
      </div>
    );
  }
}

export default App;
