import React from "react";
import { motion } from "framer-motion";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import "bootstrap/dist/css/bootstrap.min.css";

const BlogPage = () => {
  // Sample Data for Insights Chart
  const chartData = {
    labels: ["AI", "Blockchain", "IoT", "Cloud", "Cybersecurity"],
    datasets: [
      {
        label: "Industry Growth (%)",
        data: [85, 78, 92, 88, 75],
        backgroundColor: ["#ff6b6b", "#feca57", "#1dd1a1", "#54a0ff", "#5f27cd"],
        borderRadius: 10,
      },
    ],
  };

  return (
    <div className="py-5" style={{ background: "#080d20", color: "#fff" }}>
      {/* Heading */}
      <motion.h2
        className="text-center fw-bold display-4 mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Latest <span style={{ color: "#ff6b6b" }}>Insights</span>
      </motion.h2>

      {/* Chart Section */}
      <div className="container mb-5">
        <motion.div
          className="p-4 rounded"
          style={{ background: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(10px)", borderRadius: "15px" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Bar data={chartData} />
        </motion.div>
      </div>

      {/* Blog Cards Section */}
      <div className="container d-flex flex-wrap justify-content-center gap-4">
        {[
          { title: "AI Transforming Industries", image: "https://i.pinimg.com/736x/e5/3c/01/e53c0121977a5f39adce90df5eb9c9ca.jpg" },
          { title: "Blockchain Innovations", image: "https://i.pinimg.com/736x/15/6c/26/156c26872caf8531729bbaccb3cc3b49.jpg" },
          { title: "IoT Revolution", image: "https://i.pinimg.com/736x/cf/55/4a/cf554aa52a101aa4ba5f81f65ae2e382.jpg" },
        ].map((blog, index) => (
          <motion.div
            key={index}
            className="card text-center p-3 shadow-lg border-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            style={{
              minWidth: "320px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              borderRadius: "15px",
              color: "#fff",
            }}
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="card-img-top rounded mb-3"
              style={{ height: "200px", objectFit: "cover", borderRadius: "10px" }}
            />
            <h5>{blog.title}</h5>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
