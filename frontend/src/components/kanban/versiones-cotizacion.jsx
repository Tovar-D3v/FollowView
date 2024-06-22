import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { obtenerVersionesSubversiones } from "@/services/CotizacionService";

export function AccordionDemo({ negocioId }) {
  const [versiones, setVersiones] = useState([]);

  useEffect(() => {
    const fetchVersiones = async () => {
      try {
        const data = await obtenerVersionesSubversiones(negocioId);
        setVersiones(data.versiones);
      } catch (error) {
        console.error("Error al obtener las versiones de la cotización:", error);
      }
    };

    fetchVersiones();
  }, [negocioId]);

  console.log("versiones", versiones);

  return (
    <Accordion type="single" collapsible className="w-full">
      {versiones.map((version, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>
            {version.cotizacion.nombre_cotizacion || "Sin nombre"} - {version.version.nombre_version}...
          </AccordionTrigger>
          <AccordionContent>
            {version.subVersiones.map((subversion) => (
              <div key={subversion.id}>
                <div className="bg-slate-700 p-2 rounded-lg flex justify-between text-center items-center text-xs">
                  <p>{version.cotizacion.nombre_cotizacion || "Sin nombre"} - {version.version.nombre_version}.{subversion.nombre_subversion}</p>
                  <button className="px-2 bg-lime-700 rounded-lg py-0.5">Abrir</button>
                </div>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}