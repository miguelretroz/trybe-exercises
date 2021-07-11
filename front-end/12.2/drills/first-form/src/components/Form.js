import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      select: 'Opção-01',
      login: '',
      password: '',
      abstract: '',
      checkbox: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [target.name]: value,
    });
  }

  render() {
    const { select, login, password, abstract, checkbox } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="select">
            Escolha uma opção
            <select
              id="select"
              name="select"
              value={ select }
              onChange={ this.handleChange }
            >
              <option value="Opção-01">Opção 01</option>
              <option value="Opção-02">Opção 02</option>
              <option value="Opção-03">Opção 03</option>
            </select>
          </label>
          <fieldset>
            <label htmlFor="input-01">
              Login
              <input
                type="text"
                id="input-01"
                name="login"
                value={ login }
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="input-02">
              Password
              <input
                type="password"
                id="input-02"
                name="password"
                value={ password }
                onChange={ this.handleChange }
              />
            </label>
          </fieldset>
          <label htmlFor="abstract">
            Resumo
            <textarea
              id="abstract"
              value={ abstract }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="checkbox">
            <input
              type="checkbox"
              name="checkbox"
              value={ checkbox }
              onChange={ this.handleChange }
            />
            Checkbox
          </label>
          <input type="file" />
        </form>
      </div>
    );
  }
}

export default Form;
