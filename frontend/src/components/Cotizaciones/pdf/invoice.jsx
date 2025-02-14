import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React from "react";


export default function Invoice({ cotizacionData, dataCotizador }) {
  const printRef = React.useRef(null);

  const handleDownloadPdf = async () => {
    const element = printRef.current;
    if (!element) {
      return;
    }

    const canvas = await html2canvas(element, {
      scale: 2,
    });
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: "a4",
    });

    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();

    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("examplepdf.pdf");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl">
        <div ref={printRef} className="p-8 bg-white border">
        {cotizacionData ? (
          <div
              style={{
                marginTop: "0rem",
                display: "flex",
                flexDirection: "column",
                width: "95%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <div>
                  <img
                    // src={images.logoIndelpaDark}
                    alt=""
                    style={{ width: "100px" }}
                  />
                </div>
                <div>
                  <img
                    // src={images.certificacion}
                    alt=""
                    style={{ width: "100px" }}
                  />
                </div>
              </div>

              <p style={{ color: "#000", fontSize: "9px", fontWeight: "bold" }}>
                DATOS COTIZACION
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  border: "1px solid #000",
                  padding: "10px",
                  borderRadius: "10px",
                  marginTop: ".4rem",
                }}
              >
                <div
                  style={{
                    width: "50%",
                    justifyContent: "space-between",
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      width: "30%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <p style={{ color: "#000", fontSize: "9px" }}>CLIENTE</p>
                    <p style={{ color: "#000", fontSize: "9px" }}>CONTACTO</p>
                    <p style={{ color: "#000", fontSize: "9px" }}>CORREO</p>
                    <p style={{ color: "#000", fontSize: "9px" }}>TELEFONO</p>
                    <p style={{ color: "#000", fontSize: "9px" }}>FECHA</p>
                    <p style={{ color: "#000", fontSize: "9px" }}>REFERENCIA</p>
                  </div>
                  <div
                    style={{
                      width: "65%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <p style={{ color: "#000", fontSize: "9px" }}>
                      {cotizacionData.cotizacion.cliente.nombre || "----"}{" "}
                      {cotizacionData.cotizacion.cliente.apellido}
                    </p>
                    <p style={{ color: "#000", fontSize: "9px" }}>
                      {cotizacionData.cotizacion.cliente.nombre_empresa || "----"}
                    </p>
                    <p style={{ color: "#000", fontSize: "9px" }}>
                      {cotizacionData.cotizacion.cliente.numero_telefono ||
                        "----"}
                    </p>
                    <p style={{ color: "#000", fontSize: "9px" }}>
                      {cotizacionData.cotizacion.cliente.correo || "----"}
                    </p>
                    <p style={{ color: "#000", fontSize: "9px" }}>
                      {cotizacionData.cotizacion.fecha_cotizacion || "----"}
                    </p>
                    <p style={{ color: "#000", fontSize: "9px" }}>
                      {cotizacionData.cotizacion.referencia || "----"}
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    width: "45%",
                    justifyContent: "space-between",
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      width: "40%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <p style={{ color: "#000", fontSize: "9px" }}>DEPARTAMENTO</p>
                    <p style={{ color: "#000", fontSize: "9px" }}>MUNICIPIO</p>
                    <p style={{ color: "#000", fontSize: "9px" }}>DIRECCION</p>
                    <p style={{ color: "#000", fontSize: "9px" }}>COTIZACION</p>
                    <p style={{ color: "#000", fontSize: "9px" }}>SOLICITUD</p>
                    <p style={{ color: "#000", fontSize: "9px" }}>PROYECTO</p>
                  </div>
                  <div
                    style={{
                      width: "60%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <p style={{ color: "#000", fontSize: "9px" }}>
                      {cotizacionData.cotizacion.cliente.departamento || "----"}
                    </p>
                    <p style={{ color: "#000", fontSize: "9px" }}>
                      {cotizacionData.cotizacion.cliente.ciudad || "----"}
                    </p>
                    <p style={{ color: "#000", fontSize: "9px" }}>
                      {cotizacionData.cotizacion.cliente.direccion || "----"}
                    </p>
                    <p style={{ color: "#000", fontSize: "9px" }}>
                      {cotizacionData.cotizacion.nombre_cotizacion || "----"} {cotizacionData.nombre_version}
                    </p>
                    <p style={{ color: "#000", fontSize: "9px" }}>
                      {cotizacionData.cotizacion.solicitud || "----"}
                    </p>
                    <p style={{ color: "#000", fontSize: "9px" }}>
                      {cotizacionData.cotizacion.nombre_cotizacion || "----"}
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: "1rem" }}>
                <p style={{ color: "#000", fontSize: "9px", fontWeight: "bold" }}>
                  CARACTERISTICAS TECNICAS
                </p>
                <table>
                  <tr>
                    <td
                      style={{
                        fontSize: "9px",
                        width: "5%",
                        textAlign: "center",
                        borderBottom: "1px solid #000",
                      }}
                    >
                      1
                    </td>
                    <td
                      style={{ fontSize: "9px", borderBottom: "1px solid #000" }}
                    >
                      Los tableros eléctricos marca INDELPA son implementados en
                      gabinetes metálicos, de dimensiones adecuadas para alojar en
                      su interior todos los elementos que los componen.
                    </td>
                  </tr>

                  <tr>
                    <td
                      style={{
                        fontSize: "9px",
                        width: "5%",
                        textAlign: "center",
                        borderBottom: "1px solid #000",
                      }}
                    >
                      2
                    </td>
                    <td
                      style={{ fontSize: "9px", borderBottom: "1px solid #000" }}
                    >
                      Los tableros eléctricos marca INDELPA son implementados en
                      gabinetes metálicos, de dimensiones adecuadas para alojar en
                      su interior todos los elementos que los componen.
                    </td>
                  </tr>

                  <tr>
                    <td
                      style={{
                        fontSize: "9px",
                        width: "5%",
                        textAlign: "center",
                        borderBottom: "1px solid #000",
                      }}
                    >
                      3
                    </td>
                    <td
                      style={{ fontSize: "9px", borderBottom: "1px solid #000" }}
                    >
                      Los barrajes utilizados son de cobre electrolítico de alta
                      conductividad
                    </td>
                  </tr>

                  <tr>
                    <td
                      style={{
                        fontSize: "9px",
                        width: "5%",
                        textAlign: "center",
                        borderBottom: "1px solid #000",
                      }}
                    >
                      3
                    </td>
                    <td
                      style={{ fontSize: "9px", borderBottom: "1px solid #000" }}
                    >
                      Producto con certicado RETIE
                    </td>
                  </tr>
                </table>
              </div>

              <div style={{ marginTop: "1rem", width: "100%" }}>
                <p style={{ fontSize: "9px", color: "#000", fontWeight: "bold", marginBottom: '.5rem' }}>
                  LISTADO DE TABLEROS
                </p>

                <table className="table-pdf">
                  <tr>
                    <th>
                      ITEM 1
                    </th>
                    <th>
                      SUMINISTRO E INSTALACION DE CONMUTADOR EN
                      GRANJA DARDANELOS
                    </th>
                    <th style={{borderRight: '1px solid var(--color-primary)'}}>
                      VALOR:
                    </th>
                    <th>
                      $ 3.750.000
                    </th>
                  </tr>

                  <tr>
                    <th>ELEMENTO</th>
                    <th>DESCRIPCION</th>
                    <th>MARCA</th>
                    <th>CANTIDAD</th>
                  </tr>

                  <tr>
                    <td>1</td>
                    <td>
                      CONMUTADOR DE POTENCIA 1-0-2 MONTAJE EN PANEL, In
                      125 A, Ith 125 A, 690V, IP 2
                    </td>
                    <td>
                      TELERGON 
                    </td>
                    <td>2</td>
                  </tr>
                </table>
              </div>

              <div style={{ marginTop: "1rem", width: "100%" }}>
                <p style={{ fontSize: "9px", color: "#000", fontWeight: "bold" }}>
                  VALOR PROPUESTA
                </p>

                <table className="table-propuesta">
                  <tr>
                    <td style={{ fontSize: "9px", borderBottom: "1px solid #000", width: '5%', textAlign: "center",}}>1</td>
                    <td style={{ fontSize: "9px", borderBottom: "1px solid #000", width: '25%', textAlign: "left", }}>Formas de pago y facturacion</td>
                    <td style={{ fontSize: "9px", borderBottom: "1px solid #000", textAlign: "left", }}>
                      <div style={{display: 'flex', flexDirection: 'column'}}>
                        <div style={{borderBottom: '1px solid #000'}}>
                          <p style={{fontSize: '9px', textAlign: 'left', color: '#000' }}>Anticipo del 50% antes de IVA ($1.875.000). Saldo para la entrega ($2.587.500)</p>
                        </div>
                        <div style={{borderBottom: '1px solid #000'}}>
                          <p style={{fontSize: '9px', textAlign: 'left', color: '#000' }}>Anticipo del 50% antes de IVA ($1.875.000). Saldo para la entrega ($2.587.500)</p>
                        </div>
                        <div>
                          <p style={{fontSize: '9px', textAlign: 'left', color: '#000' }}>Anticipo del 50% antes de IVA ($1.875.000). Saldo para la entrega ($2.587.500)</p>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td style={{ fontSize: "9px", borderBottom: "1px solid #000", width: '5%', textAlign: "center",}}>2</td>
                    <td style={{ fontSize: "9px", borderBottom: "1px solid #000", width: '25%', textAlign: "left", }}>Formas de pago y facturacion</td>
                    <td style={{ fontSize: "9px", borderBottom: "1px solid #000", textAlign: "left", }}>Anticipo del 50% antes de IVA ($1.875.000). Saldo para la entrega ($2.587.500)</td>
                  </tr>

                  <tr>
                    <td style={{ fontSize: "9px", borderBottom: "1px solid #000", width: '5%', textAlign: "center",}}>3</td>
                    <td style={{ fontSize: "9px", borderBottom: "1px solid #000", width: '25%', textAlign: "left", }}>Formas de pago y facturacion</td>
                    <td style={{ fontSize: "9px", borderBottom: "1px solid #000", textAlign: "left", }}>Anticipo del 50% antes de IVA ($1.875.000). Saldo para la entrega ($2.587.500)</td>
                  </tr>

                  <tr>
                    <td style={{ fontSize: "9px", borderBottom: "1px solid #000", width: '5%', textAlign: "center",}}>4</td>
                    <td style={{ fontSize: "9px", borderBottom: "1px solid #000", width: '25%', textAlign: "left", }}>Formas de pago y facturacion</td>
                    <td style={{ fontSize: "9px", borderBottom: "1px solid #000", textAlign: "left", }}>Anticipo del 50% antes de IVA ($1.875.000). Saldo para la entrega ($2.587.500)</td>
                  </tr>

                  <tr>
                    <td style={{ fontSize: "9px", borderBottom: "1px solid #000", width: '5%', textAlign: "center",}}>5</td>
                    <td style={{ fontSize: "9px", borderBottom: "1px solid #000", width: '25%', textAlign: "left", }}>Formas de pago y facturacion</td>
                    <td style={{ fontSize: "9px", borderBottom: "1px solid #000", textAlign: "left", }}>Anticipo del 50% antes de IVA ($1.875.000). Saldo para la entrega ($2.587.500)</td>
                  </tr>
                </table>
              </div>

              <div style={{ marginTop: "1rem" }}>
                <p style={{ fontSize: "9px", color: "#000", fontWeight: "bold" }}>
                  CONDCIONES COMERCIALES
                </p>
              </div>

              {dataCotizador ? (
                <div style={{ marginTop: "1rem" }}>
                  <p style={{ fontSize: "9px", color: "#000" }}>
                    Cualquier información que considere necesaria, estaremos
                    atentos a suministrársela.
                  </p>

                  <div
                    style={{
                      display: "flex",
                      marginTop: "1rem",
                      flexDirection: 'column',
                    }}
                  >
                    <div style={{display: 'flex', gap:'.5rem'}}>
                      <p style={{ fontSize: "9px", color: "#000" }}>{dataCotizador.first_name || '-------'} {dataCotizador.last_name || '-------'}</p>
                    </div>

                    <div style={{display: 'flex', gap:'.5rem'}}>
                      <p style={{ fontSize: "9px", color: "#000" }}>Depto. Eléctrico - INDELPA S.A.S.</p>
                    </div>

                    <div style={{display: 'flex', gap:'.5rem'}}>
                      <p style={{ fontSize: "9px", color: "#000" }}>Dirección: Cra 16 # 8-138 B. Valher</p>
                    </div>

                    <div style={{display: 'flex', gap:'.5rem'}}>
                      <p style={{ fontSize: "9px", color: "#000" }}>Dosquebradas – Risaralda</p>
                    </div>

                    <div style={{display: 'flex', gap:'.5rem'}}>
                      <p style={{ fontSize: "9px", color: "#000" }}>email: genre@gmail.com</p>
                    </div>

                    <div style={{display: 'flex', gap:'.5rem'}}>
                      <p style={{ fontSize: "9px", color: "#000" }}>Celular: 3104204182</p>
                    </div>
                  </div>
                </div>
              ) : (
                <Text>Cargando datos...</Text>
              )}
            </div>
            ) : (
              <Text>Cargando datos...</Text>
            )}
          </div>

        <div className="mt-6 flex justify-center">
          <button
            onClick={handleDownloadPdf}
            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}