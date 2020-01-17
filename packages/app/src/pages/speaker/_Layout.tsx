import React, { PropsWithChildren } from "react";
import { Divider } from "@material-ui/core";
import {
  SecondaryMenu,
  SecondaryMenuItem
} from "../../components/SecondaryMenu";
import DashboardIcon from "@material-ui/icons/Dashboard";
import MyProfileIcon from "@material-ui/icons/Person";
import MySessionsIcon from "@material-ui/icons/QueuePlayNext";
import MyEventsIcon from "@material-ui/icons/Event";
import IntegrationsIcon from "@material-ui/icons/Settings";
import ViewPublicProfileIcon from "@material-ui/icons/Launch";
import Layout from "../../components/Layout";
import { Column } from "../../components/Flexbox";

export default function SpeakerLayout(props: PropsWithChildren<{}>) {
  return (
    <Layout view="speaker" direction="row">
      <SecondaryMenu>
        <SecondaryMenuItem text="Dashboard" Icon={DashboardIcon} />
        <SecondaryMenuItem text="My Profile" Icon={MyProfileIcon} />
        <SecondaryMenuItem text="My Sessions" Icon={MySessionsIcon} />
        <SecondaryMenuItem text="My Events" Icon={MyEventsIcon} />
        <SecondaryMenuItem text="Integrations" Icon={IntegrationsIcon} />
        <Divider />
        <SecondaryMenuItem
          text="View Public Profile"
          Icon={ViewPublicProfileIcon}
        />
      </SecondaryMenu>

      <Column flexGrow={1} component="section">
        {props.children}
      </Column>
    </Layout>
  );
}
