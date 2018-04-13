import React, { Component } from 'react';
import './App.css';

const Row = () => (
  <div className="row">
    <div className="cell" />
    <div className="cell" />
  </div>
)

class Crosshairs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      x: this.props.x || 0,
      y: this.props.y || 0,
    }
  }

  handleMouseDown = (event) => {
    this.setState({ dragging: true })
  }

  handleMouseUp = (event) => {
    this.x = undefined
    this.setState({ dragging: false })
    this.props.onPositionChange({
      x: this.state.x,
      y: this.state.y
    })
  }

  handleMouseMove = (event) => {
    if (this.state.dragging) {
      if (this.x !== undefined) {
        const mx = event.pageX - this.x
        const my = event.pageY - this.y
        this.setState({
          x: this.state.x + mx,
          y: this.state.y + my,
        })
      }
      this.x = event.pageX
      this.y = event.pageY
    }
  }

  render() {
    const { imageSource } = this.props
    const style = {
      backgroundImage: `url(${imageSource})`,
      backgroundPositionX: `${this.state.x}px`,
      backgroundPositionY: `${this.state.y}px`,
    }
    return (
      <div
        className="Crosshairs"
        style={style}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        onMouseMove={this.handleMouseMove}
      >
        <Row />
        <Row />
      </div>
    )
  }
}


export default Crosshairs
