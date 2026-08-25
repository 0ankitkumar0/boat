import React from "react";
import { useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

const BookingSummary = () => {
  const selectedBoat = useSelector((state) => state.selectedBoat);
  const bookingDetails = useSelector((state) => state.bookingDetails);
  const history = useHistory();

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

  const handleConfirm = () => {
    history.push("/confirmation");
  };

  return (
    <div className="summary-container">

      <button
        className="back-button summary-back-button"
        onClick={() => history.goBack()}
      >
        ← Back
      </button>

      <h2>Booking Summary</h2>

      <div className="summary-card">
        <h3>Boat Details</h3>

        <p>
          <strong>Boat:</strong> {selectedBoat.name}
        </p>

        <p>
          <strong>Location:</strong> {selectedBoat.location}
        </p>

        <p>
          <strong>Type:</strong> {selectedBoat.type}
        </p>

        <p>
          <strong>Price:</strong> ₹{selectedBoat.price.toLocaleString()} / day
        </p>
      </div>

      <div className="summary-card">
        <h3>Customer Details</h3>

        <p>
          <strong>Name:</strong> {bookingDetails.name}
        </p>

        <p>
          <strong>Email:</strong> {bookingDetails.email}
        </p>

        <p>
          <strong>Phone:</strong> {bookingDetails.phone}
        </p>

        <p>
          <strong>Booking Date:</strong> {bookingDetails.bookingDate}
        </p>

        <p>
          <strong>Guests:</strong> {bookingDetails.guests}
        </p>
      </div>

      <button
        className="primary-button confirm-btn"
        onClick={handleConfirm}
      >
        Confirm Booking
      </button>

    </div>
  );
};

export default BookingSummary;