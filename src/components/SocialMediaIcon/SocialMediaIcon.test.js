import React from "react";
import { render } from "@testing-library/react";
import SocialMediaIcon from "./SocialMediaIcon";

describe("SocialMediaIcon tests", () => {
  it("should render", () => {
    expect(render(<SocialMediaIcon />)).toBeTruthy();
  });
});
