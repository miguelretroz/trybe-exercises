import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    })
  }

  handleClick() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      username: '',
      password: '',
    })
  }

  render() {
    const { username, password } = this.state;
    return (
      <form>
        <label htmlFor='username'>
          Username
          <input
            type='text'
            name='username'
            id='username'
            value={ username }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor='password'>
          Password
          <input
            type='password'
            name='password'
            id='password'
            value={ password }
            onChange={ this.handleChange }
          />
        </label>
        <button type='button' onClick={ this.handleClick }>
          Login
        </button>
      </form>
    );
  }
}

export default Login;
