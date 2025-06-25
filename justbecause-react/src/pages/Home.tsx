import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Home.css";

const Home: React.FC = () => {
  return (
    <div className="home">
      <section
        className="hero"
        style={{
          background: `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url(${
            process.env.PUBLIC_URL +
            "/img/jessie-daniella-QLuleNy8LMM-unsplash.jpg"
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-sticker">
          <h2>Welcome to Just Because</h2>
          <p>Where every moment becomes a beautiful memory</p>
          <Link to="/featured-flowers" className="cta-button">
            Explore Our Flowers
          </Link>
        </div>
      </section>

      <section className="featured-preview">
        <h2>Featured Flowers</h2>
        <div className="flower-preview">
          <div className="flower-card">
            <img
              src={
                process.env.PUBLIC_URL +
                "/img/jessie-daniella-QLuleNy8LMM-unsplash.jpg"
              }
              alt="Romantic Roses bouquet"
              className="flower-card-img"
            />
            <h3>Romantic Roses</h3>
            <p>Perfect for expressing love and affection</p>
          </div>
          <div className="flower-card">
            <img
              src={
                process.env.PUBLIC_URL +
                "/img/stephanie-klepacki-JuzHyv0gCOI-unsplash.jpg"
              }
              alt="Elegant flower bouquet"
              className="flower-card-img"
            />
            <h3>Elegant Bouquets</h3>
            <p>Sophisticated arrangements for any occasion</p>
          </div>
        </div>
        <Link to="/featured-flowers" className="view-all-button">
          View All Flowers
        </Link>
      </section>

      <section className="about-preview">
        <h2>About Just Because</h2>
        <p>
          We believe in the beauty of spontaneous gestures. Just Because exists
          to make every occasion memorable with our carefully crafted floral
          arrangements.
        </p>
        <Link to="/about" className="learn-more-button">
          Learn More About Us
        </Link>
      </section>
    </div>
  );
};

export default Home;
