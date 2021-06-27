import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import './Pokemon.css';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props.infos;
    return (
      <div className="pokemon-card">
        <Image source={ image } alternativeText={ name } />
        <p>{ name }</p>
        <p>{ type }</p>
        <p>Average weight: { averageWeight.value }  { averageWeight.measurementUnit }</p>
      </div>
    );
  };
}

Pokemon.propTypes = {
  infos: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired,
    }).isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Pokemon;