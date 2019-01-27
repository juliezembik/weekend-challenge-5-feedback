import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import Mainheader from './../Mainheader/Mainheader';
import Feeling from './../Feeling/Feeling';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Mainheader />
          <Feeling />
        <br/>
      </div>
    );
  }
}

export default App;