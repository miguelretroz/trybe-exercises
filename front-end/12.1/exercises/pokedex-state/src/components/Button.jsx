import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { btnName, btnValue, btnText, onClick } = this.props;
    return (
      <button name={ btnName } type="button" value={ btnValue } onClick={ onClick } >{ btnText }</button>
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
  btnText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Button;