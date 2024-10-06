import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from '../../StyledButton.jsx';
import miImagen from '../../assets/imagen4.jpg';

const Button = ({ text, onClick, className, bgButtonColor, textColor }) => {
  return (
    <StyledButton
      className={className}
      bgButtonColor={bgButtonColor}
      onClick={onClick}
      textColor={textColor}
    >
      <img src={miImagen} alt="Descripción de la imagen" style={{ width: '50px', height: '50px' }} />
      {text}
    </StyledButton>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  bgButtonColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Button;
