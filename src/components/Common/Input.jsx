// react libraries
import React from "react";
import PropTypes from "prop-types";

// styles
import "./_input.scss";

/**
 * @desc reusable input field
 * @param {object} param0
 */
const Input = ({ labelText, inputType, inputName }) => {
  return (
    <div className="input-field">
      <label htmlFor={inputName}>{labelText}</label>
      <input name={inputName} type={inputType} required />
    </div>
  );
};

// type checking
Input.propTypes = {
  labelText: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
};

export default Input;
