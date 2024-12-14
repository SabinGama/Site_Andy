import React, { useState } from "react";
import "./Navbar2.css";
import logo from "../assets/logo_alb.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isMenuOpen ? "active" : ""}`}>
      {/* Logo */}
      <img className="logo" src={logo} alt="Logo" />

      {/* Burger Menu Button */}
      <button className="burger-menu" onClick={toggleMenu}>
        ☰
      </button>

      {/* Navbar Links */}
      <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about-us">About Us</a>
        <a href="#clients">Clients</a>
        <a href="#reviews">Reviews</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Navbar;
