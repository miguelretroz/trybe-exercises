import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import StrictAccess from './components/StrictAccess';
import Login from './components/Login';

class App extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      login: false,
    }

    this.loginClicker = this.loginClicker.bind(this);
    this.backToHome = this.backToHome.bind(this);
  }

  loginClicker({ username, password }) {
    this.setState({
      username,
      password,
      login: true,
    });
  }

  backToHome() {
    this.setState({
      username: '',
      password: '',
      login: false,
    })
  }

  render() {
    const { username, password, login } = this.state;
    return (
      <BrowserRouter>
        <Login onClick={ this.loginClicker }/>
        { login && <Redirect to='/strict-access' /> }
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/users/1'>Users</Link>
        <Switch>
          <Route
            path='/users/:id'
            render={props => (
              <Users {...props} greetingsMessage={ 'Good Morning' } />
              )
            }
          />
          <Route
            path='/strict-access'
            render={
              (props) => (
                <StrictAccess
                  {...props}
                  username={ username }
                  password={ password }
                />
              )
            }
          />
          <Route path='/about' component={ About } />
          <Route
            exact
            path="/"
            render={
              (props) => (
                <Home {...props} loginRender={ this.backToHome } />
              )
            }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
