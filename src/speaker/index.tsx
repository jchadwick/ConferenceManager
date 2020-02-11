import React, { useState } from "react";
import Layout from "./_Layout";
import { Loading, PageHeader, PageTitle, Row, Column } from "../components";
import { Button, TextField, Paper } from "@material-ui/core";
import ViewPublicProfileIcon from "@material-ui/icons/Launch";
import { SpeakerProfile } from "../api";
import { SpeakerTile } from "./components/SpeakerTile";
import { useMySpeakerProfile } from "./components/useMySpeakerProfile";

export default function SpeakerDashboard() {
  const [editProfile] = useState(false);
  const profile = useMySpeakerProfile();

  return (
    <Layout>
      <PageHeader
        title="Speaker Dashboard"
        actions={
          <Row>
            <Button color="primary" variant="outlined" className="link">
              <ViewPublicProfileIcon />
              Public Profile
            </Button>
          </Row>
        }
      />

      <Paper>
        <Column>
          <PageTitle title="My Profile" />

          {profile ? (
            editProfile ? (
              <EditSpeakerProfile profile={profile} />
            ) : (
              <SpeakerTile speaker={profile} />
            )
          ) : (
            <Loading />
          )}
        </Column>
      </Paper>
    </Layout>
  );
}

const EditSpeakerProfile = ({ profile }: { profile: SpeakerProfile }) => {
  const [prof] = useState(profile);

  return (
    <Column>
      <Row>
        <form noValidate autoComplete="off">
          <TextField
            label="Key"
            value={prof.key || ""}
            onChange={e => (prof.key = e.target.value)}
          />
          <TextField
            label="Name"
            value={prof.name || ""}
            onChange={e => (prof.name = e.target.value)}
          />
          <TextField multiline label="Biography" value={prof.biography || ""} />
        </form>
      </Row>
    </Column>
  );
};
