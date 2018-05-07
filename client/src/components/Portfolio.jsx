import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar';


class Portfolio extends Component {
  componentDidMount() {
    document.title = 'Eric Lau — Portfolio';
  }

  render() {
    return (
      <div className="component-header">
        <NavBar />
        Portfolio
      </div>
    );
  }
}

Portfolio.propTypes = {

};

export default Portfolio;
