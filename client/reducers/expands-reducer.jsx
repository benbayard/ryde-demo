import { EXPAND_TRIP, COLLAPSE_TRIP } from "../actions/expand-actions.jsx";

export const expandsReducer = (state = [], action) => {
  switch (action.type) {
    case EXPAND_TRIP:
      return [...state, action.tripId];
    case COLLAPSE_TRIP:
      return state.filter((id) => id !== action.tripId);
    default:
      return state;
  }
}
