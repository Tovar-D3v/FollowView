import React, { useEffect, useState } from "react";
import { Formik, Field } from "formik";
import {
  Button,
  Input,
  Dropdown,
  Select,
  InputNumber,
  Popconfirm,
  message,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import { FontSizeOutlined } from "@ant-design/icons";

const DescripcionElemento = ({ itemKey, numeroElemento, elementoKey }) => {
  return (
    <Formik>
      <div className="flex justify-between gap-2 w-full">
        <div className={`w-full mb-2 mt-2`}>
          <Field name={`descripcionNota-${itemKey}`}>
            {({ field }) => (
              <TextArea
                {...field}
                placeholder={`Descripcion o Nota del Elemento ${
                  numeroElemento
                }`}
                className=" w-full "
              />
            )}
          </Field>
        </div>
      </div>
    </Formik>
  );
};

export default DescripcionElemento;
