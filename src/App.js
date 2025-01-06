import './App.css';
import Generate from './components/Generator';
import Template from "./components/Template";
import CoverLetter from "./components/CoverLetter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
        <Routes>
          <Route path="/generate" element={<Generate />} />
          <Route path="/template" element={<Template />} />
          <Route path="/coverletter" element={<CoverLetter />} />
        </Routes>
    </div>
  );
}

export default App;
