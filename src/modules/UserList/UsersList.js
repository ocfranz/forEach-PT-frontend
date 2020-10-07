import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useQuery } from "react-query";

import { fetchEmployees } from "../../services/employeeService";
import { TOGGLE_MODAL_ADD_EMPLOYEE } from "../../actions/types";
import { ListWrapper, List, ListItem } from "./styles";
import { API_BASE_URI } from "../../helpers/config";
import ButtonIcon from "../../components/ButtonIcon";

const UsersList = (props) => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useQuery("employees", fetchEmployees);

  const drawEmployees = (data) => {
    const templates = [];
    data.map((item) => {
      templates.push(<ListItem key={item.username}>{item.username}</ListItem>);
    });

    return templates;
  };

  const onShowModal = () => {
    dispatch({ type: TOGGLE_MODAL_ADD_EMPLOYEE, payload: true });
  };
  return (
    <ListWrapper>
      <div className="heading">
        <span>Trabajadores</span>
        <ButtonIcon iconName="add" handleOnClick={onShowModal} />
      </div>
      <List>{!isLoading && !error && drawEmployees(data)}</List>
    </ListWrapper>
  );
};

export default UsersList;
