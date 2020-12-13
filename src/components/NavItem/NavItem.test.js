import React from "react";
import { render } from "@testing-library/react";
import NavItem from "./NavItem";

describe("NavItem tests", () => {
  it("should render", () => {
    expect(render(<NavItem />)).toBeTruthy();
  });
});
