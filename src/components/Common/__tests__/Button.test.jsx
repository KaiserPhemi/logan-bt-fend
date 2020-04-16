import "@testing-library/jest-dom/extend-expect";
// import { render, fireEvent, screen } from "@testing-library/react";

// react libraries
import React from "react";
import ReactDOM from "react-dom";

// component
import Button from "../Button";

// test suite
test("Renders the button", () => {
  const container = document.createElement("div");
  ReactDOM.render(<Button btnText={""} />, container);
  expect(container.querySelector("button")).toHaveClass("default_btn");
});
