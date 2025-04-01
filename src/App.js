import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Blog from "./Pages/Blog";
import Footer from "./components/Footer";
import "./App.css"; // Import the CSS file

function App() {
  return (
    <div className="App">
      <Navbar />
      
      {/* Apply margin-top to all content */}
      <div className="content">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
