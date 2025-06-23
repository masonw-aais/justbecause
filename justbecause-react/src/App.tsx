import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FeaturedFlowers from "./pages/FeaturedFlowers";
import "./stylesheets/App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/featured-flowers" element={<FeaturedFlowers />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
