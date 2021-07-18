import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      haveErrors: false,
    };
  }

  handleChange(e) {
    console.log(e.target.value);
    const { onChange } = this.props;
    const { target: { value, name } } = e;
    this.setState({
      haveErrors: value !== 'miguel',
    }, () => {
      console.log(value);
      onChange({ target: {
        value,
        name,
      } }, this.state);
    });
  }

  render() {
    const { type, id, name, value, children } = this.props;
    return (
      <label htmlFor={ id }>
        { children }
        <input
          type={ type }
          id={ id }
          name={ name }
          value={ value }
          onChange={ this.handleChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
