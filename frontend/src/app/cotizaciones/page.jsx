import React from "react";
import DataTableDemo from "@/components/Cotizaciones/TableCotizaciones";


export function CotizacionesPage() {
    return (
        <div className="max-h-[87vh] flex-1 rounded-xl bg-muted/50 md:min-h-min px-5 py-5 mt-4">
            <DataTableDemo />
        </div>
    );
} 
