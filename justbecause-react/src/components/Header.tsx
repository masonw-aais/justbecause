import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../stylesheets/Header.css";

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>Just Because...</h1>
      <p>Your local florist for every special moment.</p>
      <nav>
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link
          to="/featured-flowers"
          className={location.pathname === "/featured-flowers" ? "active" : ""}
        >
          Featured Flowers
        </Link>
        <Link
          to="/about"
          className={location.pathname === "/about" ? "active" : ""}
        >
          About Us
        </Link>
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "active" : ""}
        >
          Contact Us
        </Link>
      </nav>
    </header>
  );
};

export default Header;
