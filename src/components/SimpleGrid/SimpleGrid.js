import React from "react";
import PropTypes from "prop-types";

import { GridStyled } from "./styles";

const SimpleGrid = ({ children }) => {
  return <GridStyled>{children}</GridStyled>;
};

SimpleGrid.propTypes = {
  children: PropTypes.element,
};

export default SimpleGrid;
