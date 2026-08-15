import { Routes, Route } from "react-router-dom";
import DashboardPage from "./Pages/DashboardPage";
import JourneyPage from "./Pages/JourneyPage";
import VocabularyPage from "./Pages/VocabularyPage";
import SpeakingPage from "./Pages/SpeakingPage";
import ListeningPage from "./Pages/ListeningPage";
import ProgressPage from "./Pages/ProgressPage";
import AIPage from "./Pages/AIPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/journey" element={<JourneyPage />} />
      <Route path="/vocabulary" element={<VocabularyPage />} />
      <Route path="/speaking" element={<SpeakingPage />} />
      <Route path="/listening" element={<ListeningPage />} />
      <Route path="/progress" element={<ProgressPage />} />
      <Route path="/ai" element={<AIPage />} />
    </Routes>

  );
}

export default App;