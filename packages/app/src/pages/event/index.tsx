import React from "react";
import { RouteComponentProps } from "@reach/router";
import Layout from "../../components/Layout";
import { Column } from "../../components";

export default ({eventId}: RouteComponentProps<{ eventId }>) => {
  console.log(`eventId: ${typeof eventId}`)
  return (
    <Layout view={null}>
      <Column justifyContent="center" alignItems="center">
        <h3>Event #{eventId}</h3>
      </Column>
    </Layout>
  );
};
