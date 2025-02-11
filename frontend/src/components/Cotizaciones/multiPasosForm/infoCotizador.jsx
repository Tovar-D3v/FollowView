import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, Input, DatePicker, Select } from "antd";
import MultiStepFormContext from "./MultiStepFormContext";
import dayjs from "dayjs";

const { Option } = Select;

const FormularioCotizador = () => {
  const { cotizacion, setCotizacion, next } = useContext(MultiStepFormContext);

  return (
    <Formik
      initialValues={{
        name: cotizacion.name || '',
        correo: cotizacion.correo || '',
        fechaEmision: cotizacion.fechaEmision ? dayjs(cotizacion.fechaEmision) : null,
        prefijo: cotizacion.prefijo || '+57',
        celular: cotizacion.celular || '',
      }}
      onSubmit={(values) => {
        setCotizacion(values);
        next();
      }}
      validate={(values) => {
        const errors = {};
        // if (!values.name) errors.name = "El nombre es requerido";
        // if (!values.fechaEmision) errors.fechaEmision = "Fecha de emisión es requerida";
        // if (!values.correo) {
        //   errors.correo = "Correo es requerido";
        // } else if (!values.correo.includes("@") || !values.correo.includes(".")) {
        //   errors.correo = "Correo inválido";
        // }
        // if (!values.celular) errors.celular = "Celular es requerido";
        return errors;
      }}
    >
      {({ handleSubmit, setFieldValue, errors }) => (
        <Form className="wrapper flex flex-col">
          <div className={`form__item ${errors.name && "input__error"}`}>
            <label>Nombre Cotizador *</label>
            <Field name="name">
              {({ field }) => <Input {...field} />}
            </Field>
            <ErrorMessage name="name" component="p" className="error__feedback" />
          </div>

          <div className={`form__item ${errors.correo && "input__error"}`}>
            <label>Correo *</label>
            <Field name="correo">
              {({ field }) => <Input {...field} />}
            </Field>
            <ErrorMessage name="correo" component="p" className="error__feedback" />
          </div>

          <div className={`form__item ${errors.fechaEmision && "input__error"}`}>
            <label>Fecha de emisión *</label>
            <Field name="fechaEmision">
              {({ field }) => (
                <DatePicker
                  {...field}
                  format="YYYY-MM-DD"
                  onChange={(date, dateString) => setFieldValue("fechaEmision", date)}
                  style={{ width: "100%" }}
                  placeholder="Selecciona una fecha"
                />
              )}
            </Field>
            <ErrorMessage name="fechaEmision" component="p" className="error__feedback" />
          </div>

          <div className={`form__item ${errors.celular && "input__error"}`}>
            <label>Celular *</label>
            <div className="flex gap-4">
              <Field name="prefijo">
                {({ field }) => (
                  <Select
                    {...field}
                    onChange={(value) => setFieldValue("prefijo", value)}
                    style={{ width: '25%' }}
                  >
                    <Option value="+57">+57</Option>
                    <Option value="+1">+1</Option>
                    <Option value="+52">+52</Option>
                  </Select>
                )}
              </Field>
              <Field name="celular">
                {({ field }) => <Input {...field} style={{ width: '70%' }} />}
              </Field>
            </div>
            <ErrorMessage name="celular" component="p" className="error__feedback" />
          </div>

          <div className="form__item button__items d-flex justify-content-end">
            <Button type="primary" onClick={handleSubmit}>
              Siguiente
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormularioCotizador;