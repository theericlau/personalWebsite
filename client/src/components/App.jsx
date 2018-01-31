import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './Header';
import Home from './Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Eric',
    };
  }
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Home />
        </div>
      </Router>
    );
  }
}

export default App;
