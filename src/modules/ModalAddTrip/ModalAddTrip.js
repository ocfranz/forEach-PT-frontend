import React, { useState } from "react";
import PropTypes, { number } from "prop-types";
import { useQuery } from "react-query";
import Axios from "axios";
import Switch from "react-switch";
import { useSelector, useDispatch } from "react-redux";

import { API_BASE_URI } from "../../helpers/config";
import { TOGGLE_MODAL_ADD_TRIP } from "../../actions/types";
import { fetchTransportTypes } from "../../services/transportServices";
import {
  ModalBody,
  ModalHeading,
  AddForm,
  AddFormItem,
  AutoComplete,
  ButtonContainer,
  UserTagContainer,
} from "./styles";
import ModalWrapper from "../../components/ModalWrapper";
import CustomSelect from "../../components/CustomSelect";
import Button from "../../components/Button";

const ModalAddTrip = ({ visible }) => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useQuery("type", fetchTransportTypes);
  const [success, setSuccess] = useState(false);
  const [carbonData, setCarbonData] = useState({
    carbonFootPrintEmission: 0,
    carbonFootPrintPerEmployee: 0,
  });
  const [employees, setEmployees] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [searchUsername, setSearchUsername] = useState("");
  const [formData, setFormData] = useState({
    startAddress: "",
    endAddress: "",
    totalKm: "",
    oneWay: false,
    usedTransportTypeId: "1",
  });
  const [formValidation, setFormValidation] = useState({
    validStartAddress: false,
    validEndAddress: false,
    validTotalKm: false,
    validEmployees: false,
  });

  const OnSearchUsername = (e) => {
    const { value } = e.target;
    setSearchUsername(value);
    Axios.get(
      `${API_BASE_URI}/api/v1/employees/username/${searchUsername.toLocaleLowerCase()}`,
      {
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((data) => {
        setSearchData(data.data);
      })
      .catch((err) => {
        return err;
      });
  };
  const onSelectUsername = (username) => {
    let isAdded = false;
    employees.map((item) => {
      if (item === username) {
        isAdded = true;
      }
    });
    if (!isAdded) {
      const employeesUpdated = employees;
      employeesUpdated.push(username);
      setEmployees(employeesUpdated);
      setFormValidation({ ...formValidation, validEmployees: true });
      setSearchData([]);
      setSearchUsername("");
    }
  };
  const onOneWayChange = (checked) => {
    setFormData({ ...formData, oneWay: checked });
  };
  const onCancel = () => {
    dispatch({ type: TOGGLE_MODAL_ADD_TRIP, payload: false });
  };
  const onAddTrip = () => {
    Axios.post(
      `${API_BASE_URI}/api/v1/trip`,
      { ...formData, employees: employees },
      {
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((data) => {
        console.log(data.status);
        if (data.status === 200) {
          setSuccess(true);
          const {
            carbonFootPrintEmission,
            carbonFootPrintPerEmployee,
          } = data.data;
          setCarbonData({
            carbonFootPrintEmission,
            carbonFootPrintPerEmployee,
          });
        }
      })
      .catch((err) => {
        return err;
      });
  };

  const onInputChange = (e, id) => {
    const { value } = e.target;
    switch (id) {
      case "startAddress":
        if (value.length > 0) {
          setFormValidation({ ...formValidation, validStartAddress: true });
        }
        setFormData({ ...formData, startAddress: value });
        break;
      case "endAddress":
        if (value.length > 0) {
          setFormValidation({ ...formValidation, validEndAddress: true });
        }
        setFormData({ ...formData, endAddress: value });
        break;
      case "totalKm":
        if (!isNaN(value)) {
          if (value.length > 0) {
            setFormValidation({ ...formValidation, validTotalKm: true });
          }
          setFormData({ ...formData, totalKm: value });
        }
        break;
      default:
        throw new Error("Id input error");
    }
  };

  const onSelectTypeTransport = (typeId) => {
    setFormData({ ...formData, usedTransportTypeId: typeId });
  };
  return (
    <ModalWrapper visible={visible}>
      <ModalBody>
        {!success && (
          <>
            <ModalHeading>
              <span>Nuevo viaje</span>
            </ModalHeading>
            <AddForm>
              <AddFormItem>
                <label>Punto de partida</label>
                <input
                  value={formData.startAddress}
                  placeholder="Ejemplo : La Niña 16262, Los andes"
                  onChange={(e) => onInputChange(e, "startAddress")}
                />
              </AddFormItem>
              <AddFormItem>
                <label>Punto de llegada</label>
                <input
                  value={formData.endAddress}
                  placeholder="Ejemplo : Av Andrés Bello 1362"
                  onChange={(e) => onInputChange(e, "endAddress")}
                />
              </AddFormItem>
              <AddFormItem>
                <label>Tipo de transporte</label>
                <CustomSelect
                  list={!isLoading && !error ? data : []}
                  onSelect={onSelectTypeTransport}
                />
              </AddFormItem>
              <AddFormItem>
                <label>Trabajadores</label>
                <UserTagContainer>
                  {employees.map((item) => {
                    return <span key={item}>{item}</span>;
                  })}
                  {employees.length === 0 && (
                    <span className="empty-display">
                      Ningun usuario agregado
                    </span>
                  )}
                </UserTagContainer>
                <input
                  value={searchUsername}
                  onChange={OnSearchUsername}
                  placeholder="Escribe un usuario"
                />
                <AutoComplete active={searchData.length > 0}>
                  {searchData.map((username) => (
                    <div
                      key={username}
                      onClick={() => onSelectUsername(username)}
                    >
                      {username}
                    </div>
                  ))}
                </AutoComplete>
              </AddFormItem>
              <AddFormItem>
                <label>Total de KM</label>
                <input
                  value={formData.totalKm}
                  placeholder="Ejemplo : 10"
                  onChange={(e) => onInputChange(e, "totalKm")}
                />
              </AddFormItem>
              <AddFormItem>
                <label>¿El viaje fue solo de Ida?</label>
                <Switch
                  onChange={(checked) => onOneWayChange(checked)}
                  checked={formData.oneWay}
                />
              </AddFormItem>
              <ButtonContainer>
                <Button
                  children="cancelar"
                  outline={true}
                  handleOnClick={onCancel}
                />
                <Button children="Agregar" handleOnClick={onAddTrip} />
              </ButtonContainer>
            </AddForm>
          </>
        )}
        {success && (
          <>
            <span>Viaje Agregado exitosamente</span>
            <div>
              <div></div>
              <span>
                Huella de carbono total : {carbonData.carbonFootPrintEmission}
              </span>
            </div>
            <div>
              <div></div>
              <span>
                Huella de carbono por trabajador :{" "}
                {carbonData.carbonFootPrintPerEmployee}
              </span>
            </div>
          </>
        )}
      </ModalBody>
    </ModalWrapper>
  );
};

ModalAddTrip.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default ModalAddTrip;
