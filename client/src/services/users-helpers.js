import axios from "axios";
const BASE_URL = "https://tranquil-ravine-67605.herokuapp.com";

const createNewUser = async user => {
  const respData = await axios.post(`${BASE_URL}/users/register`, user);
  console.log("this is create user: resp", respData);
  return respData;
};

const editUser = async user => {
  const respData = await axios.put(`${BASE_URL}/users/register`, user);
  console.log("this is edit user: resp", respData);
  return respData;
};

const loginUser = async user => {
  const respData = await axios.post(`${BASE_URL}/users/login`, user);
  console.log("this is login user: resp", respData);
  return respData;
};

const fetchStations = async () => {
  const respData = await axios.get(`${BASE_URL}/stations`);
  console.log("fetchStations RESPDATA", respData);
  return respData;
};

const fetchStationData = async station => {
  console.log("this is fetchStationData station", station);
  const respData = await axios.get(`${BASE_URL}/stations/${station}`);
  return respData;
};

export { editUser, fetchStations, fetchStationData, createNewUser, loginUser };
