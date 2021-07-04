import React from 'react';
import PropTypes from 'prop-types';

import Pokemon from './Pokemon';
import Button from './Button';

class Pokedex extends React.Component {
    constructor(prop) {
      super(prop);
      this.state = {
        pkmIndex: 0,
        pkmType: '',
        pokemons: prop.pokemons,
      }

      this.handleClick = this.handleClick.bind(this);
      this.setType = this.setType.bind(this);
      this.getWithType = this.getWithType.bind(this);
    }

    handleClick() {
      const { pokemons } = this.state;
      this.setState((prevState) => {
        let { pkmIndex } = prevState;
        pkmIndex += 1;
        if (pkmIndex === pokemons.length) {
          pkmIndex = 0;
        }
        return {
          pkmIndex,
        };
      })
    }

    setType({ target }) {
      const { name, value } = target;
      this.setState({ 
        [name]: value,
        pkmIndex: 0,
        pokemons: (this.getWithType(value)), 
      });
    }

    getWithType(type) {
      const { pokemons } = this.state;
      const pokemonsFiltered = pokemons.filter((pokemon) => pokemon.type === type);
      return pokemonsFiltered;
    }

    render() {
        const { pkmIndex, pokemons } = this.state;
        return (
            <div className="pokedex">
                <Pokemon key={pokemons[pkmIndex].id} pokemon={pokemons[pkmIndex]} />
                <Button btnName={ 'pkmType' } btnValue={ 'Fire' } btnText={ 'Fire' } onClick={ this.setType } />
                <Button btnName={ 'nextPokemon' } btnText={ 'Próximo pokemon' } onClick={ this.handleClick } />
            </div>
        );
    }
}

Pokedex.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
        value: PropTypes.string.isRequired,
        measurementUnit: PropTypes.string.isRequired,
    }).isRequired,
    image: PropTypes.string.isRequired,
    moreInfo: PropTypes.string.isRequired,
  })).isRequired,
}

export default Pokedex;