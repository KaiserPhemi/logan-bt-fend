// react libraries
import React from "react";

// styles
import "./_button.scss";

/**
 * @desc reusable button component
 */
const Button = ({ btnText }) => {
  return <button className="default_btn">{btnText}</button>;
};

export default Button;
