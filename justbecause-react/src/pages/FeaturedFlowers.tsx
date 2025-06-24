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
};

const FeaturedFlowers: React.FC = () => {
  return (
    <div className="featured-flowers">
      <div className="hero-section">
        <h1>Featured Flowers</h1>
        <p>Discover our most popular arrangements and seasonal favorites</p>
      </div>

      <div className="flowers-grid">
        {flowerCategories.map((category) => (
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
              <p>{category.description}</p>
              <div className="flower-count">
                {category.flowers.length} arrangements available
              </div>
              <button className="view-arrangements">View Arrangements →</button>
            </div>
          </Link>
        ))}
      </div>

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
