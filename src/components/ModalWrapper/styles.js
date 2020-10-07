import styled from "styled-components";
import { SlideDown } from "../../styles/keyFrames";

const ModalStyled = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  left: 0;
  animation-name: ${SlideDown};
  animation-duration: 0.6s;
  display: ${(props) => {
    if (props.visible) return "block";
    return "none";
  }};
`;

const ModalDialog = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export { ModalStyled, ModalDialog };
