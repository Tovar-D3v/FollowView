import React from "react";
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
import {
  NumberOutlined,
  OrderedListOutlined,
} from "@ant-design/icons";

const ElementoCotizacion = ({itemKey}) => {
  return (
    <Formik>
      <div className="flex justify-between gap-2 w-full">
        <div className={`w-1/12 mb-2`}>
          <label className=" text-xs mb-1">ELEMENTO</label>
          <Field name={`elemento-${itemKey}`}>
            {({ field }) => (
              <Input {...field} addonAfter={<OrderedListOutlined />} />
            )}
          </Field>
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
    </Formik>
  );
};

export default ElementoCotizacion;
