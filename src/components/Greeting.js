import React, { Component } from 'react';
import '../styles/Greeting.css'

const Greeting = () => {
  return (
    <div className="greeting">
      <p>✨cute furry thing✨</p>
      <p>10</p>
      <button className="increase-score">+1</button>
    </div>
  )
}

export default Greeting;
