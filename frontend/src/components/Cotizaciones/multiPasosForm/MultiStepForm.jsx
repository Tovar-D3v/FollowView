import React, { useState } from "react";
import { Steps } from "antd";
import { Provider } from "./MultiStepFormContext";
import FormularioCotizador from "./infoCotizador";
import FormularioProyecto from "./infoProyecto";
import PageItems from "../elementos/page";
import PageExcel from "../pdf/page-pdf";

const { Step } = Steps;

const inforCotizacionInitialState = {
  name: '',
  correo: '',
  fechaEmision: null,
  prefijo: '+57',
  celular: '',
};

const infoProyectoInitialState = {
  name_cliente: "",
  correo_cliente: "",
  fechaEmision: null,
  prefijo: "+57",
  celular_cliente: "",
  empresa: "",
  departamento: "",
  ciudad: "",
  direccion: "",
  referencia: "",
  proyecto: "",
};

const renderStep = (step) => {
  switch (step) {
    case 0:
      return <FormularioCotizador />;
    case 1:
      return <FormularioProyecto />;
    case 2:
      return <PageItems />;
    case 3:
      return <PageExcel  />;
    default:
      return null;
  }
};

const MultiStepForm = () => {
  const [cotizacion, setCotizacion] = useState(inforCotizacionInitialState);
  const [proyecto, setProyecto] = useState(infoProyectoInitialState);
  const [currentStep, setCurrentStep] = useState(0);
  const onChange = (value) => {
    console.log('onChange:', value);
    setCurrentStep(value);
  };

  // Funcion para avanzar al siguiente paso
  const next = () => {
    setCurrentStep(currentStep + 1);
  }

  const prev = () => setCurrentStep(currentStep - 1);
  
  return (
    <Provider value={{ cotizacion, setCotizacion, next, prev, proyecto, setProyecto }} >
      <Steps current={currentStep} navArrowColor="#ffff" size="small" onChange={onChange}>
        <Step title={"Tu Información"} />
        <Step title={"Información del Proyecto"} />
        <Step title={"Items de la Cotización"} />
        <Step title={"Revisión Cotizacion"} />
      </Steps>
      <div className="h-full flex justify-center items-center text-slate-800">
        {renderStep(currentStep)}
      </div>
    </Provider>
  );
};

export default MultiStepForm;