import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyOddComp from './components/OddComponent';
import MyEvenComp from './components/EvenComponent';
import MyComp from './components/myComponent';

// function App() {
class App extends React.Component {
  constructor() {
    super();
    this.counter = 21;
    this.state = {
      myState: "TBD",
      myHeader: <MyComp />
    }
  }

  onPushMe = () => {
    console.log("You pushed me!");
    ++this.counter;
    this.setState({ myState: `now: ${this.counter}` });

    ((this.counter % 2) > 0) ? this.setState({ myHeader: <MyOddComp /> }) : this.setState({ myHeader: <MyEvenComp /> });



  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.state.myHeader}
          <h1>I am in control of this app and I am Daniel - {this.state.myState}!</h1>
          <button onClick={this.onPushMe}>Push Me</button>
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
