import styled from "styled-components";
const ModalBody = styled.div`
  width: 40%;
  height: 50%;
  margin: 0 auto;
  border-radius: 10px;
  background-color: #ffffff;
  padding: 20px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 20px;
  button {
    margin-left: 10px;
  }
`;
const SuccessDisplay = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  span {
    display: block;
    padding: 10px 20px;
    font-size: 18px;
  }
`;
export {
  ModalBody,
  ModalHeading,
  AddForm,
  AddFormItem,
  ButtonContainer,
  SuccessDisplay,
};
