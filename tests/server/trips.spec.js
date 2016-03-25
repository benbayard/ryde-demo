"use strict";
const expect = require("chai").expect;
const trips = require("../../server/trips");
const tripsData = require("../../server/trips-data");

describe("trips", () => {
  describe(".getTrips", () => {
    let tripsPromise;
    beforeEach(() => {
      tripsPromise = trips.getTrips();
    });

    it("should return a promise", () => {
      expect(tripsPromise).to.be.an.instanceOf(Promise);
    });

    describe("success", () => {
      let tripsIndex;
      beforeEach(() => {
        return tripsPromise.then((tempTrips) => {
          tripsIndex = tempTrips;
        });
      });

      it("should contain an indexed trips object", () => {
        expect(tripsIndex).to.eql(trips.indexTrips(tripsData));
      });
    });
  });

  describe(".indexTrips", () => {
    let tripData;
    let indexedTrips;
    beforeEach(() => {
      tripData = [{
        id: 1,
        other: "yay",
      }, {
        id: 2,
        other: "boo"
      }];

      indexedTrips = trips.indexTrips(tripData);
    });

    it("should have a tripIds object", () => {
      expect(indexedTrips.tripIds).to.eql([1, 2]);
    });

    it("should correctly set the trips object", () => {
      expect(indexedTrips.trips).to.eql({
        1: {
          id: 1,
          other: "yay"
        },
        2: {
          id: 2,
          other: "boo"
        }
      });
    });

    it("should index the payment method", () => {
      expect(indexedTrips.trips[1].payment_method).to.be.undefined;
    });

    describe("with a driver", () => {
      beforeEach(() => {
        tripData = [{
          id: 1,
          driver: {
            name: "Fred",
            id: 1234
          }
        }];

        indexedTrips = trips.indexTrips(tripData);
      });

      it("should index the driver", () => {
        expect(indexedTrips.trips[1].driverId).to.equal(1234);
        expect(indexedTrips.drivers[1234]).to.equal(tripData[0].driver);
      });
    });

    describe("with a payment_method", () => {
      beforeEach(() => {
        tripData = [{
          id: 1,
          payment_method: {
            type: "visa",
            last_four: 1234,
            id: 1,
          }
        }];

        indexedTrips = trips.indexTrips(tripData);
      });

      it("should index paymentMethod", () => {
        expect(indexedTrips.trips[1].paymentMethodId).to.equal(1);
        expect(indexedTrips.paymentMethods[1]).to.equal(tripData[0].payment_method);
      });
    })
  });
});
