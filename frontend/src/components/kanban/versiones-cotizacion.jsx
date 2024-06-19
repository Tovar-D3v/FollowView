import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { obtenerVersionesSubversiones } from "@/services/CotizacionService"

export function AccordionDemo({ cotizacionId }) {

  <obtenerVersionesSubversiones cotizacionId={cotizacionId} />

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>COT-123123 V1...</AccordionTrigger>
        <AccordionContent>
          Subversiones de la version 1
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>COT-123123 V2...</AccordionTrigger>
        <AccordionContent>
          Subversiones de la version 1
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>COT-123123 V3...</AccordionTrigger>
        <AccordionContent>
          Subversiones de la version 1
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
