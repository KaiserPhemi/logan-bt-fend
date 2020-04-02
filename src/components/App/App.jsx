// react libraries
import React from "react";

// styles
import "./app.scss";

// components
import Login from "../Login/Login";
import NavigationBar from "../NavigationBar/NavigationBar";
import Footer from "../Footer/Footer";

/**
 * @desc entry point for app
 */
const App = () => {
  return (
    <div className="app-container">
      <NavigationBar />
      <Login />
      <Footer />
    </div>
  );
};

export default App;
