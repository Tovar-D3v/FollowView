import React from "react";
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

const CotizarForm = ({ open, onClose, data }) => {
  if (!data) return null;

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
                  <Label htmlFor="name">Nombre Cotizacion</Label>
                  <Input id="name" />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="version">Version</Label>
                  <Input id="version" />
                </div>

                <div className=" flex justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="version">Fecha Cotizacion</Label>
                    <Input id="version" />
                  </div>
                  
                  <div className="space-y-1">
                    <Label htmlFor="version">Fecha Limite</Label>
                    <Input id="version" />
                  </div>
                </div>

                <div className="space-y-1">
                  <Label htmlFor="version">Contacto</Label>
                  <Input id="version" />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="version">Cotizante</Label>
                  <Input id="version" />
                </div>

              </CardContent>
              <CardFooter>
                <Button>Crear</Button>
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
