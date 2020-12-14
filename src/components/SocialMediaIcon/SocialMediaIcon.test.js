import { cleanup, render } from "@testing-library/react";
import { mount } from "enzyme";
import React from "react";

import SocialMediaIcon from "./SocialMediaIcon";

describe("SocialMediaIcon tests", () => {
  let primaryFbComponent;
  let secondaryIgComponent;
  const link = "testlink";
  
    beforeEach(() => {
      primaryFbComponent = mount(
        <SocialMediaIcon 
          isPrimary={true} 
          icon={"facebook"}
          key="facebookn" 
          link={link}
        />
      );
  
        secondaryIgComponent = mount(
          <SocialMediaIcon 
          isPrimary={false} 
          icon={"instagram"} 
          key="instagramf" 
          link={link}
        />        
      );
    });

  afterEach(cleanup);

  it("should render", () => {
    expect(render(primaryFbComponent)).toBeTruthy();
    expect(render(secondaryIgComponent)).toBeTruthy();
  });

  it("should match the snapshot", () => {
    expect(primaryFbComponent).toMatchSnapshot();
    expect(secondaryIgComponent).toMatchSnapshot();
  });

  it("should contain an svg", () => {
    expect(primaryFbComponent.find("svg").length).toEqual(1);
    expect(secondaryIgComponent.find("svg").length).toEqual(1);
  });

  it("should get the correct css styles based on isPrimary prop", () => {
    expect(primaryFbComponent.find(".navIcon").length).toEqual(1);
    expect(primaryFbComponent.find(".footerIcon").length).toEqual(0);
    expect(secondaryIgComponent.find(".footerIcon").length).toEqual(1);
    expect(secondaryIgComponent.find(".navIcon").length).toEqual(0);
  });

  it("should return the correct icon based on the icon prop", () => {
    expect(primaryFbComponent.find(".fa-facebook-f").length).toEqual(1);
    expect(primaryFbComponent.find(".fa-twitter").length).toEqual(0);
    expect(secondaryIgComponent.find(".fa-instagram").length).toEqual(1);
    expect(secondaryIgComponent.find(".fa-facebook-f").length).toEqual(0);
  });
  
});
