import React, { Component } from 'react';

class Home extends Component {

  componentDidMount() {
    this.props.loginRender();
  }

  render() {
    return (
      <div>
        <h2>Home</h2>
        <p> My awesome Home component </p>
      </div>
    );
  }
}

export default Home;
