import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Just Because - Crafted with love for
        every bouquet
      </p>
    </footer>
  );
};

export default Footer;
