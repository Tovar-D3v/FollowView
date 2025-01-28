import { Folder, Forward, MoreHorizontal, Trash2 } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

export function NavProjects({
  projects
}) {
  const { isMobile } = useSidebar();
  const location = useLocation();

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Otras Opciones</SidebarGroupLabel>
      <SidebarMenu>
        {projects.map((item) => {
          const isActive = location.pathname.startsWith(item.url);
          return (
            <SidebarMenuItem key={item.name}>
              <NavLink
                to={item.url}
              >
                <SidebarMenuButton asChild>
                  <div className={isActive ? " bg-sidebar-accent" : "inactive-class"}>
                    <item.icon />
                    <span>{item.name}</span>
                  </div>
                </SidebarMenuButton>
              </NavLink>
            </SidebarMenuItem>
          );
        })}
        <SidebarMenuItem>
          <SidebarMenuButton className="text-sidebar-foreground/70">
            <MoreHorizontal className="text-sidebar-foreground/70" />
            <span>Mas</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
}