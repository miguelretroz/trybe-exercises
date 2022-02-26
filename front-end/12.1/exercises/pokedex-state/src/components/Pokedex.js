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
        allTypes: prop.pokemons.map((pokemon) => pokemon.type)
          .filter((type, index, everyTypes) => everyTypes.indexOf(type) === index),
      }

      this.handleClick = this.handleClick.bind(this);
      this.setType = this.setType.bind(this);
      this.getWithType = this.getWithType.bind(this);
      this.resetPokemons = this.resetPokemons.bind(this);
      this.nextIsEnabled = this.nextIsEnabled.bind(this);
    }

    handleClick({ target }) {
      const { name } = target;
      const { pokemons } = this.state;
      this.setState((prevState) => {
        if (name === 'resetPokemons') return (this.resetPokemons());
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
      const { pokemons } = this.props;
      const pokemonsFiltered = pokemons.filter((pokemon) => pokemon.type === type);
      return pokemonsFiltered;
    }

    resetPokemons() {
      const { pokemons } = this.props;
      return {
        pkmIndex: 0,
        pokemons
      };
    }

    nextIsEnabled() {
      const { pokemons } = this.state;
      return (pokemons.length === 1) ? false : true;
    }

    render() {
        const { pkmIndex, pokemons, allTypes } = this.state;
        const pkmSelected = pokemons[pkmIndex];
        return (
          <div className="pokedex">
              <Pokemon key={pkmSelected.id} pokemon={pkmSelected} />
              <Button btnName={ 'resetPokemons' } onClick={ this.handleClick } >All</Button>
              {
                allTypes.map((type) =>
                  <Button
                    key={ type }
                    btnName={ 'pkmType' }
                    btnValue={ type }
                    onClick={ this.setType }
                  >
                    { type }
                  </Button>)
              }
              <Button btnName={ 'nextPokemon' } onClick={ this.handleClick } btnDisabled={ this.nextIsEnabled() } >Próximo pokemon</Button>
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