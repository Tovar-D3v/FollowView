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
import TextArea from "antd/es/input/TextArea";
import {
  FontSizeOutlined,
} from "@ant-design/icons";
import ElementoCotizacion from "./elemento-cotizacion";

const { Option } = Select;

const confirm = (index, eliminarItem) => {
  message.success("Item Eliminado");
  eliminarItem(index);
};

const cancel = () => {
  message.error("Cancelado");
};
8
const items = [
  {
    key: "1",
    label: "Partes Internas",
  },
  {
    key: "2",
    label: "Partes Externas",
  },
  {
    key: "3",
    label: "Cobre",
  },
  {
    key: "4",
    label: "Duplicar Item",
  },
];

const ItemCotizacion = ({ itemKey, eliminarItem }) => {
  const numeroItem = itemKey + 1;
  const [elementos, setElementos] = useState([{}]);

  const agregarElemento = () => {
    setElementos([...elementos, {}]);
  };

  const eliminarElemento = (index) => {
    if (index === 0) {
      return;
    }
    setElementos(elementos.filter((_, i) => i !== index));
  };

  return (
    <Formik>
      <div
        className=" w-11/12 border-solid border-[1px] border-slate-300 p-4 rounded-xl"
        style={{ background: "var(--smart-surface)" }}
      >
        <div className="flex justify-between gap-2">
          <div className={`w-3/6 mb-2`}>
            <label className=" text-xs mb-1">TITULO ITEM {numeroItem}</label>
            <Field name={`name-${itemKey}`}>
              {({ field }) => (
                <Input {...field} addonAfter={<FontSizeOutlined />} />
              )}
            </Field>
          </div>

          <div className="flex gap-2 w-2/6">
            <div className={`w-3/6 mb-2`}>
              <label className=" text-xs mb-1">TAGS</label>
              <div className="flex gap-4">
                <Field name={`prefijo-${itemKey}`}>
                  {({ field }) => (
                    <Select
                      {...field}
                      onChange={(value) => setFieldValue(`prefijo-${itemKey}`, value)}
                      className=" w-full"
                    >
                      <Option value="+57">+57</Option>
                      <Option value="+1">+1</Option>
                      <Option value="+52">+52</Option>
                    </Select>
                  )}
                </Field>
              </div>
            </div>

            <div className={`w-3/6 mb-2`}>
              <label className=" text-xs mb-1">COSTO TOTAL</label>
              <Field name={`costoTotal-${itemKey}`}>
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
        </div>

        {elementos.map((elemento, index) => (
          <ElementoCotizacion key={index} itemKey={itemKey} elementoKey={index} eliminarElemento={eliminarElemento}/>
        ))}

        <div className="flex justify-end gap-2 w-full mt-2">
          <Popconfirm
            title="Eliminar Item"
            description="Estas Segurod de que quieres eliminar este Item?"
            onConfirm={() => confirm(itemKey, eliminarItem)}
            onCancel={cancel}
            okText="Si"
            cancelText="No"
            disabled={itemKey === 0}
          >
            <Button danger>Eliminar Item</Button>
          </Popconfirm>

          <Dropdown.Button
            menu={{
              items,
            }}
            className="w-fit"
            onClick={agregarElemento}
          >
            Agregar Elemento
          </Dropdown.Button>
        </div>
      </div>
    </Formik>
  );
};

export default ItemCotizacion;