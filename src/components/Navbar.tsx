import React from "react";
import "./navbar.css";
import Image from "./img/logo.png";
import 'font-awesome/css/font-awesome.min.css';

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
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="/profile" className="nav-links">
              Our Work
            </a>
          </li>
          <li className="nav-item">
            <a href="/profile" className="nav-links">
              Language(भाषा)
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
                <i className="fa fa-search"></i> 
              </button>
            </form>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
