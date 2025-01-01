import React, { useState } from "react";
import formatFecha from "./formatear-fechas";

const Cards = ({ data }) => {
  const fechaCreacion = formatFecha(data.fechaCreacion);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: ".5rem",
        width: "100%",
      }}
    >
      <div className="header-card">
        <div style={{ display: "flex", alignItems: "center", gap: ".3rem" }}>
          <span className="material-icons-round" style={{ fontSize: "15px" }}>
            watch_later
          </span>
          <p
            style={{
              fontSize: "10px",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            {fechaCreacion}
          </p>
        </div>
        <h5 className="title-card">{data.text}</h5>
        <div style={{display: 'flex', gap: '5px'}}>
          <div className="prioridad" style={{background: data.colorPriority}}>{data.priority}</div>
          <div className="prioridad" style={{background: data.estaCotizado ? 'green' : 'red', color: '#fff'}}>
            {data.estaCotizado ? 'Cotizado' : 'No Cotizado'}
          </div>
        </div>
      </div>
      <div className="body-card">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", gap: ".3rem", alignItems: "center" }}>
            <span className="material-icons-round">support_agent</span>
            <p>Nombre Agente</p>
          </div>

          <div style={{ display: "flex", gap: ".3rem", alignItems: "center" }}>
            <span className="material-icons-round">payment</span>
            <p>Estimado</p>
          </div>

          <div style={{ display: "flex", gap: ".3rem", alignItems: "center" }}>
            <span className="material-icons-round">person</span>
            <p>Contacto</p>
          </div>

          <div style={{ display: "flex", gap: ".3rem", alignItems: "center" }}>
            <span className="material-icons-round">local_cafe</span>
            <p>Proyecto</p>
          </div>
        </div>

        <div>
          <p>:</p>
          <p>:</p>
          <p>:</p>
          <p>:</p>
        </div>

        <div>
          <p>{data.nombreAgente}</p>
          <p>${data.estimado}</p>
          <p>{data.nombreCliente}</p>
          <p>{data.proyecto}</p>
        </div>
      </div>

      <div className="footer-card">
        <div className="descripcion-card">
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
