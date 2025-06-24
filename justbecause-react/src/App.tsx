import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FeaturedFlowers from "./pages/FeaturedFlowers";
import Order from "./pages/Order";
import CustomScrollbar from "./components/CustomScrollbar";
import "./stylesheets/App.css";
import "./stylesheets/CustomScrollbar.css";

const App: React.FC = () => {
  return (
    <Router>
      <CustomScrollbar>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/featured-flowers" element={<FeaturedFlowers />} />
              <Route path="/order/:categoryId" element={<Order />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CustomScrollbar>
    </Router>
  );
};

export default App;
