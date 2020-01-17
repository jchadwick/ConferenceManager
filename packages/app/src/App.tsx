import React from "react";
import { Router } from "@reach/router";
import Homepage from "./pages/index";
import SpeakerDashboard from "./pages/speaker";
import OrganizerDashboard from "./pages/organizer";
import EventDetails from "./pages/event";
import EventOrganizerDashboard from "./pages/event";

const App: React.FC = () => {
  return (
    <Router style={{ display: "flex", flexGrow: 1, flexDirection: "column" }}>
      <Homepage path="/" />
      <EventDetails path="/event/:eventId" />
      <SpeakerDashboard path="/speaker" />
      <OrganizerDashboard path="/organizer" />
      <EventOrganizerDashboard path="/organizer/event/:eventId" />
    </Router>
  );
};

export default App;
