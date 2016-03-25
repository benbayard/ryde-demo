import React from "react";
import { shallow } from "enzyme";
import { AccountCTAs } from "../../../client/components/account-ctas.jsx";

describe("AccountCTAs", () => {
  let component;
  let props;
  beforeEach(() => {
    props = {
      accountLinks: [{
        text: "Ben"
      }, {
        text: "what?"
      }]
    };

    component = shallow(<AccountCTAs {...props} />);
  });

  it("should make elements for each accountLink", () => {
    expect(component.find("p")).to.have.length(2);
  });
  it("should set the text", () => {
    expect(component.find("p").first().text()).to.equal("Ben");
  });

  describe("isNew", () => {
    beforeEach(() => {
      props.accountLinks[0].isNew = true;

      component = shallow(<AccountCTAs {...props} />);
    })

    it("should find 1 new element", () => {
      expect(component.find(".new-flag")).to.have.length(1);
    });
  });

  describe("isActive", () => {
    beforeEach(() => {
      props.accountLinks[0].active = true;

      component = shallow(<AccountCTAs {...props} />);
    })

    it("should find 1 active element", () => {
      expect(component.find(".is-active")).to.have.length(1);
    });
  });
});
