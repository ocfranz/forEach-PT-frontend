import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: ${(props) => {
    if (props.outline) return "transparent";
    return "#549cf8";
  }};
  padding: 10px 20px;
  color: ${(props) => {
    if (props.outline) return "rgba(0,0,0,0.6)";
    return "#ffffff";
  }};
  border: none;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  text-transform: capitalize;
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export { ButtonStyled };
