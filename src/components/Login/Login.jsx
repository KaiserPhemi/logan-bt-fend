// react libraries
import React from "react";

// styles
import "./_login.scss";

// components
import Button from "../Common/Button";
import Input from "../Common/Input";

/**
 * @desc displays a login page
 */
const Login = () => {
  /**
   * @desc handles form submission
   */
  const submitForm = async (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={submitForm} className="login-form">
      <Input labelText="Email" inputType="email" inputName="email" />
      <Input labelText="Password" inputType="password" inputName="password" />
      <Button btnText="login" />
    </form>
  );
};

export default Login;
