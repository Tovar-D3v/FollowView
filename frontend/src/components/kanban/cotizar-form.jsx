import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { crearCotizacion } from "@/services/cotizacionService";
import { formatFecha } from "@/utils/dateUtils";
import { addDays } from "date-fns";

const CotizarForm = ({ open, onClose, data }) => {
  const [nombreCotizacion, setNombreCotizacion] = useState("");
  const [nombreVersion, setNombreVersion] = useState("");
  const [contacto, setContacto] = useState(data.nombreCliente || "");
  const [cotizante, setCotizante] = useState("");

  console.log("Data:", data);

  const handleSubmit = async () => {
    const cotizacion = {
      nombreCotizacion,
      version: nombreVersion,
      proyecto: data.numeroProyecto,
      clienteId: data.cliente,
      negocioId: data.id,
    };

    try {
      const result = await crearCotizacion(cotizacion);
      console.log("Cotización creada:", result);
      onClose();
    } catch (error) {
      console.error("Error al crear la cotización:", error);
    }
  };

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className="w-fit">
        <SheetHeader>
          <SheetTitle>Cotizar Proyecto</SheetTitle>
          <SheetDescription>
            Ingrese los datos para cotizar el proyecto seleccionado.
          </SheetDescription>
        </SheetHeader>

        <Tabs defaultValue="account" className="w-[440px] mt-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Cotizar</TabsTrigger>
            <TabsTrigger value="password">Versiones</TabsTrigger>
          </TabsList>

          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Cotizar</CardTitle>
                <CardDescription>
                  Ingrese los datos para continuar con la cotización.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="nombreCotizacion">Nombre Cotización</Label>
                  <Input
                    id="nombreCotizacion"
                    value={nombreCotizacion}
                    onChange={(e) => setNombreCotizacion(e.target.value)}
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="version">Versión</Label>
                  <Input
                    id="version"
                    value={nombreVersion}
                    onChange={(e) => setNombreVersion(e.target.value)}
                  />
                </div>

                <div className="flex justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="fechaCotizacion">Fecha Cotización</Label>
                    <Input
                      id="fechaCotizacion"
                      value={formatFecha(new Date())}
                      readOnly
                    />
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor="fechaLimite">Fecha Límite</Label>
                    <Input
                      id="fechaLimite"
                      value={formatFecha(addDays(new Date(), 15))}
                      readOnly
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <Label htmlFor="contacto">Contacto</Label>
                  <Input
                    id="contacto"
                    value={contacto}
                    onChange={(e) => setContacto(e.target.value)}
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="cotizante">Cotizante</Label>
                  <Input
                    id="cotizante"
                    value={cotizante}
                    onChange={(e) => setCotizante(e.target.value)}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleSubmit}>Crear</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Versiones</CardTitle>
                <CardDescription>
                  Seleccione una de las versiones creadas de la cotización.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">Current password</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">New password</Label>
                  <Input id="new" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save password</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
};

export default CotizarForm;