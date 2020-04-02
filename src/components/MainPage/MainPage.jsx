// react libraries
import React from "react";

// styles
import "./_main-page.scss";

// components
import Login from "../Login/Login";

/**
 * @desc
 */
const MainPage = () => {
  return (
    <div className="main-page">
      <Login />
    </div>
  );
};

export default MainPage;
