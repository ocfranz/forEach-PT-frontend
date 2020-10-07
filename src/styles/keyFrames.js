import { keyframes } from "styled-components";

const SlideDown = keyframes`
  from {
    top: -300px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
`;

export { SlideDown };
