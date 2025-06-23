import React, { useState } from "react";
import { OrderForm } from "../types";
import "../stylesheets/About.css";

const About: React.FC = () => {
  const [formData, setFormData] = useState<OrderForm>({
    name: "",
    email: "",
    message: "",
    flowerType: "",
    quantity: 1,
    deliveryDate: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the order to your backend
    console.log("Order submitted:", formData);
    alert("Thank you for your order! We will contact you soon.");
    setFormData({
      name: "",
      email: "",
      message: "",
      flowerType: "",
      quantity: 1,
      deliveryDate: "",
    });
  };

  return (
    <div className="about-page">
      <section className="about-content">
        <h2>About Just Because</h2>
        <p>
          We believe in the beauty of spontaneous gestures. Just Because exists
          to make every occasion memorable with our carefully crafted floral
          arrangements.
        </p>
        <p>
          Our passion for flowers goes beyond just arranging them - we create
          moments that last a lifetime. Every bouquet tells a story, and we're
          here to help you tell yours.
        </p>
      </section>

      <section className="order-form">
        <h2>Place an Order!</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="flowerType">Flower Type</label>
            <select
              id="flowerType"
              name="flowerType"
              value={formData.flowerType}
              onChange={handleInputChange}
            >
              <option value="">Select a flower type</option>
              <option value="roses">Roses</option>
              <option value="tulips">Tulips</option>
              <option value="lilies">Lilies</option>
              <option value="mixed">Mixed Bouquet</option>
              <option value="custom">Custom Arrangement</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              value={formData.quantity}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="deliveryDate">Delivery Date</label>
            <input
              type="date"
              id="deliveryDate"
              name="deliveryDate"
              value={formData.deliveryDate}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Special Instructions *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={4}
            />
          </div>

          <button type="submit">Send Order</button>
        </form>
      </section>
    </div>
  );
};

export default About;
