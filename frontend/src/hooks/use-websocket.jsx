import { useState, useEffect } from "react";

const useWebSocket = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const socket = new WebSocket(url);

    socket.onopen = () => {
      console.log("Conectado al WebSocket:", url);
    };

    socket.onmessage = (event) => {
      console.log("Mensaje recibido:", event.data);
      try {
        const parsedData = JSON.parse(event.data);
        const transformedData = parsedData.map((negocio) => ({
          id: negocio.id,
          status: negocio.etapaDelNegocio.nombre.toLowerCase(),
          text: negocio.titulo,
          description: `${negocio.descripcion} - ${new Date(negocio.fechaCreacion).toLocaleDateString()}`,
          customTitle: negocio.titulo, // Título personalizado
          customDescription: `${negocio.descripcion} - ${new Date(negocio.fechaCreacion).toLocaleDateString()}` // Descripción personalizada
        }));
        setData(transformedData);
      } catch (error) {
        console.error("Error parsing WebSocket message:", error);
      }
    };

    socket.onerror = (error) => {
      console.error("WebSocket Error:", error);
    };

    socket.onclose = () => {
      console.log("WebSocket cerrado");
    };

    return () => {
      socket.close();
    };
  }, [url]);

  return data;
};

export default useWebSocket;