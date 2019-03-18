import axios from "axios";
const BASE_URL = "http://localhost:3000";

const fetchStations = async  => {
  console.log("this is create user: user", user);
  const respData = await axios.post(`${BASE_URL}/users/`, user);
  console.log("this is create user: resp", respData);
  return respData;
};

export { fetchStations };
