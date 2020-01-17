import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import { Flexbox } from "../../components";
import { Card, CardContent, Typography } from "@material-ui/core";
import { Link } from "@reach/router";
import { RouteComponentProps } from "@reach/router";
import { Event } from "../../../../shared/models";

export default function OrganizerDashboard(props: RouteComponentProps<{}>) {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/dev/organizer/events", { mode: "cors" })
      .then(x => x.json())
      .then(setEvents);
  }, []);

  return (
    <Layout view="organizer">
      <Flexbox flexGrow={1} flexDirection="column" marginX="10vw">
        <h2>My Events</h2>

        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </Flexbox>
    </Layout>
  );
}

function EventCard({ event }: { event: Event }) {
  return (
    <Card variant="outlined" style={{ cursor: "pointer" }}>
      <Link to={`/organizer/event/${event.id}`}>
        <CardContent>
          <Typography variant="h5" component="h3">
            {event.name}
          </Typography>
          {event.startTime && (
            <Typography color="textSecondary">
              {event.startTime} - {event.endTime}
            </Typography>
          )}
        </CardContent>
      </Link>
    </Card>
  );
}
