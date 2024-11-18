import API_URL from "../api/api";
import axios from "axios";

import { logoutUser } from "./UserSlice";

export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/auth/register`, userData);

  console.log(response);

  return response.data;
};

export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/auth/login`, userData);

  return response.data;
};

export const logout = () => {
  localStorage.removeItem("currentUser");
};
