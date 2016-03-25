const tripsData = require("./trips-data");

const indexTrips = (tripData) => {
  return tripData.reduce((indexedTrips, trip) => {
    const { id, driver, payment_method } = trip;
    const {
      tripIds,
      trips,
      drivers,
      paymentMethods
    } = indexedTrips;
    const driverIndex = {};
    const paymentIndex = {};

    if (driver) {
      drivers[driver.id] = driver;
      driverIndex.driverId = driver.id;
    }

    if (payment_method) {
      paymentMethods[payment_method.id] = payment_method;
      paymentIndex.paymentMethodId = payment_method.id;
    }

    /**
     * Combine all the final objects together.
     * remove the now indexed paymentMethod and driver
     */
    const indexedTrip = Object.assign({}, trip, driverIndex, paymentIndex);
    delete indexedTrip.driver;
    delete indexedTrip.payment_method;
    tripIds.push(id);
    trips[id] = indexedTrip;

    return indexedTrips;
  }, {
    tripIds: [],
    trips: {},
    drivers: {},
    paymentMethods: {}
  });
};

const getTrips = () => {
  /*
   * Use a promise to simulate a database call. Using the
   * native ES2015 nodejs Promise.
   */
  return new Promise((resolve, reject) => {
    /*
     * This is not performant. But the timings here
     * give a little bit more "realism" to the DB call.
     */
    resolve(indexTrips(tripsData));
  });
};

module.exports = { getTrips, indexTrips };
