import React from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedBoat } from "../redux/bookingActions";
import boatsData from "../data/boats";

const BoatDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const boat = boatsData.find((b) => b.id === parseInt(id));

  if (!boat) {
    return (
      <div className="error-message">
        <h2>Boat not found</h2>
        <Link to="/" className="back-button">Back to Boats</Link>
      </div>
    );
  }

  const handleBookNow = () => {
    dispatch(setSelectedBoat(boat));
    history.push(`/boats/${boat.id}/book`);
  };

  return (
    <div className="details-container">
      <Link to="/" className="back-button">← Back to Boats</Link>
      
      <div className="boat-details-content">
        <div className="details-image-container">
          <img src={boat.image} alt={boat.name} className="details-image" />
        </div>
        
        <div className="details-info">
          <h2>{boat.name}</h2>
          <p className="location-text">{boat.location}</p>
          <p className="type-badge">{boat.type}</p>
          
          <div className="details-specs">
            <p className="price">₹{boat.price.toLocaleString()} / day</p>
            <p className="capacity">Capacity: {boat.capacity} guests</p>
          </div>
          
          <div className={`availability-badge ${boat.availability ? 'available' : 'unavailable'}`}>
            {boat.availability ? 'Available' : 'Unavailable'}
          </div>

          <button 
            className="primary-button book-now-btn" 
            onClick={handleBookNow}
            disabled={!boat.availability}
          >
            {boat.availability ? "Book Now" : "Currently Unavailable"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BoatDetails;
