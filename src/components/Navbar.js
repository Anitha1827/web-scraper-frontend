import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Web Scaper</div>
      <ul className="navbar-menu">
        <li>
          <a href="link">Login/Signup</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
