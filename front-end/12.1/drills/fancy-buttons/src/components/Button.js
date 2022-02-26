import React, { Component } from 'react';

class Button extends Component {
  constructor() {
    super();
    this.state = {
      clicks: 0,
      color: 'green',
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state, _props) => {
      let color = '';
      if ((this.state.clicks % 2) === 0) {
        color = 'red';
      } else {
        color = 'green';
      }
      console.log(color);
      return {
        clicks: state.clicks + 1,
        color: color,
      }
    });
  }

  render() {
    return <button style={{ backgroundColor: this.state.color }}type="button" onClick={ this.handleClick } >{ this.state.clicks }</button>;
  }
}

export default Button;