import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { ModalStyled, ModalDialog } from "./styles";

const Modal = ({ visible, children }) => {
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto ";
    }
  }, [visible]);

  return (
    <ModalStyled visible={visible}>
      <ModalDialog>{children}</ModalDialog>
    </ModalStyled>
  );
};

Modal.propTypes = {
  visible: PropTypes.bool,
  children: PropTypes.element,
};

export default Modal;
