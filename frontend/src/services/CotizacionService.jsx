import { addDays } from "date-fns";
import { actualizarNegocio } from "@/services/negocioService";

const API_URL = "http://localhost:8084/api/cotizaciones";

export const crearCotizacion = async (cotizacion) => {
  const fechaCotizacion = new Date();
  const fechaVencimiento = addDays(fechaCotizacion, 15);

  const cotizacionData = {
    cotizacion: {
      nombre_cotizacion: cotizacion.nombreCotizacion,
      fecha_cotizacion: fechaCotizacion.toISOString(),
      fecha_vencimiento: fechaVencimiento.toISOString(),
      cotizador_id: 1,
      codigo_cotizacion: cotizacion.codigoCotizacion,
      referencia: null,
      proyecto: cotizacion.proyecto,
      solicitud: null,
      cliente_id: cotizacion.clienteId,
      negocioId: cotizacion.negocioId, // Asegúrate de que este campo esté presente
    },
    nombreVersion: cotizacion.version ? cotizacion.version : "1.0",
    nombreSubversion: cotizacion.subversion ? cotizacion.subversion : "1.0",
  };

  console.log("Cotización a crear:", cotizacionData);

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cotizacionData),
    });

    if (!response.ok) {
      throw new Error("Error en la solicitud");
    }

    const result = await response.json();
    console.log("Cotización creada result:", result);

    await actualizarNegocio(cotizacion.negocioId, { titulo: cotizacion.nombreCotizacion, esta_cotizado: true });

    return result;
  } catch (error) {
    console.error("Error al crear la cotización:", error);
    throw error;
  }
};

export const obtenerVersionesSubversiones = async (negocioId) => {
  try {
    const response = await fetch(`${API_URL}/negocio/${negocioId}/detalles`);

    if (!response.ok) {
      throw new Error("Error en la solicitud");
    }

    return await response.json();
  } catch (error) {
    console.error("Error al obtener las versiones de la cotización:", error);
    throw error;
  }
};