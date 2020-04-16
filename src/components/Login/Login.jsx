// react libraries
import React, { useState } from "react";

// other libraries
import http from "axios";

// styles
import "./_login.scss";

// components
import Button from "../Common/Button";
import Input from "../Common/Input";

// utils
import { BASE_URI } from "../../utils/constants";

/**
 * @desc the login page
 */
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /**
   * @desc handles form submission
   */
  const submitForm = async (event) => {
    event.preventDefault();
    const loginDetails = { email, password };
    const response = await loginRequest(loginDetails);
    setEmail("");
    setPassword("");
  };

  /**
   * @desc makes api calls with request
   */
  const loginRequest = async (body) => {
    try {
      let apiResponse = await http.post(`${BASE_URI}/auth`, body);
      return apiResponse;
    } catch (error) {
      return error;
    }
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
