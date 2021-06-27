import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';

class Pokedex extends Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div>
        { pokemons.map(pokemon => <Pokemon key={ pokemon.id } infos={ pokemon } />) }
      </div>
    );
  };
}

Pokedex.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired,
    }).isRequired,
    image: PropTypes.string.isRequired,
    moreInfo: PropTypes.string,
  })).isRequired,
}

export default Pokedex;