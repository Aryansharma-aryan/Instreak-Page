import React from "react";
import { motion } from "framer-motion";


const HeroSection = () => {
  return (
    <>
      {/* Navbar Included */}
      

      {/* Hero Section */}
      <motion.header
        className="d-flex flex-column justify-content-center align-items-center text-center"
        style={{
          height: "100vh",
          width: "100%",
          background: "linear-gradient(45deg, #000000, #1a1a1a, #000000)",
          backgroundSize: "300% 300%",
          animation: "smokyBG 10s infinite alternate",
          color: "#fff",
          padding: "0 20px",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Gradient Title with Animation */}
        <motion.h1
          className="fw-bold gradient-text"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Shaping the Future with AI & Blockchain
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.p
          className="mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          style={{
            fontSize: "2rem",
            color: "#bbb",
            animation: "moveText 3s infinite ease-in-out alternate",
          }}
        >
          Empowering businesses with cutting-edge automation and digital solutions.
        </motion.p>

        {/* Button with Always-Visible Gradient Border */}
        <motion.a
          href="#services"
          className="btn mt-4 gradient-border-btn"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{
            background: "rgba(20, 184, 166, 0.2)",
          }}
        >
          Explore Our Services
        </motion.a>
      </motion.header>

      {/* Keyframes & Styles */}
      <style>
        {`
          @keyframes smokyBG {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          /* Moving Text Effect */
          @keyframes moveText {
            0% { transform: translateY(0); }
            100% { transform: translateY(-5px); }
          }

          /* Gradient Text */
          .gradient-text {
            font-size: 4.5rem;
            background: linear-gradient(90deg, #1e3a8a, #9333ea, #14b8a6);
            background-size: 200% 200%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: gradientMove 3s infinite alternate;
          }

          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }

          /* Always-Visible Gradient Border Button */
          .gradient-border-btn {
            padding: 18px 35px;
            font-size: 1.5rem;
            color: #fff;
            border-radius: 50px; /* Rounded Borders */
            background: transparent;
            transition: all 0.3s ease-in-out;
            position: relative;
            border: 3px solid ;
            
            border-image-slice: 1;
            box-shadow: 0px 0px 10px rgba(147, 51, 234, 0.5); /* Subtle Glow */
          }

          /* Button Hover Effect */
          .gradient-border-btn:hover {
            background: rgba(20, 184, 166, 0.1);
            box-shadow: 0px 0px 20px rgba(147, 51, 234, 0.7); /* Stronger Glow */
          }

          /* Responsive Adjustments */
          @media (max-width: 768px) {
            .gradient-text {
              font-size: 3.5rem;
            }
            p {
              font-size: 1.7rem;
            }
            .gradient-border-btn {
              font-size: 1.3rem;
              padding: 16px 30px;
              border-radius: 40px; /* Slightly Smaller Radius for Mobile */
            }
          }

          @media (max-width: 480px) {
            .gradient-text {
              font-size: 3rem;
            }
            p {
              font-size: 1.5rem;
            }
            .gradient-border-btn {
              font-size: 1.2rem;
              padding: 14px 25px;
              border-radius: 35px;
            }
          }
        `}
      </style>
    </>
  );
};

export default HeroSection;
