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
          estimado: negocio.estimado ? negocio.estimado.toLocaleString('de-DE') : '0',
          cliente: negocio.cliente_id,
          proyecto: negocio.numeroProyecto ? negocio.numeroProyecto : 'N/A',
          nombreAgente: negocio.nombreAgente ? negocio.nombreAgente : 'N/A',
          nombreCotizador: negocio.nombreCotizador	? negocio.nombreCotizador	: 'N/A',
          nombreCliente: negocio.nombreCliente ? negocio.nombreCliente	: ' ',
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