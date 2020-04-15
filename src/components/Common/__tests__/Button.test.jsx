import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";

// react library
import React from "react";

// component
import Button from "../Button";

// test suite
test("Renders the input field", () => {
  render(<Button></Button>);
});
