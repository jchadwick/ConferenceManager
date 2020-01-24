import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/index";
import SpeakerDashboard from "./pages/speaker";
import OrganizerDashboard from "./pages/organizer";
import EventDetails from "./pages/event";
import EventOrganizerDashboard from "./pages/event";
import Layout from "./components/Layout";

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/event/:eventId" component={EventDetails} />
          <Route exact path="/speaker" component={SpeakerDashboard} />
          <Route exact path="/organizer" component={OrganizerDashboard} />
          <Route
            path="/organizer/event/:eventId"
            component={EventOrganizerDashboard}
          />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
