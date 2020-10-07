import React from "react";
import PropTypes from "prop-types";

import { ButtonStyled } from "./styles";

const Button = ({ children, handleOnClick, outline }) => {
  return (
    <ButtonStyled onClick={handleOnClick} outline={outline}>
      {children}
    </ButtonStyled>
  );
};
Button.defaultProps = {
  outline: false,
};
Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  handleOnClick: PropTypes.func.isRequired,
  outline: PropTypes.bool,
};

export default Button;
