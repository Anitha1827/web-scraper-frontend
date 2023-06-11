import React from "react";

function Sidenav() {
  return (
    <div className="sidebar">
      <div className="brand-container">
        <img
          src="https://img.favpng.com/19/18/19/logo-e-commerce-electronic-business-png-favpng-eN3uDxqPs3mfprC0GG6u29kJb.jpg"
          alt="logo"
        />
      </div>
      <div className="link-container">
        <nav className="nav">
          <ul className="nav-lists">
            <li className="navlist active">
              <span class="material-symbols-outlined">home</span>
              Flipkart
            </li>
            <li className="navlist">Amazon</li>
            <li className="navlist">Snapdeal</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sidenav;
