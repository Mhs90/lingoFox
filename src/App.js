import SideBar from "./components/SideBar";
import DashboardPage from "./Pages/DashboardPage";
import { Routes, Route } from "react-router-dom";
import JourneyPage from "./Pages/JourneyPage/JourneyPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/journey" element={<JourneyPage />} />
    </Routes>

  );
}

export default App;