import React from 'react';

const BoatCard = ({ boat }) => {
  const { name, location, type, price, capacity, image, availability } = boat;

  return (
    <div className="boat-card">
      <div className="boat-image-container">
        <img src={image} alt={name} className="boat-image" />
      </div>
      <div className="boat-info">
        <h3>{name}</h3>
        <p className="location-text">{location}</p>
        
        <p className="type-badge">{type}</p>
        
        <div className="boat-details">
          <p className="price">₹{price.toLocaleString()} / day</p>
          <p className="capacity">Capacity: {capacity} people</p>
        </div>

        <div className={`availability-badge ${availability ? 'available' : 'unavailable'}`}>
          {availability ? 'Available' : 'Unavailable'}
        </div>
      </div>
    </div>
  );
};

export default BoatCard;
