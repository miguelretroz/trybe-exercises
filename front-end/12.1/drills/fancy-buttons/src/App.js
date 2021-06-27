import React, { Component } from 'react';
import './App.css';

function handleClick() {
  console.log('Clicou no primeiro botão!');
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <button type="button" onClick={ handleClick }>1° Botão</button>
      </div>
    );
  }
}

export default App;
