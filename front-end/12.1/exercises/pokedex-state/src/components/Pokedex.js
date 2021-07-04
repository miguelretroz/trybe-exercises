import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor() {
        super();
        this.state = {
            pkmIndex: 0,
        }
    }
    render() {
        const { pokemons } = this.props;
        const { pkmIndex } = this.state;
        return (
            <div className="pokedex">
                <Pokemon key={pokemons[pkmIndex].id} pokemon={pokemons[pkmIndex]} />
            </div>
        );
    }
}

export default Pokedex;