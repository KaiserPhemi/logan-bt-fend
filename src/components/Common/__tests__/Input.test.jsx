import "@testing-library/jest-dom/extend-expect";
// import { render, fireEvent, screen } from "@testing-library/react";

// react libraries
import React from "react";
import ReactDOM from "react-dom";

// components
import Input from "../Input";

// tests
test("Renders the input field", () => {
  const container = document.createElement("div");
  ReactDOM.render(
    <Input inputType={""} inputName={""} labelText={""} />,
    container
  );
  expect(container.querySelector("div")).toHaveClass("input-field");
  expect(container.querySelector("label")).toHaveAttribute("for", "");
  expect(container.querySelector("input")).toHaveAttribute("type", "");
});
