import React, { Component } from 'react';
import './App.css';

const Row = () => (
  <div className="row">
    <div className="cell" />
    <div className="cell" />
  </div>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src="https://s3.envato.com/files/72225897/target.jpg" />
        <div className="crosshairs">
          <Row />
          <Row />
        </div>
      </div>
    );
  }
}

export default App;
