import React from "react";
import { connect } from "react-redux";

import { AccountPanel } from "./account-panel.jsx";
import { Trips } from "./trips.jsx";

import {
  expandTrip as unboundExpand,
  collapseTrip as unboundCollapse
} from "../actions/expand-actions.jsx";

import "./main-panel.css";

export const MainPanel = ({trips, expandTrip, collapseTrip, expands}) => {
  return (
    <main className="main-panel">
      <AccountPanel/>
      <Trips {...{trips, expands, expandTrip, collapseTrip}}/>
    </main>
  );
};

export const ConnectedMainPanel = connect(({trips, expands}) => ({
  trips, expands
}), (dispatch) => ({
  expandTrip: (tripId) => dispatch(unboundExpand(tripId)),
  collapseTrip: (tripId) => dispatch(unboundCollapse(tripId))
}))(MainPanel);
