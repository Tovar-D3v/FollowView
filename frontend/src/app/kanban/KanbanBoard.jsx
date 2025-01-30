import React from "react";
import { Kanban } from "smart-webcomponents-react/kanban";
import "smart-webcomponents-react/source/styles/smart.default.css";
import useWebSocket from "@/hooks/use-websocket";
import { Settings } from "lucide-react";

const WS_URL = "ws://localhost:8081/ws/negocios";

const kanbanSettings = {
  collapsible: true,
  editable: true,
  columnActions: true,
  columnEditMode: 'menu',
  columnSummary: true,
  columnColors: true,
  columnColorEntireSurface: true,
  allowColumnEdit: true,
  allowColumnReorder: true,
  taskActions: true,
  taskDue: true,
  taskSubtasks: true,
  taskComments: true,
  currentUser: 0,
  taskProgress: false,
  taskPriority: true,
  addNewButton: true
};

const columns = [
  { label: "Nuevas", dataField: "nuevas", allowAdd: true },
  { label: "Propuestas", dataField: "propuestas", allowAdd: true },
  { label: "Asignadas", dataField: "asignada", allowAdd: true },
  { label: "Finalizadas", dataField: "finalizadas", allowAdd: true, collapsed: true },
  { label: "Perdidas", dataField: "perdidas", allowAdd: true, collapsed: true }
];

const KanbanBoard = () => {
  const negocios = useWebSocket(WS_URL);
  return (
    <Kanban
      id="kanban"
      {...kanbanSettings}
      dataSource={negocios}
      columns={columns}
    />
  );
};

export default KanbanBoard;