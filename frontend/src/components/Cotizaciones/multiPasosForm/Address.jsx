import React, { useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, Input } from "antd";
import MultiStepFormContext from "./MultiStepFormContext";

const Details = () => {
  const { address, setAddress, next, prev } = useContext(MultiStepFormContext);

  return (
    <Formik
      initialValues={address}
      onSubmit={(values) => {
        setAddress(values);
        next();
      }}
      validate={(values) => {
        const errors = {};
        if (!values.address1) errors.address1 = "Address is required";
        if (!values.city) errors.city = "City is required";
        return errors;
      }}
    >
      {({ handleSubmit }) => (
        <Form className="details__wrapper">
          <div className="form__item">
            <label>Address-1 *</label>
            <Field name="address1" as={Input} />
            <ErrorMessage name="address1" component="p" className="error__feedback" />
          </div>
          <div className="form__item">
            <label>Address-2</label>
            <Field name="address2" as={Input} />
          </div>
          <div className="form__item">
            <label>City *</label>
            <Field name="city" as={Input} />
            <ErrorMessage name="city" component="p" className="error__feedback" />
          </div>
          <div className="form__item button__items d-flex justify-content-between">
            <Button type="default" onClick={prev}>
              Back
            </Button>
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