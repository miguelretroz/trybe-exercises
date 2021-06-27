import React, { Component } from 'react';
import Image from './Image';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight } = this.props.infos;
    return (
      <div>
        <Image />
        <p>{ name }</p>
        <p>{ type }</p>
        <p>Average weight: { averageWeight.value }  { averageWeight.measurementUnit }</p>
      </div>
    );
  }
}

export default Pokemon;