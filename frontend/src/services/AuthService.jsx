import axios from "axios";

const BASE_URL = "http://192.168.0.221:8000/autenticacion/api";

export const login = async (credentials) => {
  console.log('credenciales', credentials);
  try {
    const response = await axios.post(`${BASE_URL}/token/`, credentials, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    console.log('credenciales', credentials);
    return response.data;
  } catch (error) {
    console.error('Error en login:', error);
    throw error;
  }
};

export const register = async (user, token) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/`, user, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error en register:', error);
    throw error;
  }
};
