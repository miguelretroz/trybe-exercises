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
    const { abstract } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="select">
            Escolha uma opção
            <select id="select">
              <option value="Opção-01">Opção 01</option>
              <option value="Opção-02">Opção 02</option>
              <option value="Opção-03">Opção 03</option>
            </select>
          </label>

          <label htmlFor="input-01">
            Login
            <input
              type="text"
              id="input-01"
            />
          </label>

          <label htmlFor="input-02">
            Password
            <input
              type="password"
              id="input-02"
            />
          </label>

          <label htmlFor="abstract">
            Resumo
            <textarea
              id="abstract"
              value={ abstract }
              onChange={ this.handleChange }
            />
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
