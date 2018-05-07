import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';

class PhotoGrid extends Component {
  render() {
    return (
      <div className="photo-grid">
        {this.props.photos.map((photo, index) => <Photo key={index} photo={photo} />)}
      </div>
    );
  }
}

PhotoGrid.propTypes = {

};

export default PhotoGrid;