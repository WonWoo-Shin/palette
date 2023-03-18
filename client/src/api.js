import axios from "axios";

export const fetchDefaultColor = () => {
  return axios.get("http://localhost:4000/api/defaultColor");
};
