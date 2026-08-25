import React from 'react';

const Filters = ({ 
  selectedType, 
  onTypeChange, 
  availabilityFilter, 
  onAvailabilityChange, 
  onClearFilters 
}) => {
  return (
    <div className="filters-container">
      <div className="filter-group">
        <select value={selectedType} onChange={onTypeChange} className="filter-select">
          <option value="All">All Types</option>
          <option value="Yacht">Yacht</option>
          <option value="Speed Boat">Speed Boat</option>
          <option value="Sailboat">Sailboat</option>
          <option value="Catamaran">Catamaran</option>
        </select>
      </div>

      <div className="filter-group">
        <select value={availabilityFilter} onChange={onAvailabilityChange} className="filter-select">
          <option value="All">All Availability</option>
          <option value="Available">Available</option>
          <option value="Unavailable">Unavailable</option>
        </select>
      </div>

      <button onClick={onClearFilters} className="clear-filters-btn">
        Clear Filters
      </button>
    </div>
  );
};

export default Filters;
