import { useState, useEffect } from "react";

const useWebSocket = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const socket = new WebSocket(url);

    socket.onmessage = (event) => {
      try {
        const parsedData = JSON.parse(event.data);
        const transformedData = parsedData.map((negocio) => ({
          id: negocio.id,
          status: negocio.etapaDelNegocio.nombre.toLowerCase(),
          text: negocio.titulo,
          description: negocio.descripcion ? negocio.descripcion : '',
          priority: negocio.prioridad.nombre,
          agente: negocio.agente_id,
          estimado: negocio.estimado ? negocio.estimado.toLocaleString('de-DE') : 'N/A',
          cliente: negocio.cliente_id,
          proyecto: negocio.numeroProyecto ? negocio.numeroProyecto : 'N/A',
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