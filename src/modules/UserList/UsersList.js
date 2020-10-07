import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useDispatch } from "react-redux";

import { TOGGLE_MODAL_ADD_EMPLOYEE } from "../../actions/types";
import { ListWrapper, List, ListItem } from "./styles";
import { API_BASE_URI } from "../../helpers/config";
import ButtonIcon from "../../components/ButtonIcon";

const UsersList = (props) => {
  const dispatch = useDispatch();
  const [listEmployees, setListEmployees] = useState([]);
  useEffect(() => {
    Axios.get(`${API_BASE_URI}/api/v1/employees`)
      .then((data) => {
        setListEmployees(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const drawEmployees = (data) => {
    const templates = [];
    data.map((item) => {
      templates.push(<ListItem key={item.username}>{item.username}</ListItem>);
    });

    return templates;
  };

  const onShowModal = () => {
    dispatch({ type: TOGGLE_MODAL_ADD_EMPLOYEE, payload: true  });
  };
  return (
    <ListWrapper>
      <div className="heading">
        <span>Trabajadores</span>
        <ButtonIcon iconName="add" handleOnClick={onShowModal} />
      </div>
      <List>{drawEmployees(listEmployees)}</List>
    </ListWrapper>
  );
};

export default UsersList;
