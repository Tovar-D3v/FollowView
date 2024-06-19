import React, { useEffect, useState } from "react";
import ReactDOMServer from "react-dom/server";
import { Kanban } from "smart-webcomponents-react/kanban";
import "smart-webcomponents-react/source/styles/smart.default.css";
import useWebSocket from "@/hooks/use-websocket";
import "../../styles/kanban.css";
import CardPropuestas from "@/components/kanban/card-propuestas";
import Cards from "@/components/kanban/cards";
import CotizarForm from "@/components/kanban/cotizar-form";
import { Skeleton } from "@/components/ui/skeleton";

const WS_URL = "ws://192.168.3.76:8081/ws/negocios";

const getTemplate = (data) => {
  if (typeof data !== "object" || typeof data.status !== "string") {
    console.error("Invalid data:", data);
    return "";
  }

  if (data.status === "propuestas") {
    return ReactDOMServer.renderToString(<CardPropuestas data={data} />);
  } else {
    return ReactDOMServer.renderToString(<Cards data={data} />);
  }
};

const kanbanSettings = {
  collapsible: true,
  columnSummary: true,
  columnColors: true,
  columnColorEntireSurface: true,
  taskPriority: true,
  textTemplate: (settings) => {
    if (settings && settings.data) {
      settings.template = getTemplate(settings.data);
    } else {
      console.error("Invalid settings data:", settings);
      settings.template = "";
    }
  },
};

const columns = [
  { label: "Nuevas", dataField: "nuevas", allowAdd: true, color: "#DD5467" },
  {
    label: "Propuestas",
    dataField: "propuestas",
    allowAdd: true,
    color: "#8E24AA",
  },
  {
    label: "Asignadas",
    dataField: "asignada",
    allowAdd: true,
    color: "#039BE5",
  },
  {
    label: "Finalizadas",
    dataField: "finalizadas",
    allowAdd: true,
    collapsed: true,
    color: "#33B679",
  },
  {
    label: "Perdidas",
    dataField: "perdidas",
    allowAdd: true,
    collapsed: true,
    color: "red",
  },
];

const KanbanBoard = () => {
  const negocios = useWebSocket(WS_URL);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleTaskDoubleClick = (event) => {
    const taskStatus = event.detail?.value?.status;
    if (taskStatus === "propuestas") {
        console.log("🟢 Abriendo CotizarForm para:", event.detail.value);
        setSelectedTask(event.detail.value);
        setIsSheetOpen(true);
    }
  };

  const handleCloseForm = () => {
    setIsSheetOpen(false);
    setSelectedTask(null);
  };

  useEffect(() => {
    if (negocios.length > 0) {
      setIsLoading(false);
    }
  }, [negocios]);

  return (
    <>
      {isLoading ? (
        <Skeleton className="w-[100px] h-[20px] rounded-full" />
      ) : (
        <Kanban
          id="kanban"
          {...kanbanSettings}
          dataSource={negocios}
          columns={columns}
          editable={false}
          onTaskDoubleClick={handleTaskDoubleClick}
        />
      )}

      {isSheetOpen && (
        <CotizarForm
          open={isSheetOpen}
          data={selectedTask}
          onClose={handleCloseForm}
        />
      )}
    </>
  );
};

export default KanbanBoard;