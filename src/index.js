// polyfill
import "babel-polyfill";

// react libraries
import React from "react";
import ReactDOM from "react-dom";

// redux libraries
import { Provider } from "react-redux";

// store
import store from "./store";

// components
import App from "./components/App/App";

console.log("The Store:", store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("logan-app")
);
