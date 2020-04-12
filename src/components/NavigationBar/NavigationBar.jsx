// react libraries
import React from "react";
import { Link, Redirect, Route } from "react-router-dom";

// styles
import "./_navbar.scss";

// components
import Button from "../Common/Button";

/**
 * @desc
 */
const NavigationBar = () => {
  /**
   * @desc handle sign up request
   * @param {object} evt
   */
  const signUp = (evt) => {
    console.log("we got here", evt);
  };

  const isLoggedIn = false;
  const defText = "get started";
  return (
    <header className="main-header">
      <div className="img-container app-logo">
        <Link to="/">
          <img
            src="/assets/img/icon_60.png"
            alt="app_logo"
            className="img-wrapper"
          />
        </Link>
      </div>
      <nav className="navbar-menu">
        <ul className="menu-list">
          <li className="menu-item">
            <Link to="/login">Sign in</Link>
          </li>
          <li onClick={signUp} className="menu-item">
            <Link to="/register">
              <Button btnText={defText} />
            </Link>
          </li>
        </ul>
        {isLoggedIn ? (
          <div className="img-container avatar">
            <img src="" alt="user_avatar" className="img-wrapper" />
          </div>
        ) : null}
      </nav>
    </header>
  );
};

export default NavigationBar;
