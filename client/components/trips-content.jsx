import React from "react";
import classnames from "classnames";

export const transformTrip = (tripId, {trips, drivers, paymentMethods, expands}) => {
  const trip = trips[tripId];
  const { id, city } = trip;
  const formattedFare = Number.isInteger(trip.fare)
    ? trip.fare.toFixed(0)
    : trip.fare.toFixed(2);
  const fare = `$${formattedFare}`
  const car = trip.car.type;
  const pickupDate = new Date(trip.pickup_time);
  const pickup = {
    month: pickupDate.getMonth() + 1,
    day: pickupDate.getDate(),
    year: pickupDate.getFullYear()
  };
  const driver = drivers[trip.driverId];
  const paymentMethodReference = paymentMethods[trip.paymentMethodId];
  const paymentMethod = `•••• ${paymentMethodReference.last_four}`;
  const paymentCard = paymentMethodReference.card_type.toLowerCase();
  const active = expands && expands.indexOf(id) !== -1;

  return {
    car,
    pickup,
    driver,
    paymentMethod,
    paymentCard,
    fare,
    id,
    city,
    active
  };
};


export const TripsContent = (props) => {
  const { tripIds, expandTrip, collapseTrip, dispatch, expands } = props;
  const tripProps = tripIds.map((tripId) => (
    transformTrip(tripId, props)
  ));
  return (
    <tbody>
      {
        tripProps.reduce((rows, {
          car,
          pickup: {day, month, year},
          driver,
          paymentMethod,
          paymentCard,
          fare,
          id,
          city,
          active
        }) => {
          const activeClasses = classnames({
            "row-inactive": !active
          });
          rows.push(
            <tr key={id} className="activeClasses">
              <td onClick={() => (active ? collapseTrip(id) : expandTrip(id))}><span className="icon-chevron-right"/></td>
              <td>{`${month}/${day}/${year}`}</td>
              <td>{driver.name}</td>
              <td>{fare}</td>
              <td>{car}</td>
              <td>{city}</td>
              <td><span className={`icon-cc-${paymentCard}`} />{paymentMethod}</td>
            </tr>
          );
          if (active) {
            rows.push(
              <tr key={`${id}-expansion`}>
                <td colSpan="7">More content can go here.</td>
              </tr>
            );
          }
          return rows;
        }, [])
      }
    </tbody>
  );
};
