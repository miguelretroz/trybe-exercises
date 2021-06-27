import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component {
  render() {
    const { source, alternativeText } = this.props;
    return (
      <img src={ source } alt={ alternativeText } />
    );
  }
}

Image.defaultProps = {
  alternativeText: 'No image',
};

Image.propTypes = {
  source: PropTypes.string.isRequired,
  alternativeText: PropTypes.string.isRequired,
};

export default Image;