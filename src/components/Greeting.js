import React, { Component } from 'react';
import '../styles/Greeting.css'

class Greeting extends Component {
  constructor() {
    super()
    this.state = {
      count: 10
    }
  }

  incrementCount() {
    this.setState({ count: this.state.count + 1})
  }

  render() {
    return (
      <div className="greeting">
        <p>✨{this.props.name}✨</p>
        <p>{this.state.count}</p>
        <button
          className="increase-score"
          onClick={() => this.incrementCount()}>
          +1
        </button>
      </div>
    )
  }
}

export default Greeting;
