import axios from "axios";
const BASE_URL = "https://tranquil-ravine-67605.herokuapp.com";

const createNewUser = async user => {
  console.log("this is create user: user", user);
  const respData = await axios.post(`${BASE_URL}/users/register`, user);
  console.log("this is create user: resp", respData);
  return respData;
};

const loginUser = async user => {
  console.log("i made it to login user", user);
  const respData = await axios.post(`${BASE_URL}/users/login`, user);
  console.log("this is login user: resp", respData);
  return respData;
};

const fetchStations = async () => {
  const respData = await axios.get(`${BASE_URL}/users/`);
  return respData;
};

const fetchStationData = async station => {
  console.log("this is fetchStationData station", station);
  const respData = await axios.post(`${BASE_URL}/users/`, station);
  return respData;
};

export { fetchStations, fetchStationData, createNewUser, loginUser };
