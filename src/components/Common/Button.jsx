// react libraries
import React from "react";
import PropTypes from "prop-types";

// styles
import "./_button.scss";

/**
 * @desc reusable button component
 */
const Button = ({ btnText }) => {
  return <button className="default_btn">{btnText}</button>;
};

// type checking
Button.propTypes = {
  btnText: PropTypes.string.isRequired,
};

export default Button;
