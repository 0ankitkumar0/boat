import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { clearBooking } from "../redux/bookingActions";

const Confirmation = () => {
  const selectedBoat = useSelector((state) => state.selectedBoat);
  const bookingDetails = useSelector((state) => state.bookingDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearBooking());
    };
  }, [dispatch]);

  if (!selectedBoat || !bookingDetails) {
    return (
      <div className="error-message">
        <h2>No booking information found.</h2>

        <Link to="/" className="primary-button">
          Back to Boats
        </Link>
      </div>
    );
  }

  return (
    <div className="confirmation-container">

      <div className="success-icon">✓</div>

      <h2>Booking Confirmed!</h2>

      <p className="confirmation-message">
        Your boat booking has been successfully confirmed.
      </p>

      <div className="confirmation-details">

        <div className="confirmation-row">
          <span>Boat</span>
          <strong>{selectedBoat.name}</strong>
        </div>

        <div className="confirmation-row">
          <span>Location</span>
          <strong>{selectedBoat.location}</strong>
        </div>

        <div className="confirmation-row">
          <span>Booking Date</span>
          <strong>{bookingDetails.bookingDate}</strong>
        </div>

        <div className="confirmation-row">
          <span>Guests</span>
          <strong>{bookingDetails.guests}</strong>
        </div>

        <div className="confirmation-row">
          <span>Total Price</span>
          <strong>₹{selectedBoat.price.toLocaleString()}</strong>
        </div>

      </div>

      <p className="confirmation-note">
        Thank you for booking with us.
      </p>

      <Link to="/" className="primary-button confirmation-button">
        Back to Boats
      </Link>

    </div>
  );
};

export default Confirmation;