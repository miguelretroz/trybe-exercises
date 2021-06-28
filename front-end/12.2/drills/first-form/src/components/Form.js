import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      abstract: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({
      abstract: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Escolha uma opção
            <select>
              <option value='Opção-01'>Opção 01</option>
              <option value='Opção-02'>Opção 02</option>
              <option value='Opção-03'>Opção 03</option>
            </select>
          </label>

          <label>
            Login
            <input type='text' />
          </label>

          <label>
            Password
            <input type='password' />
          </label>

          <label>
            Resumo
            <textarea value={ this.state.abstract } onChange={ this.handleChange } />
          </label>
        </form>
      </div>
    );
  };
}

export default Form;