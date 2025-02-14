import React, { useState, useEffect } from "react";
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
import { NumberOutlined, OrderedListOutlined } from "@ant-design/icons";
import DescripcionElemento from "./descripcion-elemento";
import { da } from "date-fns/locale";

const ElementoCotizacion = ({ itemKey, elementoKey, eliminarElemento }) => {
  const [descripcion, setDescripcion] = useState(elementoKey === 0 ? [{}] : []);

  const agregarDescripcion = () => {
    setDescripcion([...descripcion, {}]);
  };

  const eliminarDescripcion = (index) => {
    setDescripcion(descripcion.filter((_, i) => i !== index));
  };

  const numeroElemento = elementoKey + 1;
  const items = [
    {
      key: "1",
      label: "Agregar Descripcion",
      onClick: agregarDescripcion,
    },
    {
      key: "2",
      label: "Eliminar Descripcion",
      danger: true,
      onClick: () => eliminarDescripcion(elementoKey),
    },
    {
      key: "3",
      label: "Ocultar Elemento",
    },
    {
      key: "4",
      label: "Eliminar Elemento",
      danger: true,
      disabled: elementoKey === 0,
      onClick: () => eliminarElemento(elementoKey),
    },
  ];

  return (
    <Formik>
      <div className="flex flex-col w-full items-center contenedor-elemento mt-2">
        <div className="flex justify-between gap-2 w-full">
          <div className={`w-fit mb-2`}>
            <label className=" text-xs mb-1">ELEMENTO</label>
            <Dropdown.Button
              menu={{
                items,
              }}
              style={{ width: "100%" }}
              name={`elemento-${itemKey}`}
            >
              {numeroElemento}
            </Dropdown.Button>
          </div>

          <div className={`w-5/12 mb-2`}>
            <label className=" text-xs mb-1">DESCRIPCION</label>
            <Field name={`descripcion-${itemKey}`}>
              {({ field }) => <Input {...field} />}
            </Field>
          </div>

          <div className={`w-2/12 mb-2`}>
            <label className=" text-xs mb-1">COSTO</label>
            <Field name={`costo-${itemKey}`}>
              {({ field }) => (
                <InputNumber
                  {...field}
                  defaultValue={0}
                  className=" w-full"
                  formatter={(value) =>
                    `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }
                  parser={(value) => value?.replace(/\$\s?|(,*)/g, "")}
                />
              )}
            </Field>
          </div>

          <div className={`w-1/12 mb-2`}>
            <label className=" text-xs mb-1">CANTIDAD</label>
            <Field name={`cantidad-${itemKey}`}>
              {({ field }) => (
                <InputNumber
                  {...field}
                  defaultValue={0}
                  className=" w-full"
                  addonAfter={<NumberOutlined />}
                />
              )}
            </Field>
          </div>

          <div className={`w-1/12 mb-2`}>
            <label className=" text-xs mb-1">DESCUENTO</label>
            <Field name={`descuento-${itemKey}`}>
              {({ field }) => (
                <InputNumber
                  {...field}
                  defaultValue={0}
                  className=" w-full"
                  formatter={(value) => `${value}%`}
                  parser={(value) => value?.replace("%", "")}
                />
              )}
            </Field>
          </div>

          <div className={`w-2/12 mb-2`}>
            <label className=" text-xs mb-1">TOTAL ITEM</label>
            <Field name={`totalItem-${itemKey}`}>
              {({ field }) => (
                <InputNumber
                  {...field}
                  defaultValue={0}
                  className=" w-full"
                  formatter={(value) =>
                    `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }
                  parser={(value) => value?.replace(/\$\s?|(,*)/g, "")}
                />
              )}
            </Field>
          </div>
        </div>

        {descripcion.map((_, index) => (
          <DescripcionElemento
            key={index}
            itemKey={itemKey}
            numeroElemento={numeroElemento}
            elementoKey={index}
          />
        ))}
        
      </div>
    </Formik>
  );
};

export default ElementoCotizacion;