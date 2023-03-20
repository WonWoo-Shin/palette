import axios from "axios";

export const fetchDefaultColor = async () => {
  return await axios
    .get("http://localhost:4000/api/defaultColor")
    .then((res) => res.data);
};
