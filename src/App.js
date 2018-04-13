import React, { Component } from 'react';
import './App.css';
import Crosshairs from './Crosshairs'
import Canvas from './Canvas'

class App extends Component {
  state = {
    showCrossHairs: false,
    x: 0,
    y: 0,
  }

  handleButtonClick = () => {
    this.setState({ showCrossHairs: !this.state.showCrossHairs })
  }

  handlePositionChange = (coords) => {
    this.setState({ x: coords.x, y: coords.y })
  }

  render() {
    const imageSource = "https://s3.envato.com/files/72225897/target.jpg"
    const { x, y } = this.state
    return (
      <div className="App">
        <button onClick={this.handleButtonClick}>crosshairs</button>
        {
          this.state.showCrossHairs &&
            <Crosshairs
              imageSource={imageSource}
              onPositionChange={this.handlePositionChange}
              x={x}
              y={y}
            />
        }
        {
          !this.state.showCrossHairs &&
            <Canvas
              imageSource={imageSource}
              x={x}
              y={y}
            />
        }
      </div>
    );
  }
}

export default App
