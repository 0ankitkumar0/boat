export const SET_SELECTED_BOAT = "SET_SELECTED_BOAT";
export const SET_BOOKING_DETAILS = "SET_BOOKING_DETAILS";
export const CLEAR_BOOKING = "CLEAR_BOOKING";

export const setSelectedBoat = (boat) => {
  return {
    type: SET_SELECTED_BOAT,
    payload: boat
  };
};

export const setBookingDetails = (details) => {
  return {
    type: SET_BOOKING_DETAILS,
    payload: details
  };
};

export const clearBooking = () => {
  return {
    type: CLEAR_BOOKING
  };
};
