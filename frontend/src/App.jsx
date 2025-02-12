import "./styles/index.css";
import Page from "./app/dashboard/page";
import LoginPage from "./app/login/page";
import NegociosPage from "./app/negocios/page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./app/dashboard/Layaout";
import { AuthProvider } from "./context/AuthContext";
import MessagesPage from "./app/messages/page.jsx";
import TableCotizaciones from "./components/Cotizaciones/TableCotizaciones";
import { CotizacionesPage } from "./app/cotizaciones/page";
import { CotizacionesPendientesPage } from "./app/cotizacionesPendientes/page";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/*" element={<DashboardLayout />}>
            <Route path="dashboard-planta" element={<Page />} />
            <Route path="negocios" element={<NegociosPage />} />
            <Route path="chats" element={<MessagesPage />} />
            <Route path="cotizaciones" element={<CotizacionesPendientesPage />} />
            <Route path="pendientes/cotizaciones" element={<CotizacionesPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;