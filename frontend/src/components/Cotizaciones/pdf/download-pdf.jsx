import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PdfViewer from "./cotizacion-pdf";

const DownloadPdfButton = ({ cotizacionData, dataCotizador }) => (
  <PDFDownloadLink
    document={<PdfViewer cotizacionData={cotizacionData} dataCotizador={dataCotizador} />}
    fileName="cotizacion.pdf"
  >
    {({ blob, url, loading, error }) =>
      loading ? "Generando PDF..." : "Descargar PDF"
    }
  </PDFDownloadLink>
);

export default DownloadPdfButton;