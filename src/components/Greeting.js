import React, { Component } from 'react';
import '../styles/Greeting.css'

const Greeting = (props) => {
  return (
    <div className="greeting">
      <p>✨{props.name}✨</p>
      <p>10</p>
      <button className="increase-score">+1</button>
    </div>
  )
}

export default Greeting;
