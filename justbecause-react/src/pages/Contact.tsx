import React, { useState } from "react";
import { ContactForm } from "../types";
import "./Contact.css";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the contact form to your backend
    console.log("Contact form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">
      <section className="contact-info">
        <h2>Get in Touch</h2>
        <p>
          We'd love to hear from you! Send us a message and we'll respond as
          soon as possible.
        </p>

        <div className="contact-details">
          <div className="contact-item">
            <h3>📍 Location</h3>
            <p>
              123 Flower Street
              <br />
              Garden City, GC 12345
            </p>
          </div>

          <div className="contact-item">
            <h3>📞 Phone</h3>
            <p>(555) 123-4567</p>
          </div>

          <div className="contact-item">
            <h3>✉️ Email</h3>
            <p>hello@justbecause.com</p>
          </div>

          <div className="contact-item">
            <h3>🕒 Hours</h3>
            <p>
              Monday - Friday: 9AM - 6PM
              <br />
              Saturday: 10AM - 4PM
              <br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </section>

      <section className="contact-form">
        <h2>Send us a Message</h2>
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
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={5}
              placeholder="Tell us how we can help you..."
            />
          </div>

          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
