import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log(this);
    console.log('Clicou no primeiro botão!');
  }
  render() {
    return (
      <div className="App">
        <button type="button" onClick={ this.handleClick }>1° Botão</button>
      </div>
    );
  }
}

export default App;
