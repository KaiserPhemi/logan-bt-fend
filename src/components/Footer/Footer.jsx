// react libraries
import React from "react";

// styles
import "./_footer.scss";

/**
 * @desc footer component
 */
const Footer = () => {
  return (
    <div className="main-footer">
      <ul className="footer-menu-list">
        <li className="footer-menu-item">
          <a href="">Contact Us</a>
        </li>
        <li className="footer-menu-item">
          <a href="#">F.A.Q.</a>
        </li>
        <li className="footer-menu-item">
          <a href="#">Legal Terms</a>
        </li>
        <li className="footer-menu-item">
          <a href="#">Privacy Policy</a>
        </li>
      </ul>
      <div className="foot-note">
        <span>Created by Oluwafemi Akinwa</span>
      </div>
    </div>
  );
};

export default Footer;
