import React, { useState } from "react";
import { format, isValid } from "date-fns";
import { es } from "date-fns/locale";

const formatFecha = (fechaArray) => {
  console.log("Fecha:", fechaArray);
  if (!Array.isArray(fechaArray) || fechaArray.length !== 6) {
    console.error("Invalid date array:", fechaArray);
    return "Fecha inválida";
  }
  const [year, month, day, hour, minute, second] = fechaArray;
  const date = new Date(year, month - 1, day, hour, minute, second);
  if (!isValid(date)) {
    console.error("Invalid date:", fechaArray);
    return "Fecha inválida";
  }
  return format(date, "d 'de' MMMM yyyy: h:mm a", { locale: es });
};

export default formatFecha;