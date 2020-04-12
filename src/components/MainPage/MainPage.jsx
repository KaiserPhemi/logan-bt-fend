// react libraries
import React from "react";

// styles
import "./_main-page.scss";

// components
import Login from "../Login/Login";
import LandingPage from "../LandingPage/LandingPage";

/**
 * @desc
 */
const MainPage = () => {
  return (
    <div className="main-page">
      <LandingPage />
    </div>
  );
};

export default MainPage;
