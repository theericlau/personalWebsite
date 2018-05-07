import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar';


class Photography extends Component {
  componentDidMount() {
    document.title = 'Eric Lau — Photography';
  }

  render() {
    return (
      <div className="component-header">
        <NavBar />
        Photography
      </div>
    );
  }
}

Photography.propTypes = {

};

export default Photography;