// react libraries
import React from "react";

// styles
import "./_login.scss";

/**
 * @desc displays a login page
 */
const Login = () => {
  /**
   * @desc handles form submission
   */
  const submitForm = async (event) => {
    event.preventDefault();
    let resp = await fetch("http://localhost:5555/api/v1/auth", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: { name: "kinwa", password: "femi" },
    });
    console.log("respi", resp);
  };

  const btnTxt = "Login";
  return (
    <form onSubmit={submitForm} className="login-form">
      <div className="input-field">
        <label htmlFor="email">Email</label>
        <input name="email" type="email" required />
      </div>
      <div className="input-field">
        <label htmlFor="password">Password</label>
        <input name="password" type="password" required />
      </div>

      <button className="submit-btn" type="submit">
        {btnTxt}
      </button>
    </form>
  );
};

export default Login;
