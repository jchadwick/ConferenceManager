import React from "react";
import { RouteComponentProps } from '@reach/router';
import Layout from "../components/Layout";
import { Column } from "../components";

export default (props: RouteComponentProps<{}>) => (
  <Layout view={null}>
    <Column justifyContent="center" alignItems="center">
      <h3>Welcome!</h3>
      <div>Choose your role to get started.</div>
    </Column>
  </Layout>
);
