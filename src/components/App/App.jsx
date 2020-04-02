// react libraries
import React from "react";

// styles
import "./app.scss";

// components
import Login from "../Login/Login";
import NavigationBar from "../NavigationBar/NavigationBar";
import Footer from "../Footer/Footer";
import MainPage from "../MainPage/MainPage";

/**
 * @desc entry point for app
 */
const App = () => {
  return (
    <div className="app-container">
      <NavigationBar />
      <MainPage />
      <Footer />
    </div>
  );
};

export default App;
