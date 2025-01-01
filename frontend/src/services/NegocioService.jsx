const API_URL = "http://localhost:8081/negocios";

export const actualizarNegocio = async (negocioId, data) => {
  try {
    const response = await fetch(`${API_URL}/${negocioId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Error en la solicitud PATCH");
    }

    return await response.json();
  } catch (error) {
    console.error("Error al actualizar el negocio:", error);
    throw error;
  }
};