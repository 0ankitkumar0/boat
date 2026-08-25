import React, { useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setBookingDetails } from "../redux/bookingActions";
import boatsData from "../data/boats";

const BookingForm = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const selectedBoat = useSelector((state) => state.selectedBoat);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [errors, setErrors] = useState({});

  // Fallback to searching data if they hit refresh (optional safety, though selectedBoat from Redux is required later)
  const boat = selectedBoat || boatsData.find((b) => b.id === parseInt(id));

  if (!boat) {
    return (
      <div className="error-message">
        <h2>Boat not found</h2>
        <Link to="/" className="back-button">Back to Boats</Link>
      </div>
    );
  }

  const validateForm = () => {
    let newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!email.trim() || !email.includes("@")) {
      newErrors.email = "Enter a valid email";
    }

    if (!phone.trim() || phone.length < 5) {
      newErrors.phone = "Enter a valid phone number";
    }

    if (!bookingDate) {
      newErrors.bookingDate = "Booking date is required";
    } else {
      const selected = new Date(bookingDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        newErrors.bookingDate = "Booking date cannot be in the past";
      }
    }

    if (guests < 1) {
      newErrors.guests = "Must have at least 1 guest";
    } else if (guests > boat.capacity) {
      newErrors.guests = `Maximum capacity is ${boat.capacity} guests`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      const bookingInfo = {
        name,
        email,
        phone,
        bookingDate,
        guests
      };

      dispatch(setBookingDetails(bookingInfo));
      history.push("/booking-summary");
    }
  };

  return (
    <div className="booking-form-container">
      <Link to={`/boats/${boat.id}`} className="back-button">← Back to Boat Details</Link>
      
      <h2>Book {boat.name}</h2>
      
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label>Full Name</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="enter your name"
          />
          {errors.name && <span className="error-text">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="enter your email"
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input 
            type="tel" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            placeholder="enter your phone number"
          />
          {errors.phone && <span className="error-text">{errors.phone}</span>}
        </div>

        <div className="form-group">
          <label>Booking Date</label>
          <input 
            type="date" 
            value={bookingDate} 
            onChange={(e) => setBookingDate(e.target.value)} 
          />
          {errors.bookingDate && <span className="error-text">{errors.bookingDate}</span>}
        </div>

        <div className="form-group">
          <label>Number of Guests (Max: {boat.capacity})</label>
          <input 
            type="number" 
            value={guests} 
            onChange={(e) => setGuests(parseInt(e.target.value))} 
            min="1"
            max={boat.capacity}
          />
          {errors.guests && <span className="error-text">{errors.guests}</span>}
        </div>

        <button type="submit" className="primary-button">Continue to Summary</button>
      </form>
    </div>
  );
};

export default BookingForm;
