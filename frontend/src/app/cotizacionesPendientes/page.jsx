import React from "react";
import MultiStepForm from "@/components/Cotizaciones/multiPasosForm/MultiStepForm";

export function CotizacionesPendientesPage() {
    return (
        <div className="max-h-[89.8vh] flex-1 rounded-xl bg-white md:min-h-min px-5 py-5">
            <MultiStepForm />
        </div>
    );
}