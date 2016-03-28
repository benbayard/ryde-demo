export const EXPAND_TRIP = "EXPAND_TRIP";
export const COLLAPSE_TRIP = "COLLAPSE_TRIP";

export const expandTrip = (tripId) => {
  return {
    type: EXPAND_TRIP,
    tripId
  };
};


export const collapseTrip = (tripId) => ({
  type: COLLAPSE_TRIP,
  tripId
});
