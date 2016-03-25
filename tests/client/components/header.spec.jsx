import React from "react";
import { shallow } from "enzyme";
import { Header } from "../../../client/components/header.jsx";

describe("Header", () => {
  let component;
  let props;
  beforeEach(() => {
    props = {
      userName: "Ben"
    };

    component = shallow(<Header {...props} />);
  });

  it("should be a <header/>", () => {
    expect(component.is("header")).to.be.true;
  });

  it("should have a UserInformation", () => {
    expect(component.find("UserInformation")).to.have.length(1);
  });

  it("should send the userName", () => {
    expect(component.find("UserInformation").prop("userName")).to.equal(props.userName);
  });
});
