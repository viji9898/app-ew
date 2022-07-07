import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Homepage } from "./pages/Homepage";
import { NavBar } from "./components/Navbar/navBar";
import { Projects } from "./pages/Project";
import { QrCodes } from "./components/Navbar/qrCodes";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/qr-codes" element={<QrCodes />} />
      </Routes>
    </Router>
  );
}

export default App;
