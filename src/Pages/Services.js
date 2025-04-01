import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Heading */}
      <motion.h2
        className="text-center fw-bold display-4 mb-4"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
      >
        Our <span className="text-warning">Services</span>
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-center lead mb-5 px-3"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        We provide cutting-edge solutions in AI, Blockchain, IoT, and Digital
        Transformation. Our team specializes in creating futuristic technologies
        to revolutionize industries.
      </motion.p>

      {/* Marquee Animation */}
      <div className="overflow-hidden py-3">
        <marquee behavior="scroll" direction="left" scrollamount="12">
          <div className="d-flex gap-4" style={{ marginLeft: "50px" }}>
            {/* Service Cards */}
            {[
              {
                title: "AI & ML Solutions",
                image: "https://i.pinimg.com/736x/fc/e1/45/fce145057622dc90480ad240f39607a3.jpg",
                description:
                  "Developing intelligent AI models to automate and optimize processes.",
              },
              {
                title: "Blockchain Development",
                image: "https://i.pinimg.com/736x/12/d1/eb/12d1ebf4dd2842fafeb0577c83c4540f.jpg",
                description:
                  "Building secure and transparent blockchain solutions for various industries.",
              },
              {
                title: "IoT & Smart Devices",
                image: "https://i.pinimg.com/736x/f1/86/50/f1865099f611ff49c57363e8ea788fe7.jpg",
                description:
                  "Connecting the world with IoT-enabled devices and automation.",
              },
              {
                title: "Cloud Computing",
                image: "https://i.pinimg.com/736x/68/c6/9f/68c69fe0a00b2f5b3c3295c5b673e4d6.jpg",
                description:
                  "Scalable and secure cloud solutions for enterprises and startups.",
              },
              {
                title: "Cybersecurity Services",
                image: "https://i.pinimg.com/736x/69/e0/0b/69e00be05f7eb68fb22adfcff784f799.jpg",
                description:
                  "Protecting businesses with advanced security measures and risk management.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="card text-center shadow-lg border-0"
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                  minWidth: "320px",
                  maxWidth: "320px",
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "15px",
                  padding: "20px",
                  overflow: "hidden",
                  boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.1)",
                  transformOrigin: "center",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="mx-auto mb-3 card-img-top rounded"
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + index * 0.1,
                    ease: "easeInOut",
                  }}
                />
                <h5 className="fw-bold" style={{ color: "#fff" }}>
                  {service.title}
                </h5>
                <p
                  className="small m-0"
                  style={{
                    color: "#f1f1f1",
                    whiteSpace: "normal",
                  }}
                >
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </marquee>
      </div>
    </section>
  );
};

export default ServicesSection;
