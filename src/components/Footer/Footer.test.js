import React from "react";
import { mount } from "enzyme";
import { render, cleanup } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer tests", () => {
  let component;
  const setFooterHeight = jest.fn();

  afterEach(cleanup);

  it("should render", () => {
    expect(render(<Footer setFooterHeight={setFooterHeight}/>)).toBeTruthy();
  });

  beforeEach(() => {
    component = mount(<Footer setFooterHeight={setFooterHeight}/>);
  });

  it("should match the snapshot", () => {
    expect(component).toMatchSnapshot();
  });

  it("should contain a footer tag", () => {
    expect(component.find("footer").length).toEqual(1);
  });

  it("should have 3 social media icons", () => {
    expect(component.find("SocialMediaIcon").length).toBe(3);
  })
});
