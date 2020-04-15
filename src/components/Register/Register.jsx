// react libraries
import React from "react";
import { Link } from "react-router-dom";

// styles
import "./_register.scss";

// components
import Button from "../Common/Button";
import Input from "../Common/Input";

/**
 * @desc
 */
const Register = () => {
  return (
    <form className="signup-form">
      <Input labelText="First Name" inputType="text" inputName="first-name" />
      <Input labelText="Last Name" inputType="text" inputName="last-name" />
      <Input labelText="Email" inputType="email" inputName="email" />
      <Input labelText="Password" inputType="password" inputName="password" />
      <Link to="#">
        <Button btnText="register" />
      </Link>
    </form>
  );
};

export default Register;
