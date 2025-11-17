import React from 'react';
import './Footer.css';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3>TELCO EGYPT</h3>
            <p>
              Leading provider of telecommunications and ICT solutions in Egypt,
              delivering innovative technology solutions for modern businesses.
            </p>
            <div className="social-links">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About Us</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a></li>
              <li><a href="#partners" onClick={(e) => { e.preventDefault(); scrollToSection('partners'); }}>Partners</a></li>
              <li><a href="#clients" onClick={(e) => { e.preventDefault(); scrollToSection('clients'); }}>Clients</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Our Services</h4>
            <ul>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>PA/PAVA Systems</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Infrastructure & Networks</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>TV Signal Distribution</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Hospitality TV Systems</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact Info</h4>
            <ul>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>6 A Rd 283, New Maadi, Cairo, Egypt</span>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <a href="tel:+201064422277">+20 106 442 2277</a>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <a href="mailto:sales@telco-egypt.net">sales@telco-egypt.net</a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Get In Touch</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Telco Egypt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
