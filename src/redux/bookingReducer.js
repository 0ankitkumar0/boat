import { SET_SELECTED_BOAT, SET_BOOKING_DETAILS, CLEAR_BOOKING } from "./bookingActions";

const initialState = {
  selectedBoat: null,
  bookingDetails: null
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_BOAT:
      return {
        ...state,
        selectedBoat: action.payload
      };
    case SET_BOOKING_DETAILS:
      return {
        ...state,
        bookingDetails: action.payload
      };
    case CLEAR_BOOKING:
      return initialState;
    default:
      return state;
  }
};

export default bookingReducer;
