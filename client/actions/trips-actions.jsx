import "whatwg-fetch";

export const NEW_TRIPS = "NEW_TRIPS";

export const newTrips = (trips) => ({
  type: NEW_TRIPS,
  trips
});

export const fetchTrips = () => {
  return (dispatch) => {
    return fetch("/api/v1/trips")
      .then((res) => res.json())
      .then((trips) => dispatch(newTrips(trips)));
  }
};
