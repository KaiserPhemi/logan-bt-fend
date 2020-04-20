// react libraries
import React, { useState } from "react";
import { connect } from "react-redux";

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
const Login = ({ userLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msgPrompt, setPrompt] = useState("");

  /**
   * @desc handles form submission
   */
  const submitForm = async (event) => {
    event.preventDefault();
    const loginDetails = { email, password };
    const response = await userLogin(loginDetails);
    setEmail("");
    setPassword("");
    console.log("Log in: ", response);
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

export default connect(null, { userLogin })(Login);
