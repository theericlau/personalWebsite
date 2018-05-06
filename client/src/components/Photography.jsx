import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';


class Photography extends Component {
  componentDidMount() {
    document.title = 'Eric Lau — Photography';
  }

  render() {
    return (
      <div className="component-header">
        <Header />
        Photography
      </div>
    );
  }
}

Photography.propTypes = {

};

export default Photography;