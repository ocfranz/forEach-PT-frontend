import React from "react";
import PropTypes from "prop-types";

import { HeadingStyled } from "./styles";

const Heading = ({ children }) => {
  return <HeadingStyled>{children}</HeadingStyled>;
};

Heading.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Heading;
