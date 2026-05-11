import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeModeProvider } from "sage-nexus-ui";
import NexusShowcase from "./pages/NexusShowcase";

const App = () => {
  return (
    <ThemeModeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<NexusShowcase />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </ThemeModeProvider>
  );
};

export default App;
