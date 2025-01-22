import "./styles/index.css"
import Page from "./app/dashboard/page"
import LoginPage from "./app/login/page";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { DndProvider } from "react-dnd";


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/*" element={
            <Page />
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App
