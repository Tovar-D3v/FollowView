import * as React from "react"
import {
  LayoutList,
  WalletMinimal,
  Bug,
  GalleryVerticalEnd,
  AppWindow,
  Settings2,
  Receipt,
  LayoutDashboard,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Tovar",
    email: "w.tovar@utp.edu.co",
    avatar: "/public/admin.webp",
  },
  teams: [
    {
      name: "Chronos Lab",
      logo: GalleryVerticalEnd,
      plan: "Administrador",
    },
  ],
  navMain: [
    {
      title: "Panel de Control",
      url: "#",
      icon: LayoutDashboard,
      isActive: true,
      items: [
        {
          title: "Planta",
          url: "#",
        },
        {
          title: "Cotizaciones",
          url: "#",
        },
        {
          title: "Clientes",
          url: "#",
        },
        {
          title: "Inventarios",
          url: "#",
        }
      ]
    },
    {
      title: "Cotizaciones",
      url: "#",
      icon: WalletMinimal,
      items: [
        {
          title: "Nueva Cotización",
          url: "#",
        },
        {
          title: "Cotizaciones",
          url: "#",
        },
        {
          title: "Cotizaciones Pendientes",
          url: "#",
        },
      ],
    },
    {
      title: "Facturación",
      url: "#",
      icon: Receipt,
      items: [
        {
          title: "Nueva Factura",
          url: "#",
        },
        {
          title: "Facturas",
          url: "#",
        },
        {
          title: "Pagos",
          url: "#",
        },
        {
          title: "Cobros",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Proyectos",
      url: "#",
      icon: LayoutList,
    },
    {
      name: "Errores y Bugs",
      url: "#",
      icon: Bug,
    },
    {
      name: "Pagina Web",
      url: "#",
      icon: AppWindow,
    },
    {
      name: "Configuracion",
      url: "#",
      icon: Settings2,
    },
  ],
}

export function AppSidebar({
  ...props
}) {
  return (
    (<Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>)
  );
}
