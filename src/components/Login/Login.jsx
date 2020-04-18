// react libraries
import React, { useState } from "react";

// third-party libraries libraries
import http from "axios";

// styles
import "./_login.scss";

// components
import Button from "../Common/Button";
import Input from "../Common/Input";

// actions
import { userLogin } from "./loginActions";

/**
 * @desc the login page
 */
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /**
   * @desc handles form submission
   */
  const submitForm = (event) => {
    event.preventDefault();
    const loginDetails = { email, password };
    const response = userLogin(loginDetails);
    setEmail("");
    setPassword("");
    console.log("It worked", response);
  };

  /**
   * @desc renders component
   */
  return (
    <form onSubmit={submitForm} className="login-form">
      <Input
        labelText="Email"
        inputType="email"
        inputName="email"
        onChange={(evt) => setEmail(evt.target.value)}
        value={email}
      />
      <Input
        labelText="Password"
        inputType="password"
        inputName="password"
        onChange={(evt) => setPassword(evt.target.value)}
        value={password}
      />
      <Button btnText="login" />
    </form>
  );
};

export default Login;
