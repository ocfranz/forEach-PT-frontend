import Axios from "axios";

export const fetchTransportTypes = (username) => {
  return Axios.get(
    `http://localhost:5000/api/v1/employee/username/${username}`,
    {
      headers: { "Content-Type": "application/json" },
    }
  )
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      return err;
    });
};
