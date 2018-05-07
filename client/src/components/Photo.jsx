import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Photo extends Component {
  render() {
    return (
      <div className="photo">
        {this.props.photo}
      </div>
    );
  }
}

Photo.propTypes = {

};

export default Photo;