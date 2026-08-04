import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/services" element={<h1>Services</h1>} />
        <Route path="/projects" element={<h1>Projects</h1>} />
        <Route path="/team" element={<h1>Team</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
    </>
  );
}

export default App;