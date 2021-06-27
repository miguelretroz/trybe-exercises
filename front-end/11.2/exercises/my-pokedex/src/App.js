import React, { Component } from 'react';
import './App.css';
import data from './data';
import Pokedex from './components/Pokedex';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Pokedex</h1>
        <Pokedex pokemons={ data } />
      </div>
    );
  }
}

export default App;
