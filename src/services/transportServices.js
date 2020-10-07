import Axios from "axios";

export const fetchTransportTypes = () => {
  return Axios.get(`http://localhost:5000/api/v1/types`, {
    headers: { "Content-Type": "application/json" },
  })
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      return err;
    });
};
