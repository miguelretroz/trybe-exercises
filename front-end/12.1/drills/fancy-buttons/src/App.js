import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      btn01: 0,
      btn02: 0,
      btn03: 0,
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(state) {
    this.setState((currentState, _props) => ({
      [state]: currentState[state] + 1,
    }));
  }
  render() {
    return (
      <div className="App">
        <button type="button" onClick={ () => this.handleClick('btn01') }>{ this.state.btn01 }</button>
        <button type="button" onClick={ () => this.handleClick('btn02') }>{ this.state.btn02 }</button>
        <button type="button" onClick={ () => this.handleClick('btn03') }>{ this.state.btn03 }</button>
      </div>
    );
  }
}

export default App;
