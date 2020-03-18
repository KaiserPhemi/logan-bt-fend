// react libraries
import React from "react";

// styles
import "./app.scss";

// components
import Login from "../Login/Login";

/**
 * @desc entry point for app
 */
const App = () => {
  return (
    <div className="app-container">
      <Login />
    </div>
  );
};

export default App;
