import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  c = 10
  render() {
    return (
      <div>
        This is react class based Component 
        value of c = {this.c}
      </div>
    )
  }
}

