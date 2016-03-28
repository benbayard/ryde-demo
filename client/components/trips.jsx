import React from "react";

import { TripsHeader } from "./trips-header.jsx";
import { TripsContent } from "./trips-content.jsx";

import "./trips.css"

const rows = [
  ['a1', 'b1', 'c1'],
  ['a2', 'b2', 'c2'],
  ['a3', 'b3', 'c3']
];

const tableHeaders = [
  "", "pickup", "driver", "fare", "car", "city", "payment method"
];

export const Trips = ({trips, expandTrip, collapseTrip, expands}) => {
  return (
    <section className="trips-container">
      <h1 className="my-trips"> MY TRIPS </h1>
      <table className="trips-table">
        <TripsHeader {...{tableHeaders}} />
        <TripsContent {...trips} {...{expandTrip, collapseTrip, expands}} />
      </table>
    </section>
  );
};
