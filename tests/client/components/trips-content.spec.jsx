import React from "react";
import { shallow } from "enzyme";
import {
  TripsContent,
  transformTrip
} from "../../../client/components/trips-content.jsx";

describe("transformTrip", () => {
  let tripId;
  let trips;
  let drivers;
  let paymentMethods;
  let expands;
  let transformedTrip;
  beforeEach(() => {
    tripId = "1";
    trips = {
      "1": {
        fare: 1.1,
        id: "1",
        city: "Whispering Pines",
        car: {
          type: "pool"
        },
        pickup_time: (new Date()).getTime(),
        driverId: "2",
        paymentMethodId: "3"
      }
    };

    drivers = {
      "2": {
        name: "Bob"
      }
    };

    paymentMethods = {
      "3": {
        card_type: "VIsa",
        last_four: "1234"
      }
    };

    expands = [
      "1"
    ];

    transformedTrip = transformTrip(tripId, {
      trips,
      paymentMethods,
      drivers,
      expands
    });
  });

  it("should have the cart type", () => {
    expect(transformedTrip.car).to.equal("pool");
  });

  it("should have the pickup time", () => {
    const { pickup_time } = trips["1"];
    const pickup = new Date(pickup_time);
    expect(transformedTrip.pickup).to.eql({
      month: pickup.getMonth() + 1,
      day: pickup.getDate(),
      year: pickup.getFullYear()
    });
  });

  it("should set the driver", () => {
    expect(transformedTrip.driver).to.equal(drivers["2"]);
  });

  it("should set the payment method", () => {
    expect(transformedTrip.paymentMethod).to.equal(
      `•••• ${paymentMethods["3"].last_four}`
    );
  });

  it("should set the payment card", () => {
    expect(transformedTrip.paymentCard).to.equal("visa");
  });

  it("should be active", () => {
    expect(transformedTrip.active).to.be.true;
  });

  it("should be format the fare", () => {
    expect(transformedTrip.fare).to.equal("$1.10")
  });
});
