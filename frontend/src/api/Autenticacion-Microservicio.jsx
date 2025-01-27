import axios from "axios";

const BASER_URL = "http://localhost:8080/autenticacion/api";

export const login = async (credenciales) => {
    const response = await axios.post(`${BASER_URL}/login`, credenciales);
    return response.data;
};
