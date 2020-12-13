import React from "react";
import { render } from "@testing-library/react";
import MovieBox from "./MovieBox";

describe("MovieBox tests", () => {
  it("should render", () => {
    expect(render(<MovieBox />)).toBeTruthy();
  });
});
