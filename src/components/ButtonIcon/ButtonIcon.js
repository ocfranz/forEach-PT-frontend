import React from "react";
import PropTypes from "prop-types";

import {ButtonIconStyled} from "./styles";
import AddIcon from "./icons/AddIcon";

const ButtonIcon = ({ iconName, handleOnClick }) => {
  return (
    <ButtonIconStyled onClick={handleOnClick}>
      {iconName === "add" && <AddIcon />}
    </ButtonIconStyled>
  );
};

ButtonIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
  handleOnClick: PropTypes.func.isRequired,
};

export default ButtonIcon;
