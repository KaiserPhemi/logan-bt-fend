// react libraries
import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";

// styles
import "./_register.scss";

// components
import Button from "../Common/Button";
import Input from "../Common/Input";

// actions
import { userSignUp } from "./signUpActions";

/**
 * @desc
 */
const Register = ({ userSignUp }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /**
   * @desc handles submission of form
   * @param {object} evt
   */
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const signUpData = { firstName, lastName, email, password };
    const signUpResponse = await userSignUp(signUpData);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    return <Redirect to="/dashboard/" />;
  };

  /**
   * @desc renders component
   */
  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <Input
        value={firstName}
        onChange={(evt) => setFirstName(evt.target.value)}
        labelText="First Name"
        inputType="text"
        inputName="firstName"
      />
      <Input
        value={lastName}
        labelText="Last Name"
        inputType="text"
        inputName="lastName"
        onChange={(evt) => setLastName(evt.target.value)}
      />
      <Input
        value={email}
        labelText="Email"
        inputType="email"
        inputName="email"
        onChange={(evt) => setEmail(evt.target.value)}
      />
      <Input
        value={password}
        labelText="Password"
        inputType="password"
        inputName="password"
        onChange={(evt) => setPassword(evt.target.value)}
      />
      <Button btnText="register" />
    </form>
  );
};

export default withRouter(connect(null, { userSignUp })(Register));
