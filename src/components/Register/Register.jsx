// react libraries
import React, { useState } from "react";

// styles
import "./_register.scss";

// components
import Button from "../Common/Button";
import Input from "../Common/Input";

/**
 * @desc
 */
const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /**
   * @desc handles submission of form
   * @param {object} evt
   */
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const signUpData = { firstName, lastName, email, password };
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
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

export default Register;
