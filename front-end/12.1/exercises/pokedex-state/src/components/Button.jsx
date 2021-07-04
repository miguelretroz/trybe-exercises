import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { btnName, btnValue, onClick, children } = this.props;
    return (
      <button name={ btnName } type="button" value={ btnValue } onClick={ onClick } >{ children }</button>
    );
  }
}

Button.defaultProps = {
  btnName: '',
  btnValue: '',
}

Button.propTypes = {
  btnName: PropTypes.string,
  btnValue: PropTypes.string,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Button;