import React, { Component } from 'react';
import FurFriend from './FurFriend';
import logo from '../logo.svg';
import '../styles/App.css';

const App = () => {
  return (
    <div className="list-of-names">
      <h1 className="title">Well hello...</h1>
      <FurFriend />
      <FurFriend />
      <FurFriend />
    </div>
  )
}

export default App;
