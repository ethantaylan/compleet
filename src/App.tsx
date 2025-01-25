import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import { Home } from "./components/pages/home";
import { Team } from "./components/pages/team";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team/:teamId" element={<Team />} />
      </Routes>
    </BrowserRouter>
  );
}
