import React from 'react';

class Button extends React.Component {
  render() {
    const { btnText, handleClick } = this.props;
    return (
      <button type="button" onClick={ handleClick } >{ btnText }</button>
    );
  }
}

export default Button;