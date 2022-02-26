import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { btnName, btnValue, onClick, children, btnDisabled } = this.props;
    return (
      <button name={ btnName } type="button" value={ btnValue } onClick={ onClick } disabled={ !btnDisabled }>{ children }</button>
    );
  }
}

Button.defaultProps = {
  btnName: '',
  btnValue: '',
  btnDisabled: true,
}

Button.propTypes = {
  btnName: PropTypes.string,
  btnValue: PropTypes.string,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  btnDisabled: PropTypes.bool,
}

export default Button;