import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export const columns = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Id
        <ArrowUpDown />
      </Button>
    ),
  },
  {
    accessorKey: "nombre_cotizacion",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Cotización
        <ArrowUpDown />
      </Button>
    ),
  },
  {
    accessorKey: "nombre_cliente",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Cliente
        <ArrowUpDown />
      </Button>
    ),
  },
  {
    accessorKey: "nombre_cotizador",
    header: ({ column }) => {
      const [showFilter, setShowFilter] = useState(false);

      return (
        <div className="flex items-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Cotizador
            <ArrowUpDown />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Abrir Menu</span>
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel> Filtrar por Cotizador </DropdownMenuLabel>
              <DropdownMenuLabel>
                <Input
                  placeholder="Filtrar..."
                  value={column.getFilterValue() ?? ""}
                  onChange={(event) =>
                    column.setFilterValue(event.target.value)
                  }
                  className="max-w-xs"
                />
              </DropdownMenuLabel>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
  {
    accessorKey: "proyecto",
    header: () => <div className="text-right">Proyecto</div>,
    cell: ({ row }) => {
      const proyecto = row.getValue("proyecto");
      return <div className="text-right">{proyecto}</div>;
    },
  },
  {
    accessorKey: "referencia",
    header: () => <div className="text-right">Referencia</div>,
    cell: ({ row }) => {
      const referencia = row.getValue("referencia");
      return <div className="text-right">{referencia}</div>;
    },
  },
  {
    accessorKey: "solicitud",
    header: () => <div className="text-right">Solicitud</div>,
    cell: ({ row }) => {
      const solicitud = row.getValue("solicitud");
      return <div className="text-right">{solicitud}</div>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const cotizacion = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Abrir Menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(cotizacion.id)}
            >
              Copiar ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Ver Versiones</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
