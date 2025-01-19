import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import About from "./Components/About";
import Project from "./Components/Project";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import Contact from "./Components/Contact";
import Certificate from "./Components/Certificate";
import Cv from "./Components/Cv";
import Footer from "./Components/Footer";

function App() {
  const location = useLocation(); // Get the current path

  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, rgba(7,1,41,1) 0%, rgba(84,53,161,1) 47%, rgba(2,0,36,1) 100%)",
        fontFamily: "Moranga, sans-serif",
      }}
      className="text-white"
    >
      {/* Conditionally render Navbar only on home route */}
      {location.pathname === "/" && <Navbar />}

      <Routes>
        {/* Only render the Body on home route */}
        <Route path="/" element={<Body />} />

        {/* Render the Certificate and Cv components only for their respective routes */}
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/dowloandcv" element={<Cv />} />
      </Routes>

      {/* Render other sections on every page, except /certificate and /dowloandcv */}
      {location.pathname !== "/certificate" && location.pathname !== "/dowloandcv" && (
        <div>
          <div id="about">
            <About />
          </div>
          <div id="projects">
            <Project />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="education">
            <Education />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </div>
      )}
      <Footer/>
    </div>
  );
}

export default App;
