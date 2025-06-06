import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import komponen-komponen
import Navbar from "./components/Navbar";
import EventCard from "./components/EventCard";
import RegistrationForm from "./components/RegistrationForm";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Checkout from "./components/Checkout"; // Import komponen Checkout

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/register"
            element={
              <>
                <EventCard />
                <RegistrationForm />
              </>
            }
          />
          <Route path="/payment" element={<Checkout />} />{" "}
          {/* Route untuk Checkout */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
