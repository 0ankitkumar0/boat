import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import BoatListing from "./pages/BoatListing";
import BoatDetails from "./pages/BoatDetails";
import BookingForm from "./pages/BookingForm";
import BookingSummary from "./pages/BookingSummary";
import Confirmation from "./pages/Confirmation";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={BoatListing} />
        <Route exact path="/boats/:id" component={BoatDetails} />
        <Route exact path="/boats/:id/book" component={BookingForm} />
        <Route exact path="/booking-summary" component={BookingSummary} />
        <Route exact path="/confirmation" component={Confirmation} />
      </Switch>
    </div>
  );
}

export default App;