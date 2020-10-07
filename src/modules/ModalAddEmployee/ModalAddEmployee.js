import React, { useState } from "react";
import PropTypes from "prop-types";
import { useQuery } from "react-query";
import Axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import { API_BASE_URI } from "../../helpers/config";
import { TOGGLE_MODAL_ADD_EMPLOYEE } from "../../actions/types";
import {
  ModalBody,
  ModalHeading,
  AddForm,
  AddFormItem,
  ButtonContainer,
  SuccessDisplay,
} from "./styles";
import ModalWrapper from "../../components/ModalWrapper";
import Button from "../../components/Button";

const ModalAddTrip = ({ visible }) => {
  const dispatch = useDispatch();
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: "", username: "" });
  const onClose = () => {
    dispatch({ type: TOGGLE_MODAL_ADD_EMPLOYEE, payload: false });
  };

  const onInputChange = (e, type) => {
    const { value } = e.target;
    switch (type) {
      case "username":
        setFormData({ ...formData, username: value });
        break;
      case "name":
        setFormData({ ...formData, name: value });
        break;
      default:
        throw new Error("Type input error");
    }
  };
  const onSave = () => {
    const { name, username } = formData;
    if (name !== "" && username !== "") {
      Axios.post(`${API_BASE_URI}/api/v1/employees`, { name, username })
        .then((data) => {
          setSuccess(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <ModalWrapper visible={visible}>
      <ModalBody>
        {!success && (
          <>
            <ModalHeading>
              <span>Nuevo trabajador</span>
            </ModalHeading>
            <AddForm>
              <AddFormItem>
                <label>Usuario</label>
                <input
                  id="username"
                  placeholder="Ejemplo: jhondow"
                  value={formData.username}
                  onChange={(e) => onInputChange(e, "username")}
                />
              </AddFormItem>
              <AddFormItem>
                <label>Nombre</label>
                <input
                  id="name"
                  placeholder="Ejemplo: Jhon Doe"
                  value={formData.name}
                  onChange={(e) => onInputChange(e, "name")}
                />
              </AddFormItem>
              <ButtonContainer>
                <Button
                  children="Cancelar"
                  outline={true}
                  handleOnClick={onClose}
                />
                <Button children="Agregar" handleOnClick={onSave} />
              </ButtonContainer>
            </AddForm>
          </>
        )}
        {success && (
          <SuccessDisplay>
            <span>Usuario creado exitosamente</span>
            <Button children="Cerrar" handleOnClick={onClose} />
          </SuccessDisplay>
        )}
      </ModalBody>
    </ModalWrapper>
  );
};

ModalAddTrip.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default ModalAddTrip;
