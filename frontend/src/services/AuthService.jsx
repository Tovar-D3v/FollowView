import axios from "axios";

const BASE_URL = "http://localhost:8080/autenticacion/api";

export const login = async (credentials) => {
  const response = await axios.post(`${BASE_URL}/login`, credentials);
  return response.data;
};

export const register = async (user) => {
  const response = await axios.post(`${BASE_URL}/register`, user);
  return response.data;
};