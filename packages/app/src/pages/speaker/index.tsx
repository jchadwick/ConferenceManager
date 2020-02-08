import React, { useState } from "react";
import Layout from "./_Layout";
import { PageHeader } from "../../components/PageHeader";
import { Row, Column } from "../../components/Flexbox";
import { Button, TextField, Paper } from "@material-ui/core";
import ViewPublicProfileIcon from "@material-ui/icons/Launch";
import { PageTitle } from "../../components/PageTitle";
import { Loading } from "../../components/Loading";
import { SpeakerProfile } from "../../api";
import { useMySpeakerProfile } from "../../components/speaker/useMySpeakerProfile";
import { SpeakerTile } from "../../components/speaker/SpeakerTile";

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
