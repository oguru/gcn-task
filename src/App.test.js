import { shallow } from "enzyme";
import { render, cleanup } from "@testing-library/react";
import App from './App';
import Navbar from './containers/Navbar';
import Footer from './components/Footer';
import React from "react";

describe("App tests", () => {
  let component;
  
  beforeEach(() => {
    component = shallow(<App />);
  });
  
  afterEach(cleanup);

  it("should render", () => {
    expect(render(<App />)).toBeTruthy();
  });

  it("should match the snapshot", () => {
    expect(component).toMatchSnapshot();
  });

  it("should contain a navbar component", () => {
    expect(component.find(Navbar).length).toEqual(1);
  });

  it("should contain a footer component", () => {
    expect(component.find(Footer).length).toEqual(1);
  });
});
