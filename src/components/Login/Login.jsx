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
  };

  const btnTxt = "Login";
  return (
    <form onSubmit={submitForm} className="login-form">
      <div className="input-field">
        <label htmlFor="email">Email</label>
        <input name="email" type="email" />
      </div>
      <div className="input-field">
        <label htmlFor="password">Password</label>
        <input name="password" type="password" />
      </div>

      <button className="submit-btn" type="submit">
        {btnTxt}
      </button>
    </form>
  );
};

export default Login;
