import React from "react";
import { shallow } from "enzyme";
import { UserSummary } from "../../../client/components/user-summary.jsx";

describe("UserSummary", () => {
  let props;
  let component;
  beforeEach(() => {
    props = {
      userName: "Ben",
      userAvatar: "http://blank.com"
    };

    component = shallow(<UserSummary {...props} />);
  });

  it("should set the avatar image source", () => {
    expect(component.find("img").prop("src")).to.equal(props.userAvatar);
  });

  it("should set the username", () => {
    expect(component.find(".user-name").text()).to.equal(props.userName);
  });
});
