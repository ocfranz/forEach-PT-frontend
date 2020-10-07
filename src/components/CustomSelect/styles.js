import styled from "styled-components";

const SelectStyled = styled.div`
  height: 40px;
  margin-bottom: 10px;
  background-color: rgb(240, 240, 240);
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  border: none;
  padding: 0px 20px;
  border-radius: 5px;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
`;
const SelectOptionWrapper = styled.div`
  position: absolute;
  bottom: 0;
  height: max-content;
  width: 100%;
  z-index: 9;
  display: ${(props) => {
    if (props.active) return "block";
    return "none";
  }};
  left: 0;
  top: 100%;
  background-color: #ffffff;
  max-height: 300px;
  overflow-y: scroll;
`;

const SelectOption = styled.div`
  height: 40px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-left: 10px;
  &:hover {
    background-color: rgb(240, 240, 240);
  }
`;
export { SelectStyled, SelectOptionWrapper, SelectOption };
