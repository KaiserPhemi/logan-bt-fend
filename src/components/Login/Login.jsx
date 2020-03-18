// react libraries
import React from "react";

// styles
import "./_login.scss";

/**
 * @desc displays a login page
 */
const Login = () => {
  /**
   * @desc handles submission
   */
  const submitForm = event => {
    event.preventDefault();
    console.log("we got here", event.target);
  };

  return (
    <form onSubmit={submitForm} className="login-form">
      <div className="input-field">
        <span>Email</span>
        <input name="email" type="email" />
      </div>
      <div className="input-field">
        <label htmlFor="password">Password</label>
        <input name="password" type="password" />
      </div>
      <button className="submit-btn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Login;
