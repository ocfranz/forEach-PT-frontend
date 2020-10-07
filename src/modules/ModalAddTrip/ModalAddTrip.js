import React from "react";
import PropTypes from "prop-types";

import ModalWrapper from "../../components/ModalWrapper";
const ModalAddTrip = ({ visible }) => {
  return <ModalWrapper visible={visible}> Modal add</ModalWrapper>;
};

ModalAddTrip.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default ModalAddTrip;
