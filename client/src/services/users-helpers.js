import axios from "axios";
const BASE_URL = "http://localhost:3000";

const createNewUser = async user => {
  console.log("this is create user: user", user);
  const respData = await axios.post(`${BASE_URL}/users/`, user);
  console.log("this is create user: resp", respData);
  return respData;
};

const loginUser = async user => {
  console.log("i made it to login user", user);
  const respData = await axios.post(`${BASE_URL}/users/login`, user);
  console.log("this is login user: resp", respData);
  return respData;
};

export { createNewUser, loginUser };
