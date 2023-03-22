import axios from "axios";

const SERVER_URL = "http://localhost:4000/api/defaultColor";

export const fetchDefaultColor = async () => {
  return await axios.get(SERVER_URL).then((response) => response.data);
};

export const postDefaultColor = async (name, code) => {
  await axios.post(SERVER_URL, { name, code });
};
