import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: #549cf8;
  padding: 10px 20px;
  color: #ffffff;
  border: none;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export { ButtonStyled };
