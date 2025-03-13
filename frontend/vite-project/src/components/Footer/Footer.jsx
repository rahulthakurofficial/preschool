import React from "react";
import "./Footer.scss";
import { FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section about">
          <h2>Letzstepin</h2>
          <p>A place where learning meets fun! Providing quality education for kids in a joyful environment.</p>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p><FaMapMarkerAlt className="icon" />Pune</p>
          <p><FaPhoneAlt className="icon" /> +91 98765 43210</p>
          <p><FaEnvelope className="icon" /> rahuthakur.2314@gmail.com</p>
        </div>

        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><FaFacebookF className="icon" /></a>
            <a href="#"><FaTwitter className="icon" /></a>
            <a href="#"><FaInstagram className="icon" /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Letzstepin | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
