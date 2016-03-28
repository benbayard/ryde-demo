import { NEW_TRIPS } from "../actions/trips-actions.jsx";

export const tripsReducer = (state = {
  tripIds: [],
  trips: {},
  drivers: {},
  paymentMethods: {}
}, action) => {
  switch (action.type) {
    case NEW_TRIPS:
      const { trips } = action;
      return trips;
    default:
      return state;
  }
}
