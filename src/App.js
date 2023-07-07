// Importing necessary React libraries and hooks
import React, { useState, useEffect } from "react";

// Importing components
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";

// Importing Router libraries
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

// ScrollToTop component for easy navigation
import ScrollToTop from "./components/ScrollToTop";

// Importing CSS files
import "./style.css";
import "./App.css";

// Importing Bootstrap CSS file
import "bootstrap/dist/css/bootstrap.min.css";

// App Component
function App() {

  // State for handling the loader
  const [load, upadateLoad] = useState(true);

  // useEffect to handle the preloader
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false); // update the state after 1.2 sec
    }, 1200);

    // Cleanup function to clear the timeout
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          {/* Routes for various components */}
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

// Exporting the App component
export default App;
