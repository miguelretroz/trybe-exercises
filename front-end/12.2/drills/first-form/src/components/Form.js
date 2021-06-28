import React, { Component } from 'react';

class Form extends Component {
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
            <textarea />
          </label>
        </form>
      </div>
    );
  };
}

export default Form;