import Axios from "axios";
import { API_BASE_URI } from "../helpers/config";

export const fetchEmployees = () => {
  return Axios.get(`${API_BASE_URI}/api/v1/employees`, {
    headers: { "Content-Type": "application/json" },
  })
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      return err;
    });
};
