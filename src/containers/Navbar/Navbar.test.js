import { mount } from "enzyme";
import { render, fireEvent, cleanup } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar";

describe("Navbar tests", () => {
  let component;
  
  afterEach(cleanup);
  
  it("should render", () => {
    expect(render(<Navbar />)).toBeTruthy();
  });

  beforeEach(() => {
    component = mount(<Navbar />);
  });

  it("should match the snapshot", () => {
    expect(component).toMatchSnapshot();
  });

  // it("should have a burger menu icon", () => {
  //   const container = render(<Navbar />);
  //   // expect(container.firstChild.classList.contains("burgerIcon").toBe(true))
  //   // expect(container.firstChild).toHaveClass("burger-icon");
  //   console.log(container.firstChild);
    
  // })
  
  // const input = get
});

// const linkElement = screen.getByText(/burger-icon/i);
// expect(linkElement).toBeInTheDocument();