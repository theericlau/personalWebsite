import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar';


class About extends Component {
  componentDidMount() {
    document.title = 'Eric Lau — About';
  }

  render() {
    return (
      <div className="component-header wipe">
        <NavBar />
        About
      </div>
    );
  }
}

About.propTypes = {

};

export default About;