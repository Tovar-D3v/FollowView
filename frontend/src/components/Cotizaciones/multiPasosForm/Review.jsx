import { Button, Col, Row } from "antd";
import React, { useContext } from "react";
import MultiStepFormContext from "./MultiStepFormContext";

const Review = () => {
  const { cotizacion, proyecto, next, prev } = useContext(MultiStepFormContext);
  return (
    <div className={"wrapper"}>
      <Row>
        <Col span={24}>
          <h1>Details</h1>
          <p>Name: {cotizacion.name}</p>
          <p>Age: {cotizacion.age}</p>
          <p>Profession: {cotizacion.profession}</p>
        </Col>
        <Col span={24}>
          <h1>Address</h1>
          <p>Address-1: {proyecto.address1}</p>
          {proyecto.address2 && <p>Address-2: {proyecto.address2}</p>}
          <p>City: {proyecto.city}</p>
          <div
            className={
              "form__item button__items d-flex justify-content-between"
            }
          >
            <Button type={"default"} onClick={prev}>
              Back
            </Button>
            <Button type={"primary"} onClick={next}>
              Confirm
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Review;
