import React from "react";
import { Link } from "react-router-dom";
import { flowerCategories } from "../data/flowers";
import "../stylesheets/FeaturedFlowers.css";

// Map category IDs to image filenames
const categoryImages: Record<string, string> = {
  roses: "/img/jessie-daniella-QLuleNy8LMM-unsplash.jpg",
  lilies: "/img/stephanie-klepacki-JuzHyv0gCOI-unsplash.jpg",
  tulips: "/img/neelakshi-singh-_POpUzWMe_0-unsplash.jpg",
  mixed: "/img/robert-schwarz-O_2xTR6INkk-unsplash.jpg",
  sunflowers: "/img/JustBecause_BusinessCard1.jpeg",
  orchids: "/img/JustBecause_BusinessCard2.jpeg",
};

const FeaturedFlowers: React.FC = () => {
  // Separate custom category from the rest
  const regularCategories = flowerCategories.filter(
    (cat) => cat.id !== "custom"
  );
  const customCategory = flowerCategories.find((cat) => cat.id === "custom");

  return (
    <div className="featured-flowers">
      <div
        className="hero-section"
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
        <h1>Featured Flowers</h1>
        <p>Discover our most popular arrangements and seasonal favorites</p>
      </div>

      <div className="flowers-grid">
        {regularCategories.map((category) => (
          <Link
            to={`/order/${category.id}`}
            key={category.id}
            className="flower-category-card"
          >
            <div className="flower-image">
              <img
                src={
                  process.env.PUBLIC_URL +
                  (categoryImages[category.id] || category.image)
                }
                alt={category.name}
                className="flower-card-img"
              />
            </div>
            <div className="flower-info">
              <h2>{category.name}</h2>
              <p className="flower-description">{category.description}</p>
              <div className="flower-count">
                {category.flowers.length} arrangements available
              </div>
              <button className="view-arrangements">View Arrangements →</button>
            </div>
          </Link>
        ))}
      </div>

      {/* Custom Bouquets full-width card */}
      {customCategory && (
        <Link to="/order/custom" className="custom-bouquet-card">
          <div className="custom-bouquet-image">
            <img
              src={process.env.PUBLIC_URL + customCategory.image}
              alt={customCategory.name}
              className="flower-card-img"
            />
          </div>
          <div className="custom-bouquet-info">
            <h2>{customCategory.name}</h2>
            <p className="flower-description">{customCategory.description}</p>
            <button className="view-arrangements">
              Start Your Custom Order →
            </button>
          </div>
        </Link>
      )}

      <div className="seasonal-note">
        <h3>Seasonal Availability</h3>
        <p>
          Our flower selection varies throughout the year based on seasonal
          availability. Contact us for the most current selection and to discuss
          custom arrangements for your special occasions.
        </p>
      </div>
    </div>
  );
};

export default FeaturedFlowers;
