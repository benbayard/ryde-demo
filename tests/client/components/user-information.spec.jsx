import React from "react";
import { shallow } from "enzyme";
import { UserInformation } from "../../../client/components/user-information.jsx";

describe("UserInformation", () => {
  let props;
  let component;
  beforeEach(() => {
    props = {
      userName: "Ben"
    };

    component = shallow(<UserInformation {...props} />);
  });

  it("should be a section", () => {
    expect(component.is("section")).to.be.true;
  });

  it("should set the username text", () => {
    expect(component.find(".user-name").text()).to.equal(props.userName);
  });
});
