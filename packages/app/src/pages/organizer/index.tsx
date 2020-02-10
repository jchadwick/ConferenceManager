import React, { useState, useEffect } from "react";
import { Flexbox } from "../../components";
import { Card, CardContent, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { RouteComponentProps } from "react-router";
import eventService from "../../services/eventService";
import { useCurrentUser } from "../../components/useCurrentUser";
import { EventSummary } from "../../api";
import OrganizerLayout from "./_Layout";

export default function OrganizerDashboard(props: RouteComponentProps<{}>) {
  const user = useCurrentUser();
  const [events, setEvents] = useState<EventSummary[]>([]);

  useEffect(() => {
    eventService.getEventsOrganizedBy(user.username).then(setEvents);
  }, []);

  return (
    <OrganizerLayout events={events}>
      <Flexbox flexGrow={1} flexDirection="column" marginX="10vw">
        <h2>My Events</h2>

        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </Flexbox>
    </OrganizerLayout>
  );
}

function EventCard({ event }: { event: EventSummary }) {
  return (
    <Card variant="outlined" style={{ cursor: "pointer" }}>
      <Link to={`/organizer/event/${event.id}`}>
        <CardContent>
          <Typography variant="h5" component="h3">
            {event.displayName}
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
