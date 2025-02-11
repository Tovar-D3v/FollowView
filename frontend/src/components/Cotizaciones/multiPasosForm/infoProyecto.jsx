import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, Input, DatePicker, Select } from "antd";
import MultiStepFormContext from "./MultiStepFormContext";
import dayjs from "dayjs";

const { Option } = Select;

const FormularioProyecto = () => {
  const { proyecto, setProyecto, next, prev } = useContext(MultiStepFormContext);

  return (
    <Formik
      initialValues={{
        name_cliente: proyecto.name_cliente || "",
        correo_cliente: proyecto.correo_cliente || "",
        fechaEmision: proyecto.fechaEmision ? dayjs(proyecto.fechaEmision) : null,
        prefijo: proyecto.prefijo || "+57",
        celular_cliente: proyecto.celular_cliente || "",
        empresa: proyecto.empresa || "",
        departamento: proyecto.departamento || "",
        ciudad: proyecto.ciudad || "",
        direccion: proyecto.direccion || "",
        referencia: proyecto.referencia || "",
        proyecto: proyecto.proyecto || "",
      }}
      onSubmit={(values) => {
        setProyecto(values);
        next();
      }}
      validate={(values) => {
        const errors = {};
        // if (!values.name_cliente)
        //   errors.name_cliente = "El nombre es requerido";
        // if (!values.empresa) errors.empresa = "Empresa es requerida";
        // if (!values.fechaEmision)
        //   errors.fechaEmision = "Fecha de emisión es requerida";
        // if (!values.correo_cliente) {
        //   errors.correo_cliente = "Correo es requerido";
        // } else if (
        //   !values.correo_cliente.includes("@") ||
        //   !values.correo_cliente.includes(".")
        // ) {
        //   errors.correo_cliente = "Correo inválido";
        // }
        // if (!values.celular_cliente) errors.celular_cliente = "Celular es requerido";
        // if (!values.departamento) errors.departamento = "Departamento es requerido";
        // if (!values.ciudad) errors.ciudad = "Ciudad es requerida";
        // if (!values.direccion) errors.direccion = "Direccion es requerida";
        // if (!values.referencia) errors.referencia = "Referencia es requerida";
        // if (!values.proyecto) errors.proyecto = "Proyecto es requerido";
        return errors;
      }}
    >
      {({ handleSubmit, setFieldValue, errors }) => (
        <Form className="wrapper flex flex-col">
          <div className="flex justify-between gap-10">
            <div>
              <div
                className={`form__item ${
                  errors.name_cliente && "input__error"
                }`}
              >
                <label>Nombre Cliente *</label>
                <Field name="name_cliente">
                  {({ field }) => <Input {...field} />}
                </Field>
                <ErrorMessage
                  name="name_cliente"
                  component="p"
                  className="error__feedback"
                />
              </div>

              <div className={`form__item ${errors.empresa && "input__error"}`}>
                <label>Empresa *</label>
                <Field name="empresa">
                  {({ field }) => <Input {...field} />}
                </Field>
                <ErrorMessage
                  name="empresa"
                  component="p"
                  className="error__feedback"
                />
              </div>

              <div className={`form__item ${errors.correo_cliente && "input__error"}`}>
                <label>Correo *</label>
                <Field name="correo_cliente">
                  {({ field }) => <Input {...field} />}
                </Field>
                <ErrorMessage
                  name="correo_cliente"
                  component="p"
                  className="error__feedback"
                />
              </div>

              <div className={`form__item ${errors.celular_cliente && "input__error"}`}>
                <label>Celular *</label>
                <div className="flex gap-4">
                  <Field name="prefijo">
                    {({ field }) => (
                      <Select
                        {...field}
                        onChange={(value) => setFieldValue("prefijo", value)}
                        style={{ width: "25%" }}
                      >
                        <Option value="+57">+57</Option>
                        <Option value="+1">+1</Option>
                        <Option value="+52">+52</Option>
                      </Select>
                    )}
                  </Field>
                  <Field name="celular_cliente">
                    {({ field }) => (
                      <Input {...field} style={{ width: "70%" }} />
                    )}
                  </Field>
                </div>
                <ErrorMessage
                  name="celular_cliente"
                  component="p"
                  className="error__feedback"
                />
              </div>
            </div>

            <div className="w-[290px]">
              <div
                className={`form__item ${errors.departamento && "input__error"} flex justify-between gap-4`}
              >
                <div>
                  <label>Departamento *</label>
                  <Field name="departamento">
                    {({ field }) => (
                      <Input {...field} />
                    )}
                  </Field>
                </div>

                <div>
                  <label>Ciudad *</label>
                  <Field name="ciudad">
                    {({ field }) => (
                      <Input {...field} />
                    )}
                  </Field>
                </div>
              </div>

              <div
                className={`form__item ${errors.direccion && "input__error"}`}
              >
                <label>Direccion *</label>
                <Field name="direccion">
                  {({ field }) => <Input {...field} />}
                </Field>
                <ErrorMessage
                  name="direccion"
                  component="p"
                  className="error__feedback"
                />
              </div>

              <div
                className={`form__item ${errors.referencia && "input__error"}`}
              >
                <label>Referencia *</label>
                <Field name="referencia">
                  {({ field }) => <Input {...field} />}
                </Field>
                <ErrorMessage
                  name="referencia"
                  component="p"
                  className="error__feedback"
                />
              </div>

              <div
                className={`form__item ${errors.proyecto && "input__error"}`}
              >
                <label>Proyecto *</label>
                <Field name="proyecto">
                  {({ field }) => <Input {...field} />}
                </Field>
                <ErrorMessage
                  name="proyecto"
                  component="p"
                  className="error__feedback"
                />
              </div>
            </div>
          </div>

          <div className="form__item button__items d-flex justify-content-between">
            <Button type="default" onClick={prev}>
              Atras
            </Button>
            <Button type="primary" onClick={handleSubmit}>
              Siguiente
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormularioProyecto;
