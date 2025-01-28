import axios from "axios";

const BASE_URL = "http://localhost:8080/autenticacion/api";

export const login = async (credentials, token) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, credentials, {
      headers: {
        'Authorization': `Bearer ${token}`, // Asegúrate de incluir 'Bearer'
        'Content-Type': 'application/json',
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error en login:', error);
    throw error;
  }
};

export const register = async (user, token) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, user, {
      headers: {
        'Authorization': `Bearer ${token}`, // Asegúrate de incluir 'Bearer'
        'Content-Type': 'application/json',
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error en register:', error);
    throw error;
  }
};
