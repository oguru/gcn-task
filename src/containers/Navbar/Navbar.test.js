import { mount } from "enzyme";
import { render, cleanup } from "@testing-library/react";
import React from "react";
import Navbar from "./Navbar";

describe("Navbar tests", () => {
  let component;
  
  beforeEach(() => {
    component = mount(<Navbar />);
  });
  
  afterEach(cleanup);
  
  it("should render", () => {
    expect(render(<Navbar />)).toBeTruthy();
  });

  it("should match the snapshot", () => {
    expect(component).toMatchSnapshot();
  });

  it("should contain a nav tag", () => {
    expect(component.find("nav").length).toEqual(1);
  });

  it("should have a burger menu icon", () => {
    expect(component.find(".burgerIcon").length).toBe(1);
  })

  it("should add navbar links when burger menu is clicked", () => {
    expect(component.find(".navLinkBar").length).toBe(0);
    component.find(".burgerIcon").simulate("click");
    expect(component.find(".navLinkBar").length).toBe(1);
  })
});
