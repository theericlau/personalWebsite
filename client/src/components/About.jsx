import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';


class About extends Component {
  componentDidMount() {
    document.title = 'Eric Lau — About';
  }

  render() {
    return (
      <div className="component-header wipe">
        <Header />
        About
      </div>
    );
  }
}

About.propTypes = {

};

export default About;