import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Layout/Navbar";
import Home from "./Screen/Home";
import About from "./Screen/About";
import Stack from "./Screen/Stack";
import Projects from "./Screen/Projects";
import Contact from "./Screen/Contact";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-[#F9FAFB]">
        <Navbar />
        <main className="flex-1 p-6 ml-[280px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/stack" element={<Stack />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;