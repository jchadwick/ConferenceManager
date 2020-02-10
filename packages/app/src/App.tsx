import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/index";
import SpeakerDashboard from "./pages/speaker";
import OrganizerDashboard from "./pages/organizer";
import EventDetails from "./pages/event";
import Layout from "./components/Layout";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react";
import { ThemeProvider } from "./components/ThemeProvider";

Amplify.configure(awsconfig);

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/event/:eventId" component={EventDetails} />
            <Route exact path="/my/profile" component={SpeakerDashboard} />
            <Route exact path="/organizer" component={OrganizerDashboard} />
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default withAuthenticator(App);
