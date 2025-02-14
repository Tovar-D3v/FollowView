import * as React from "react";
import {
  LayoutList,
  WalletMinimal,
  Bug,
  FlaskConical,
  AppWindow,
  Settings,
  ReceiptText,
  LayoutDashboard,
  Package,
  MessagesSquare
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const initialData = {
  user: {
    name: "Tovar",
    email: "w.tovar@utp.edu.co",
    avatar: "/admin.webp",
  },
  teams: [
    {
      name: "Chronos Lab",
      logo: FlaskConical,
      plan: "Administrador",
    },
  ],
  navMain: [
    {
      title: "Panel de Control",
      icon: LayoutDashboard,
      items: [
        {
          title: "Cotizaciones",
          url: "/dashboard-planta",
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
      icon: WalletMinimal,
      items: [
        {
          title: "Cotizaciones",
          url: "/cotizaciones",
        },
        {
          title: "Cotizaciones Pendientes",
          url: "/pendientes/cotizaciones",
        },
      ],
    },
    {
      title: "Facturación",
      url: "/facturacion",
      icon: ReceiptText,
      items: [
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
    {
      title: "Negocios",
      url: "/negocios",
      icon: LayoutList,
    },
    {
      title: "Inventario",
      url: "/inventario",
      icon: Package,
    },
    {
      title: "Chats",
      url: "/chats",
      icon: MessagesSquare,
    },
    {
      title: "Configuracion",
      url: "/configuracion",
      icon: Settings,
    },
  ],
  projects: [
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
  ],
};

export function AppSidebar({ ...props }) {
  const [data, setData] = React.useState(initialData);

  const handleNavClick = (title) => {
    const updatedNavMain = data.navMain.map((item) => ({
      ...item,
      isActive: item.title === title,
    }));
    const updatedProjects = data.projects.map((project) => ({
      ...project,
      isActive: project.name === title,
    }));
    setData({
      ...data,
      navMain: updatedNavMain,
      projects: updatedProjects,
    });
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} onNavClick={handleNavClick} />
        <NavProjects projects={data.projects} onNavClick={handleNavClick} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}