import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { type, id, name, value, onChange } = this.props;
    return (
      <label htmlFor={ id }>
        <input
          type={ type }
          id={ id }
          name={ name }
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default Input;
