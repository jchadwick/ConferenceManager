import React, { PropsWithChildren } from "react";
import { Divider } from "@material-ui/core";
import {
  SecondaryMenu,
  SecondaryMenuItem
} from "../../components/SecondaryMenu";
import DashboardIcon from "@material-ui/icons/Dashboard";
import EventIcon from "@material-ui/icons/Event";
import { Column, Row, Loading } from "../../components";
import { EventSummary } from "../../api";

interface OrganizerLayoutProps {
  events: EventSummary[];
}

export default function OrganizerLayout({
  children,
  events
}: PropsWithChildren<OrganizerLayoutProps>) {
  return (
    <Row flexGrow={1}>
      <SecondaryMenu>
        <SecondaryMenuItem text="Dashboard" Icon={DashboardIcon} />
        <Divider />
        {events ? (
          events.map(event => (
            <SecondaryMenuItem
              key={event.id}
              text={event.displayName}
              Icon={EventIcon}
            />
          ))
        ) : (
          <Loading />
        )}
      </SecondaryMenu>

      <Column flexGrow={1} component="section">
        {children}
      </Column>
    </Row>
  );
}
