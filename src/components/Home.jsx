import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Selamat Datang</h1>
        <p className="home-description">
          Platform pembelajaran digital untuk mengembangkan kemampuan dan karir
          Anda.
        </p>
        <div className="home-buttons">
          <button
            className="btn primary-btn"
            onClick={() => navigate("/register")}
          >
            Daftar Sekarang
          </button>
          <button
            className="btn secondary-btn"
            onClick={() => navigate("/payment")}
          >
            Checkout Course
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
