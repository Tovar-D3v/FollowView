import React, { useContext, useState } from "react";
import ItemCotizacion from "./item-cotizacion";
import { Button, Input } from "antd";
import MultiStepFormContext from "../multiPasosForm/MultiStepFormContext";

const { Search } = Input;

const PageItems = () => {
  const {prev, next } = useContext(MultiStepFormContext);
  const [items, setItems] = useState([{}]);

  const agregarItem = () => {
    setItems([...items, {}]);
  };

  const eliminarItem = (index) => {
    if (index === 0) {
      return;
    }
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div
      className="flex gap-4 flex-col items-center justify-between"
      style={{ height: "81vh" }}
    >
      <div className="w-11/12 pt-2 pb-2 rounded-lg flex justify-between">
        <div className="flex gap-2 justify-center">
          <Button onClick={agregarItem}>Agregar Item</Button>
          <Button>Ver Informe</Button>
          <Button>Ver Factura</Button>
        </div>

        <div className="flex">
          <Search
            placeholder="Buscar Item"
            allowClear
            enterButton="Buscar"
            size="middle"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 h-full overflow-y-auto items-center">
        {items.map((item, index) => (
          <ItemCotizacion key={index} itemKey={index} eliminarItem={eliminarItem} />
        ))}
      </div>

      <div className="form__item button__items d-flex justify-content-between w-11/12 bg-white ">
        <Button type="default" onClick={prev}>
          Atras
        </Button>
        <Button type="primary" onClick={next}>
          Siguiente
        </Button>
      </div>
    </div>
  );
};

export default PageItems;