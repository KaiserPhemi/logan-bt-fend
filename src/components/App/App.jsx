// react libraries
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// styles
import "./app.scss";

// components
import Login from "../Login/Login";
import NavigationBar from "../NavigationBar/NavigationBar";
import Footer from "../Footer/Footer";
import LandingPage from "../LandingPage/LandingPage";
import Register from "../Register/Register";
import Dashboard from "../Dashboard/Dashboard";

/**
 * @desc entry point for app
 */
const App = () => {
  return (
    <Router>
      <div className="app-container">
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
