import React from "react";
import "../stylesheets/Footer.css";

const Footer: React.FC = () => (
  <footer className="site-footer">
    <div className="footer-content">
      <nav className="footer-nav" aria-label="Footer">
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
      </nav>
    </div>
    <div className="footer-bottom">
      <span>
        &copy; {new Date().getFullYear()} Just Because. All rights reserved.
      </span>
    </div>
  </footer>
);

export default Footer;
