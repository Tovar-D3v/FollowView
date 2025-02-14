import React, { useContext, useState, useEffect, useRef } from "react";
import { Button, Modal } from "antd";
import PdfViewer from "./cotizacion-pdf";
import MultiStepFormContext from "../multiPasosForm/MultiStepFormContext";
import "../../../styles/pdf.css";
import Invoice from "./invoice";
import Invoice2 from "./invoice/invoice";

const PagePdf = () => {
  const { prev } = useContext(MultiStepFormContext);
  const [cotizacionData, setCotizacionData] = useState(null);
  const [dataCotizador, setDataCotizador] = useState(null);
  const [open, setOpen] = useState(false);
  const modalRef = useRef(null);

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  useEffect(() => {
    setCotizacionData({
      cotizacion: {
        cliente: {
          nombre: "Juan",
          apellido: "Pérez",
          nombre_empresa: "Empresa S.A.",
          numero_telefono: "123456789",
          correo: "juan.perez@example.com",
          fecha_cotizacion: "2025-02-14",
          referencia: "REF123",
          departamento: "Risaralda",
          ciudad: "Pereira",
          direccion: "Calle 123",
        },
        nombre_cotizacion: "Cotización 1",
        solicitud: "Solicitud 1",
      },
      nombre_version: "v1.0",
    });
    setDataCotizador({
      first_name: "Carlos",
      last_name: "Gómez",
    });
  }, []);

  // Función para imprimir solo el contenido del modal
  const printContent = () => {
    window.print();
  };

  return (
    <div className="flex gap-4 w-full flex-col items-center" style={{ height: "92%" }}>
      <div className="flex w-full h-[92%] justify-center overflow-y-auto gap-20">
        <Invoice cotizacionData={cotizacionData} dataCotizador={dataCotizador}/>
      </div>

      <div className="flex w-11/12">
        <div className="form__item button__items d-flex justify-content-between w-full bg-white ">
          <Button type="default" onClick={prev}>
            Atras
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PagePdf;
