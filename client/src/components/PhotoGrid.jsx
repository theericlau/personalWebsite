import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PhotoGrid extends Component {
  render() {
    return (
      <div className="photo-grid">
        {this.props.photos.map((post, index) => <Photo key={index} {...this.props} index={index} post={post} />)}
      </div>
    );
  }
}

PhotoGrid.propTypes = {

};

export default PhotoGrid;