import React from 'react';
import Pokemon from './Pokemon';
import Button from './Button';

class Pokedex extends React.Component {
    constructor() {
      super();
      this.state = {
        pkmIndex: 0,
      }

      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      const { pokemons } = this.props;
      this.setState((prevState) => {
        let { pkmIndex } = prevState;
        pkmIndex += 1;
        if (pkmIndex === pokemons.length) {
          pkmIndex = 0;
        }
        return { pkmIndex };
      })
    }

    render() {
        const { pokemons } = this.props;
        const { pkmIndex } = this.state;
        return (
            <div className="pokedex">
                <Pokemon key={pokemons[pkmIndex].id} pokemon={pokemons[pkmIndex]} />
                <Button btnText={ 'Próximo pokemon' } handleClick={ this.handleClick } />
            </div>
        );
    }
}

export default Pokedex;