// react libraries
import React from "react";

// styles
import "./_register.scss";

/**
 * @desc
 */
const Register = () => {
  return (
    <form className="signup-form">
      <label htmlFor="email">
        <input type="email" placeholder="Enter your email add" />
      </label>
    </form>
  );
};

export default Register;
