import React, { Component } from 'react';
import Greeting from './Greeting';
import logo from '../logo.svg';
import '../styles/App.css';

const App = () => {
  return (
    <div className="list-of-names">
      <h1 className="title">Well hello...</h1>
      <Greeting />
      <Greeting />
      <Greeting />
    </div>
  )
}

export default App;
