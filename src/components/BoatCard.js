import React from "react";
import { Link } from "react-router-dom";

const BoatCard = ({ boat }) => {
  const {
    id,
    name,
    location,
    type,
    price,
    capacity,
    image,
    availability
  } = boat;

  return (
    <Link to={`/boats/${id}`} className="boat-card-link">
      <div className="boat-card">
        <div className="boat-image-container">
          <img src={image} alt={name} className="boat-image" />
        </div>

        <div className="boat-info">
          <h3>{name}</h3>

          <p className="location-text">{location}</p>

          <p className="type-badge">{type}</p>

          <div className="boat-details">
            <p className="price">
              ₹{price.toLocaleString()} / day
            </p>

            <p className="capacity">
              Capacity: {capacity} people
            </p>
          </div>

          <div
            className={`availability-badge ${
              availability ? "available" : "unavailable"
            }`}
          >
            {availability ? "Available" : "Unavailable"}
          </div>

          <div className="view-details-link">
            View Detail
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BoatCard;