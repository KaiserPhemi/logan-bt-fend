import "@testing-library/jest-dom";
// import { render, fireEvent, screen } from "@testing-library/react";

// react libraries
import React from "react";
import ReactDOM from "react-dom";

// component
import Button from "../Button";

// test suite
test("Renders the input field", () => {
  const div = document.createElement("div");
  const btnText = "Hello";
  ReactDOM.render(<Button />, div);
  expect(div.querySelector("button")).toHaveTextContent(btnText);
});
