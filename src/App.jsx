import GlowCursor from "./components/GlowCursor";
// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
// import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
// import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

const App = () => {
  return (
    <Router>
      <GlowCursor/>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/skills" element={<Skills />} /> */}
            <Route path="/projects" element={<Projects />} />
            {/* <Route path="/experience" element={<Experience />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />/
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
