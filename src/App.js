import React, { useEffect, useState } from "react";
import "./App.css";

import boatsData from "./data/boats";
import BoatList from "./components/BoatList";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import LoadingState from "./components/LoadingState";

function App() {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [availability, setAvailability] = useState("All");

  // Showing loading state for 1 second
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  // Search input
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Boat type filter
  const handleType = (event) => {
    setSelectedType(event.target.value);
  };

  // Availability filter
  const handleAvailability = (event) => {
    setAvailability(event.target.value);
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedType("All");
    setAvailability("All");
  };

  // Filter boats
  const filteredBoats = boatsData.filter((boat) => {
    const boatName = boat.name.toLowerCase();
    const boatLocation = boat.location.toLowerCase();
    const searchValue = searchTerm.toLowerCase();

    const searchMatch =
      boatName.includes(searchValue) ||
      boatLocation.includes(searchValue);

    const typeMatch =
      selectedType === "All" || boat.type === selectedType;

    let availabilityMatch = true;

    if (availability === "Available") {
      availabilityMatch = boat.availability === true;
    }

    if (availability === "Unavailable") {
      availabilityMatch = boat.availability === false;
    }

    return searchMatch && typeMatch && availabilityMatch;
  });

  return (
    <div className="App">
      <header className="app-header">
        <h1>Boats & Yachts</h1>
        <p>Find the perfect boat for your next trip.</p>
      </header>

      <main className="app-main">
        <div className="controls-section">

          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={handleSearch}
          />

          <Filters
            selectedType={selectedType}
            onTypeChange={handleType}
            availabilityFilter={availability}
            onAvailabilityChange={handleAvailability}
            onClearFilters={clearFilters}
          />

        </div>

        <div className="content-section">
          {loading ? (
            <LoadingState />
          ) : (
            <BoatList boats={filteredBoats} />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;