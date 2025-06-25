import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Flower,
  FlowerCategory,
  IndividualFlower,
  OrderDetails,
} from "../types";
import { individualFlowers, getCategoryById } from "../data/flowers";
import "../stylesheets/Order.css";

const Order: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();

  const [orderDetails, setOrderDetails] = useState<OrderDetails>({
    customFlowers: [],
    quantity: 1,
    deliveryDate: "",
    specialInstructions: "",
    budget: 50,
  });

  const [selectedCategory, setSelectedCategory] =
    useState<FlowerCategory | null>(null);
  const [selectedFlower, setSelectedFlower] = useState<Flower | null>(null);
  const [showCustomSelection, setShowCustomSelection] = useState(false);
  const [selectedCustomFlowers, setSelectedCustomFlowers] = useState<
    IndividualFlower[]
  >([]);
  const [customFlowerQuantities, setCustomFlowerQuantities] = useState<{
    [id: string]: number;
  }>({});

  useEffect(() => {
    if (categoryId) {
      const category = getCategoryById(categoryId);
      setSelectedCategory(category || null);
    }
  }, [categoryId]);

  const handleFlowerSelect = (flower: Flower) => {
    setSelectedFlower(flower);
    setShowCustomSelection(false);
  };

  const handleCustomFlowerToggle = (flower: IndividualFlower) => {
    setSelectedCustomFlowers((prev) => {
      const isSelected = prev.find((f) => f.id === flower.id);
      if (isSelected) {
        return prev.filter((f) => f.id !== flower.id);
      } else {
        return [...prev, flower];
      }
    });
  };

  const handleQuantityChange = (flowerId: string, value: number) => {
    setCustomFlowerQuantities((prev) => ({
      ...prev,
      [flowerId]: Math.max(0, value),
    }));
  };

  const handleIncrement = (flowerId: string) => {
    setCustomFlowerQuantities((prev) => ({
      ...prev,
      [flowerId]: (prev[flowerId] || 0) + 1,
    }));
  };

  const handleDecrement = (flowerId: string) => {
    setCustomFlowerQuantities((prev) => ({
      ...prev,
      [flowerId]: Math.max(0, (prev[flowerId] || 0) - 1),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const finalOrder = {
      ...orderDetails,
      selectedCategory,
      selectedFlower,
      customFlowers: selectedCustomFlowers,
    };

    console.log("Order submitted:", finalOrder);
    alert(
      "Thank you for your order! We will contact you soon to confirm details."
    );
    navigate("/");
  };

  const calculateTotal = () => {
    if (selectedFlower) {
      return selectedFlower.price * orderDetails.quantity;
    }
    if (selectedCustomFlowers.length > 0) {
      const customTotal = selectedCustomFlowers.reduce(
        (sum, flower) => sum + flower.pricePerStem,
        0
      );
      return customTotal * orderDetails.quantity;
    }
    return 0;
  };

  if (!selectedCategory) {
    return (
      <div className="order-page">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  return (
    <div className="order-page">
      <div className="order-header">
        <h1>Order {selectedCategory.name}</h1>
        <p>{selectedCategory.description}</p>
      </div>

      <div className="order-content">
        {/* Pre-made Arrangements */}
        <section className="arrangements-section">
          <h2>Choose from Our {selectedCategory.name} Arrangements</h2>
          <div className="arrangements-grid">
            {selectedCategory.flowers.map((flower) => (
              <div
                key={flower.id}
                className={`arrangement-card ${
                  selectedFlower?.id === flower.id ? "selected" : ""
                }`}
                onClick={() => handleFlowerSelect(flower)}
              >
                <img src={flower.image} alt={flower.alt} />
                <div className="arrangement-info">
                  <h3>{flower.name}</h3>
                  <p>{flower.description}</p>
                  <div className="price">${flower.price.toFixed(2)}</div>
                  <div className="stock-status">
                    {flower.inStock ? "✅ In Stock" : "❌ Out of Stock"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Custom Arrangement Option */}
        <section className="custom-section">
          <h2>Or Create Your Own Custom Arrangement</h2>
          <button
            className={`custom-toggle ${showCustomSelection ? "active" : ""}`}
            onClick={() => setShowCustomSelection(!showCustomSelection)}
          >
            {showCustomSelection
              ? "Hide Custom Selection"
              : "Show Custom Selection"}
          </button>

          {showCustomSelection && (
            <div className="custom-flower-selection">
              <h3>Select Your Flowers</h3>
              <div className="flower-grid scrollable-flower-grid">
                {individualFlowers.map((flower) => (
                  <div
                    key={flower.id}
                    className={`flower-card ${
                      selectedCustomFlowers.find((f) => f.id === flower.id)
                        ? "selected"
                        : ""
                    }`}
                    onClick={() => handleCustomFlowerToggle(flower)}
                  >
                    <img src={flower.image} alt={flower.name} />
                    <div className="flower-info">
                      <h4>{flower.name}</h4>
                      <p className="scientific-name">{flower.scientificName}</p>
                      <p className="color">Color: {flower.color}</p>
                      <p className="season">Season: {flower.season}</p>
                      <p className="meaning">{flower.meaning}</p>
                      <div className="price">
                        ${flower.pricePerStem.toFixed(2)} per stem
                      </div>
                      <div className="stock-status">
                        {flower.inStock ? "✅ Available" : "❌ Out of Stock"}
                      </div>
                      <div
                        className="quantity-controls"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button
                          type="button"
                          className="quantity-btn"
                          onClick={() => handleDecrement(flower.id)}
                        >
                          -
                        </button>
                        <input
                          type="number"
                          min="0"
                          value={customFlowerQuantities[flower.id] || 0}
                          onChange={(e) =>
                            handleQuantityChange(
                              flower.id,
                              parseInt(e.target.value) || 0
                            )
                          }
                          className="quantity-input"
                        />
                        <button
                          type="button"
                          className="quantity-btn"
                          onClick={() => handleIncrement(flower.id)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Selected Flowers Summary Bar */}
              <div className="selected-flowers-bar">
                {Object.entries(customFlowerQuantities)
                  .filter(([_, qty]) => qty > 0)
                  .map(([flowerId, qty]) => {
                    const flower = individualFlowers.find(
                      (f) => f.id === flowerId
                    );
                    if (!flower) return null;
                    return (
                      <div className="mini-flower-card" key={flower.id}>
                        <img
                          src={flower.image}
                          alt={flower.name}
                          className="mini-flower-img"
                        />
                        <div className="mini-flower-info">
                          <span className="mini-flower-name">
                            {flower.name}
                          </span>
                          <span className="mini-flower-qty">×{qty}</span>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          )}
        </section>

        {/* Order Form */}
        <section className="order-form-section">
          <h2>Complete Your Order</h2>
          <form onSubmit={handleSubmit} className="order-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="quantity">Quantity</label>
                <input
                  type="number"
                  id="quantity"
                  min="1"
                  value={orderDetails.quantity}
                  onChange={(e) =>
                    setOrderDetails((prev) => ({
                      ...prev,
                      quantity: parseInt(e.target.value) || 1,
                    }))
                  }
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="deliveryDate">Delivery Date</label>
                <input
                  type="date"
                  id="deliveryDate"
                  value={orderDetails.deliveryDate}
                  onChange={(e) =>
                    setOrderDetails((prev) => ({
                      ...prev,
                      deliveryDate: e.target.value,
                    }))
                  }
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="budget">Budget Range</label>
              <select
                id="budget"
                value={orderDetails.budget}
                onChange={(e) =>
                  setOrderDetails((prev) => ({
                    ...prev,
                    budget: parseInt(e.target.value),
                  }))
                }
              >
                <option value={25}>$25 - $50</option>
                <option value={50}>$50 - $75</option>
                <option value={75}>$75 - $100</option>
                <option value={100}>$100+</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="specialInstructions">Special Instructions</label>
              <textarea
                id="specialInstructions"
                value={orderDetails.specialInstructions}
                onChange={(e) =>
                  setOrderDetails((prev) => ({
                    ...prev,
                    specialInstructions: e.target.value,
                  }))
                }
                rows={4}
                placeholder="Any special requests, color preferences, or delivery instructions..."
              />
            </div>

            <div className="order-summary">
              <h3>Order Summary</h3>
              {selectedFlower && (
                <div className="summary-item">
                  <span>{selectedFlower.name}</span>
                  <span>
                    ${selectedFlower.price.toFixed(2)} × {orderDetails.quantity}
                  </span>
                </div>
              )}
              {selectedCustomFlowers.length > 0 && (
                <div className="summary-item">
                  <span>
                    Custom Arrangement ({selectedCustomFlowers.length} flowers)
                  </span>
                  <span>${calculateTotal().toFixed(2)}</span>
                </div>
              )}
              <div className="total">
                <strong>Total: ${calculateTotal().toFixed(2)}</strong>
              </div>
            </div>

            <button type="submit" className="submit-order">
              Place Order
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Order;
