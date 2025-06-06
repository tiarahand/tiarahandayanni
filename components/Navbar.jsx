import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="Rakryan_logo.png" alt="Rakryan Logo" />
      </div>
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Skill Dev</a>
        </li>
        <li>
          <a href="#">digiTalent Hub</a>
        </li>
        <li>
          <a href="#">Events</a>
        </li>
        <li>
          <a href="#">Course</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
      <div className="user-profile">
        <img src="user icon.jpg" alt="User Icon" className="user-icon" />
        <span className="user-name">Latifa</span>
        <img src="dropdown.jpg" alt="Dropdown" className="dropdown-icon" />
      </div>
    </nav>
  );
}

export default Navbar;
