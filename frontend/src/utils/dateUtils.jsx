import { format, isValid } from "date-fns";
import { es } from "date-fns/locale";

export const formatFecha = (fecha) => {
  let date;
  if (Array.isArray(fecha) && fecha.length === 6) {
    const [year, month, day, hour, minute, second] = fecha;
    date = new Date(year, month - 1, day, hour, minute, second); // Meses en JavaScript son 0-indexados
  } else if (fecha instanceof Date) {
    date = fecha;
  } else {
    console.error("Invalid date:", fecha);
    return "Fecha inválida";
  }

  if (!isValid(date)) {
    console.error("Invalid date:", fecha);
    return "Fecha inválida";
  }
  return format(date, "d 'de' MMMM yyyy: h:mm a", { locale: es });
};