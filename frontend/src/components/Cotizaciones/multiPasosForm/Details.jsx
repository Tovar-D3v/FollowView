import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, Input, InputNumber } from "antd";
import MultiStepFormContext from "./MultiStepFormContext";

const Details = () => {
  const { details, setDetails, next } = useContext(MultiStepFormContext);

  return (
    <Formik
      initialValues={details}
      onSubmit={(values) => {
        setDetails(values);
        next();
      }}
      validate={(values) => {
        const errors = {};
        if (!values.name) errors.name = "Name is required";
        if (values.age > 90) errors.age = "Are you sure you're human?";
        if (!values.profession) errors.profession = "Profession is required";
        if (/^[0-9]+$/.test(values.profession))
          errors.profession =
            "Profession does not require numbers or special characters";
        return errors;
      }}
    >
      {({ handleSubmit, errors }) => (
        <Form className="details__wrapper">
          <div className={`form__item ${errors.name && "input__error"}`}>
            <label>Name *</label>
            <Field name="name">
              {({ field }) => <Input {...field} />}
            </Field>
            <ErrorMessage name="name" component="p" className="error__feedback" />
          </div>
          <div className={`form__item ${errors.age && "input__error"}`}>
            <label>Age *</label>
            <Field name="age">
              {({ field }) => <InputNumber {...field} min={0} />}
            </Field>
            <ErrorMessage name="age" component="p" className="error__feedback" />
          </div>
          <div className={`form__item ${errors.profession && "input__error"}`}>
            <label>Profession *</label>
            <Field name="profession">
              {({ field }) => <Input {...field} />}
            </Field>
            <ErrorMessage name="profession" component="p" className="error__feedback" />
          </div>
          <div className="form__item button__items d-flex justify-content-end">
            <Button type="primary" onClick={handleSubmit}>
              Next
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Details;