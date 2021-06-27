import React, { Component } from 'react';
import './App.css';

function handleClick() {
  console.log('Clicou no primeiro botão!');
}

function handleClick02() {
  console.log('Clicou no sugundo botão!');
}

function handleClick03() {
  console.log('Clicou no terçeiro botão!');
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <button type="button" onClick={ handleClick }>1° Botão</button>
        <button type="button" onClick={ handleClick02 }>2° Botão</button>
        <button type="button" onClick={ handleClick03 }>3° Botão</button>
      </div>
    );
  }
}

export default App;
