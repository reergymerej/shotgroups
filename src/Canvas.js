import React, { Component } from 'react';
import './App.css';

const MARK_WIDTH = 30
const Mark = (props) => (
  <div className="Mark"
    style={{
      left: `${props.x - (MARK_WIDTH / 2)}px`,
      top: `${props.y}px`,
    }}
  />
)

class Canvas extends Component {
  state = {
    marks: [],
  }

  handleClick = (event) => {
    const {
      pageX,
      pageY,
      target: {
        offsetTop,
        offsetLeft,
      },
    } = event
    const x = pageX - offsetLeft
    const y = pageY - offsetTop
    const { marks } = this.state
    this.setState({
      marks: [
        ...marks,
        { x, y }
      ],
    })
  }

  render() {
    const { imageSource, x, y } = this.props
    const style = {
      backgroundImage: `url(${imageSource})`,
      backgroundPositionX: `${x}px`,
      backgroundPositionY: `${y}px`,
    }

    const { marks } = this.state

    return (
      <div
        className="Canvas"
        style={style}
        onClick={this.handleClick}
      >
        { marks.map((mark, i) => (
          <Mark key={i} x={mark.x} y={mark.y} />
        ))
        }
      </div>
    )
  }
}

export default Canvas
