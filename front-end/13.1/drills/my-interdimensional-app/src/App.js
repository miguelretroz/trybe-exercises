import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: [],
    }
  }

  fetchCharacters = () => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        this.setState({ characters: data.results });
      })
  }

  render() {
    return (
      <div>
        <h1>
          Ricky and Morty Characters:
        </h1>
      </div>
    );
  }
}

export default App;
