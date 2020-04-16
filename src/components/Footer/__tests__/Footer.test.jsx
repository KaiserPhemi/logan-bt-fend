import "@testing-library/jest-dom/extend-expect";
// import { render, fireEvent, screen } from "@testing-library/react";

// react libraries
import React from "react";
import ReactDOM from "react-dom";

// component
import Footer from "../Footer";

// test cases
test("Render the footer", () => {
  const container = document.createElement("div");
  ReactDOM.render(<Footer btnText={""} />, container);
  expect(container.querySelector("div")).toHaveClass("main-footer");
  expect(container.querySelector("ul")).toHaveClass("footer-menu-list");
});
