import React, { useState } from "react";
import CotizarForm from "@/components/kanban/cotizar-form";

const CardPropuestas = ({ data }) => {
  const [showCotizarForm, setShowCotizarForm] = useState(false);

  const handleCotizarClick = () => {
    console.log("Cotizar clicked");
    setShowCotizarForm(true);
  };

  const handleCloseForm = () => {
    setShowCotizarForm(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "100%",
      }}
    >
      <div className="header-card">
        <h5 className="title-card">{data.text}</h5>
        <div className="prioridad">{data.priority}</div>
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
          <p>{data.agente}</p>
          <p>${data.estimado}</p>
          <p>{data.cliente}</p>
          <p>{data.proyecto}</p>
        </div>
      </div>

      <div className="footer-card">
        <div className="descripcion-card">
          <p>{data.description}</p>
        </div>
{/* 
        <button className="cotizar-btn" style={{ marginTop: "1rem" }} onClick={handleCotizarClick}>
          <span className="material-icons-round">receipt</span>
          <p>COTIZAR</p>
        </button> */}
      </div>
    </div>
  );
};

export default CardPropuestas;