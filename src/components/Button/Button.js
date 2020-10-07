import React from "react";
import PropTypes from "prop-types";

import { ButtonStyled } from "./styles";

const Button = ({ children, handleOnClick }) => {
  return <ButtonStyled onClick={handleOnClick}>{children}</ButtonStyled>;
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  handleOnClick: PropTypes.func.isRequired,
};

export default Button;
