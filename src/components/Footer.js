import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-5" style={{ backgroundColor: "#000" }}>
      <div className="container">
        <div className="row text-center text-md-start align-items-start">
          

         
          {/* Right Section - Newsletter */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase" style={{ color: "#14b8a6" }}>Stay Updated</h5>
            <p className="small text-gray-400">
              Subscribe to our newsletter for the latest insights on AI & Blockchain.
            </p>
            <form className="d-flex">
              <input
                type="email"
                className="form-control me-2"
                placeholder="Enter your email"
                style={{
                  background: "#222",
                  color: "#fff",
                  border: "2px solid #9333ea",
                }}
              />
              <button
                className="btn"
                style={{
                  background: "linear-gradient(90deg, #9333ea, #0dcaf0)",
                  color: "#fff",
                  borderRadius: "30px",
                  padding: "8px 15px",
                }}
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Right Section - Social Media */}
          <div className="col-md-2 d-flex flex-column align-items-center text-md-start">
            <h5 className="text-uppercase" style={{ color: "#14b8a6" }}>Follow Us</h5>
            <div className="d-flex gap-2">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="d-flex align-items-center justify-content-center rounded-circle"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#222",
                    color: "#fff",
                    transition: "all 0.3s",
                    border: "2px solid #9333ea",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = "linear-gradient(90deg, #9333ea, #0dcaf0)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "#222";
                  }}
                >
                  <Icon className="fs-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-secondary my-4" />

        {/* Bottom Section - Copyright & Legal Links */}
        <div className="text-center">
          <p className="mb-1 small text-gray-400">© 2025 Instrek Technologies. All Rights Reserved.</p>
          <p className="small">
            <a
              href="#"
              className="text-gray-400 text-decoration-none"
              style={{ transition: "color 0.3s" }}
              onMouseOver={(e) => (e.target.style.color = "#9333ea")}
              onMouseOut={(e) => (e.target.style.color = "#ccc")}
            >
              Privacy Policy
            </a>{" "}
            |{" "}
            <a
              href="#"
              className="text-gray-400 text-decoration-none"
              style={{ transition: "color 0.3s" }}
              onMouseOver={(e) => (e.target.style.color = "#9333ea")}
              onMouseOut={(e) => (e.target.style.color = "#ccc")}
            >
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
