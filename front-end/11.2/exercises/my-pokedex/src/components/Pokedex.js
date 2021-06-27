import React, { Component } from 'react';
import Pokemon from './Pokemon';

class Pokedex extends Component {
  render() {
    const { pokemons } = this.props;
    return (
      { pokemons.map(pokemon => <Pokemon infos={ pokemon } />) }
    );
  };
}

export default Pokedex;