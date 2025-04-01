import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Fixed Navbar */}
      <motion.nav 
        className="navbar navbar-expand-lg navbar-dark bg-black fixed-top shadow-lg px-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="container-fluid">
          {/* Brand with Gradient */}
          <motion.div 
            className="navbar-brand fw-bold text-uppercase"
            style={{
              background: "linear-gradient(to right, #9333ea, #14b8a6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: "1.8rem",
            }}
          >
            Instrek Technology
          </motion.div>

          {/* Navbar Links for Large Screens */}
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-white fw-semibold" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fw-semibold" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fw-semibold" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fw-semibold" to="/blog">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Hamburger Button */}
          <button 
            className="navbar-toggler border-0" 
            onClick={() => setIsOpen(true)}
          >
            <FaBars className="text-white fs-3" />
          </button>
        </div>
      </motion.nav>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 bg-black bg-opacity-50"
          onClick={() => setIsOpen(false)}
          style={{ zIndex: 1040 }}
        ></div>
      )}

      {/* Right Sliding Sidebar */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        transition={{ duration: 0.3 }}
        className="position-fixed top-0 end-0 h-100 bg-dark shadow-lg px-4 py-5"
        style={{ width: "300px", zIndex: 1050 }}
      >
        {/* Close Button */}
        <button 
          className="btn btn-outline-light btn-sm mb-4" 
          onClick={() => setIsOpen(false)}
        >
          <FaTimes className="fs-4" />
        </button>

        {/* Sidebar Links */}
        <ul className="nav flex-column text-white">
          <li className="nav-item border-bottom py-2">
            <Link className="nav-link text-white fw-semibold" to="/" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li className="nav-item border-bottom py-2">
            <Link className="nav-link text-white fw-semibold" to="/about" onClick={() => setIsOpen(false)}>About</Link>
          </li>
          <li className="nav-item border-bottom py-2">
            <Link className="nav-link text-white fw-semibold" to="/services" onClick={() => setIsOpen(false)}>Services</Link>
          </li>
          <li className="nav-item border-bottom py-2">
            <Link className="nav-link text-white fw-semibold" to="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
          </li>
        </ul>
      </motion.div>
    </>
  );
};

export default Navbar;
