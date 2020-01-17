import React from "react";
import Layout from "./_Layout";
import { PageHeader } from "../../components/PageHeader";
import { Row } from "../../components/Flexbox";
import { Button } from "@material-ui/core";
import ViewPublicProfileIcon from "@material-ui/icons/Launch";
import { RouteComponentProps } from "@reach/router";

export default function SpeakerDashboard(props: RouteComponentProps) {
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
    </Layout>
  );
}
