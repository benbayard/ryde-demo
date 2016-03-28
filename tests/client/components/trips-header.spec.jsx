import React from "react";
import { shallow } from "enzyme";
import { TripsHeader } from "../../../client/components/trips-header.jsx";

describe("TripsHeader", () => {
  let component;
  let props;
  beforeEach(() => {
    props = {
      tableHeaders: ["a", "b", "c", "d", "e"]
    };

    component = shallow(<TripsHeader {...props} />);
  });

  it("should be a <header/>", () => {
    expect(component.is("thead")).to.be.true;
  });

  it("should have a UserInformation", () => {
    expect(component.find("th")).to.have.length(props.tableHeaders.length);
  });

  it("should send the userName", () => {
    const firstHeader = component.find("th").first();
    expect(firstHeader.text()).to.equal(props.tableHeaders[0]);
  });
});
