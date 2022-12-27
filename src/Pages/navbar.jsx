import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="nav-container">
      <header>
        <h3>LOGO</h3>
        <nav ref={navRef}>
          <NavLink to='/'>Home</NavLink>
          <a href="/aboutus">About Us</a>
          <NavLink to="/Service">Services</NavLink>
          <NavLink to="/Register">Register</NavLink>
          <NavLink to="/Login">Login</NavLink>
          {/* <a href="/Home">Home</a>
          <a href="/#">About Us</a>
          <a href="/#">Services</a>
          <a href="/Register">Register</a>
          <a href="/Login">Login</a> */}

          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </div>
  );
}

export default Navbar;
