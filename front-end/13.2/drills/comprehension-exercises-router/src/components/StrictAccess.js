import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class StrictAccess extends Component {
  userChecker() {
    const { username, password } = this.props;
    if ((username === 'joao') && (password === '1234')) {
      return <p>Welcome {username}</p>
    }
    return <Redirect to="/" />
  }

  render() {
    return (
      <div>
        { this.userChecker() }
      </div>
    );
  }
}

export default StrictAccess;