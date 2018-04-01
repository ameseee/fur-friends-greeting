import React, { Component } from 'react';
import Greeting from './Greeting';
import logo from '../logo.svg';
import '../styles/App.css';

const App = () => {
  return (
    <div className="list-of-names">
      <h1 className="title">Well hello...</h1>
      <Greeting name="Shih-Tzu"/>
      <Greeting name="Shar-Pei"/>
      <Greeting name="Hedgie"/>
    </div>
  )
}

export default App;
