import React from "react";
import { Flower } from "../types";
import "./FeaturedFlowers.css";

const FeaturedFlowers: React.FC = () => {
  // Sample flower data - in a real app, this would come from an API
  const flowers: Flower[] = [
    {
      id: 1,
      name: "Romantic Roses",
      description: "Perfect for expressing love and affection",
      image: "/img/JustBecause_BusinessCard1.jpeg",
      alt: "Beautiful red roses arrangement",
    },
    {
      id: 2,
      name: "Elegant Bouquets",
      description: "Sophisticated arrangements for any occasion",
      image: "/img/JustBecause_BusinessCard2.jpeg",
      alt: "Elegant mixed flower bouquet",
    },
    {
      id: 3,
      name: "Spring Tulips",
      description: "Bright and cheerful tulips to welcome spring",
      image: "/img/JustBecause_BusinessCard1.jpeg",
      alt: "Colorful tulip arrangement",
    },
    {
      id: 4,
      name: "Classic Lilies",
      description: "Timeless beauty with a heavenly fragrance",
      image: "/img/JustBecause_BusinessCard2.jpeg",
      alt: "White lily bouquet",
    },
    {
      id: 5,
      name: "Mixed Garden",
      description: "A delightful mix of seasonal flowers",
      image: "/img/JustBecause_BusinessCard1.jpeg",
      alt: "Mixed garden flower arrangement",
    },
    {
      id: 6,
      name: "Sunshine Daisies",
      description: "Bright and cheerful daisies to brighten any day",
      image: "/img/JustBecause_BusinessCard2.jpeg",
      alt: "Yellow daisy bouquet",
    },
  ];

  return (
    <div className="featured-flowers-page">
      <section className="featured-flowers">
        <h2>Featured Flowers</h2>
        <p>
          Discover our most popular arrangements, each crafted with care and
          attention to detail.
        </p>

        <div className="flower-gallery">
          {flowers.map((flower) => (
            <div key={flower.id} className="flower">
              <img src={flower.image} alt={flower.alt} loading="lazy" />
              <h3>{flower.name}</h3>
              <p>{flower.description}</p>
              <button className="order-button">Order This Arrangement</button>
            </div>
          ))}
        </div>
      </section>

      <section className="custom-arrangements">
        <h2>Custom Arrangements</h2>
        <p>
          Don't see exactly what you're looking for? We specialize in creating
          custom arrangements tailored to your specific needs and preferences.
        </p>
        <div className="custom-features">
          <div className="feature">
            <h3>🎨 Personalized Design</h3>
            <p>Work with our florists to create the perfect arrangement</p>
          </div>
          <div className="feature">
            <h3>🌺 Seasonal Selection</h3>
            <p>We use the freshest seasonal flowers available</p>
          </div>
          <div className="feature">
            <h3>📦 Special Delivery</h3>
            <p>
              Professional delivery service to ensure your flowers arrive
              perfectly
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedFlowers;
