// react libraries
import React from "react";

// styles
import "./_navbar.scss";

/**
 * @desc
 */
const NavigationBar = () => {
  return (
    <header className="main-header">
      <div className="img-container app-logo">
        <img src="" alt="app_logo" className="img-wrapper" />
      </div>
      <nav className="navbar-menu">
        <ul className="menu-list">
          <li className="menu-item">
            <a href="#">Home</a>
          </li>
          <li className="menu-item">
            <a href="#">Login</a>
          </li>
          <li className="menu-item">
            <a href="#">Signup</a>
          </li>
        </ul>
        <div className="img-container avatar">
          <img src="" alt="user_avatar" className="img-wrapper" />
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
