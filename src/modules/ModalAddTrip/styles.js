import styled from "styled-components";
const ModalBody = styled.div`
  width: 40%;
  height: 100%;
  margin: 0 auto;
  border-radius: 10px;
  background-color: #ffffff;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ModalHeading = styled.div`
  width: 100%;
  text-align: center;
  span {
    font-size: 17px;
  }
`;
const AddForm = styled.div`
  width: 70%;
  margin: 0 auto;
  padding-top: 10px;
`;

const AddFormItem = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  label {
    display: block;
    font-size: 14px;
    padding-bottom: 5px;
  }
  input {
    height: 40px;
    margin-bottom: 10px;
    background-color: rgb(240, 240, 240);
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    border: none;
    padding: 0px 20px;
    border-radius: 5px;
    &:focus {
      outline: none;
      box-shadow: none;
    }
  }
`;
const UserTagContainer = styled.div`
  padding-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  span {
    background-color: rgb(240, 240, 240);
    padding: 5px 10px;
    font-size: 13px;
    border-radius: 20px;
    &:before {
      content: "@";
    }
  }
  .empty-display {
    background-color: transparent;
    font-size: 13px;
    opacity: 0.5;
    &:before {
      content: "";
    }
  }
`;

const AutoComplete = styled.div`
  position: absolute;
  top: 100%;
  background-color: #ffffff;
  width: 100%;
  left: 0;
  z-index: 9;
  -webkit-box-shadow: 0px 5px 2px 2px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 5px 2px 2px rgba(0, 0, 0, 0.1);
  display: ${(props) => {
    if (props.active) return "block";
    return "none";
  }};
  div {
    padding: 10px;
    cursor: pointer;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 20px;
  button {
    margin-left: 10px;
  }
`;

const SuccessDisplay = styled.div`
  span {
    display: block;
  }
  .big {
    font-size: 18px;
  }
`;

export {
  ModalBody,
  ModalHeading,
  AddForm,
  AddFormItem,
  UserTagContainer,
  AutoComplete,
  ButtonContainer,
  SuccessDisplay,
};
