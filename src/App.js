import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';

class App extends Component {
  render() {
    const mother_style = {
      border: '1px solid black'
    }
    return (
      <>
        <div style= {mother_style} >mother div</div>
        <Routes />
      </>
    )
  }
}

export default App;
