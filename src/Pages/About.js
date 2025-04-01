import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutSection = () => {
  return (
    <section id="about" className="py-5" style={{ backgroundColor: "#000", color: "#fff" }}>
      {/* Heading Animation */}
      <motion.h2 
        className="text-center fw-bold display-4 mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        
      >
        About <span className="text-primary">Instrek Technologies</span>
      </motion.h2>

      {/* Description Animation */}
      <motion.p 
        className="text-center lead mb-5 px-3"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        style={{ textShadow: "0 0 10px cyan, 0 0 20px cyan" }} // Glowing effect
      >
        We are shaping the future with cutting-edge AI, Blockchain, and next-gen digital solutions. 
        Our mission is to make India AI-ready by driving strategic consulting, workforce training, and scalable tech solutions.
      </motion.p>

      {/* Marquee Sliding Effect */}
      <div className="overflow-hidden py-3">
        <marquee behavior="scroll" direction="left" scrollamount="15">
          <div className="d-flex gap-5" style={{ marginLeft: "50px" }}>  {/* Increased gap between cards */}
            
            {/* Card Component */}
            {[
              { title: "Innovative Solutions", image: "https://i.pinimg.com/736x/ed/8b/6d/ed8b6d1e7daa8dbb02aeb15027741741.jpg", description: "Pioneering AI, Blockchain, and automation for a smarter future." },
              { title: "Expert Team", image: "https://i.pinimg.com/736x/a8/08/dc/a808dc4abe948bf36d57d4caa90c0c4c.jpg", description: "Highly skilled professionals driving digital transformation." },
              { title: "Nationwide Impact", image: "https://i.pinimg.com/736x/ea/10/57/ea10577e9e1594a19cf0afe06bc4579e.jpg", description: "Solving real-world problems with scalable technology solutions." }
            ].map((card, index) => (
              <motion.div 
                key={index}
                className="card text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                style={{
                  minWidth: "320px",
                  maxWidth: "320px",
                  backgroundColor: "#111",
                  color: "#fff",
                  boxShadow: "0 0 20px rgba(0, 255, 255, 0.8)", // Glowing effect on card
                  borderRadius: "10px",
                  padding: "20px",
                  overflow: "hidden"
                }}
              >
                <motion.img 
                  src={card.image} 
                  alt={card.title} 
                  className="mx-auto mb-3 card-img-top rounded"
                  style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "10px" }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                />
                <h5 className="fw-bold text-white" style={{ textShadow: "0 0 10px cyan, 0 0 20px cyan" }}>
                  {card.title}
                </h5> {/* White title with glow */}
                <p className="text-white small m-0" style={{ whiteSpace: "normal", textShadow: "0 0 8px cyan" }}>
                  {card.description}
                </p>
              </motion.div>
            ))}
            
          </div>
        </marquee>
      </div>
    </section>
  );
};

export default AboutSection;
