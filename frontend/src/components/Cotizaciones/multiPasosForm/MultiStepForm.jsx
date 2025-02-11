import React, { useState } from "react";
import { Steps } from "antd";
import { Provider } from "./MultiStepFormContext";
import Review from "./Review";
import FormularioCotizador from "./infoCotizador";
import FormularioProyecto from "./infoProyecto";

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
    default:
      return null;
  }
};

const MultiStepForm = () => {
  const [cotizacion, setCotizacion] = useState(inforCotizacionInitialState);
  const [proyecto, setProyecto] = useState(infoProyectoInitialState);
  const [currentStep, setCurrentStep] = useState(0);

  // Funcion para avanzar al siguiente paso
  const next = () => {
    if (currentStep === 3) {
      setCurrentStep(0);
      setCotizacion(inforCotizacionInitialState);
      setProyecto(infoProyectoInitialState);
      return;
    }
    setCurrentStep(currentStep + 1);
  };

  const prev = () => setCurrentStep(currentStep - 1);
  
  return (
    <Provider value={{ cotizacion, setCotizacion, next, prev, proyecto, setProyecto }}>
      <Steps current={currentStep}>
        <Step title={"Tu Información"} />
        <Step title={"Información del Proyecto"} />
        <Step title={"Items de la Cotización"} />
        <Step title={"Revisión Cotizacion"} />
      </Steps>
      <div className="h-full flex justify-center items-center">{renderStep(currentStep)}</div>
    </Provider>
  );
};
export default MultiStepForm;
