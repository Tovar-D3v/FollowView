"use client"

import { ChevronRight } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

export function NavMain({
  items
}) {
  const location = useLocation();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Plataforma</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          const isActive = location.pathname.startsWith(item.url);
          const hasActiveSubItem = item.items?.some((subItem) => location.pathname.startsWith(subItem.url));
          const itemIsActive = isActive || hasActiveSubItem;

          return (
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={false}
              className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <NavLink to={item.url} className={itemIsActive ? "bg-sidebar-accent" : ""}>
                    <SidebarMenuButton tooltip={item.title} isActive={itemIsActive}>
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                      {item.items && <ChevronRight
                        className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />}
                    </SidebarMenuButton>
                  </NavLink>
                </CollapsibleTrigger>
                {item.items && (
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items?.map((subItem) => {
                        const subIsActive = location.pathname.startsWith(subItem.url);
                        return (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton asChild>
                              <NavLink to={subItem.url} className={subIsActive ? "bg-sidebar-accent" : ""}>
                                <span>{subItem.title}</span>
                              </NavLink>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        );
                      })}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                )}
              </SidebarMenuItem>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}