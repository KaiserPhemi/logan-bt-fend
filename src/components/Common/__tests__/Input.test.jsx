// testing libraries
import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";

// react library
import React from "react";

// component
import Input from "../Input";

// test suite
test("Renders the input field", () => {
  render(<Input></Input>);
});
