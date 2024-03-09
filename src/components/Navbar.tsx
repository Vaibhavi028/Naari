import React from "react";
import "./navbar.css";
import Image from "./img/logo.png";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="logo">
          <img src={Image} alt="Company Logo" />{" "}
        </a>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/profile" className="nav-links">
              View Profile
            </a>
          </li>
          <li className="nav-item">
            <form className="search-form">
              <input
                type="text"
                className="search-input"
                placeholder="Search..."
              />
              <button type="submit" className="search-button">
                <i className="fas fa-search"></i> {/* Font Awesome icon */}
              </button>
            </form>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
