import { mount } from "enzyme";
import { render, cleanup } from "@testing-library/react";
import NavItem from "./NavItem";
import React from "react";

describe("NavItem tests", () => {
  let component;
  let noChildComponent;
  const handleClick = jest.fn();
  const name = "test";
  const path = "testPath";
  
    beforeEach(() => {
      component = mount(
        <NavItem 
          handleClick={handleClick} 
          hasChildren={true} 
          name={name}
          path={path}
        />
      );
  
        noChildComponent = mount(
          <NavItem 
            handleClick={handleClick}
            hasChildren={false} 
            name={name}
            path={path}
          />
        );
    });

  afterEach(cleanup);

  it("should render", () => {
    expect(render(
      <NavItem 
        handleClick={handleClick} 
        hasChildren={true} 
        name={name}
        path={path}
      />)).toBeTruthy();

      expect(render(
        <NavItem 
          handleClick={handleClick} 
          hasChildren={false} 
          name={name}
          path={path}
        />)).toBeTruthy();
  });

  it("should match the snapshot", () => {
    expect(component).toMatchSnapshot();
    expect(noChildComponent).toMatchSnapshot();
  });

  it("should contain an li tag", () => {
    expect(component.find("li").length).toEqual(1);
    expect(noChildComponent.find("li").length).toEqual(1);
  });

  it("should render an arrow if hasChildren and none if false", () => {
    expect(component.find("FontAwesomeIcon").length).toEqual(1);
    expect(noChildComponent.find("FontAwesomeIcon").length).toEqual(0);
  });
});
