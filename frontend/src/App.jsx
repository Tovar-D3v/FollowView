import "./styles/index.css";
import Page from "./app/dashboard/page";
import LoginPage from "./app/login/page";
import NegociosPage from "./app/negocios/page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./app/dashboard/Layaout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/*" element={<DashboardLayout />}>
          <Route path="dashboard-planta" element={<Page />} />
          <Route path="negocios" element={<NegociosPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;