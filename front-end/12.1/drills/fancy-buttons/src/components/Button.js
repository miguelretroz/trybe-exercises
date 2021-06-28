import React, { Component } from 'react';

class Button extends Component {
  constructor() {
    super();
    this.state = {
      clicks: 0,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state, _props) => ({
      clicks: state.clicks + 1,
    }));
  }

  render() {
    return <button type="button" onClick={ this.handleClick } >{ this.state.clicks }</button>;
  }
}

export default Button;