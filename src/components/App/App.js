import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import Mainheader from './../Mainheader/Mainheader';
import { HashRouter as Router, Route } from 'react-router-dom';
import Feeling from './../Feeling/Feeling';
import Support from './../Support/Support';
import Understanding from './../Understanding/Understanding';
import Review from './../Review/Review';
import Startpage from './../Startpage/Startpage';
import Comments from './../Comments/Comments';
import Thanks from './../Thanks/Thanks';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Mainheader />
        <br/>
      <Router>
        <div>
          <Route exact path="/" component={Startpage} />
          <Route exact path="/feeling" component={Feeling} />
          <Route exact path="/understanding" component={Understanding} />
          <Route exact path="/support" component={Support} />
          <Route exact path="/comments" component={Comments} />
          <Route exact path="/review" component={Review} />
          <Route exact path="/thanks" component={Thanks} />
        </div>
      </Router>
      </div>
    );
  }
}

export default App;