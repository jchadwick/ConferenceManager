import React from "react";
import { RouteComponentProps } from "react-router";
import { Column } from "../../../components";

export default ({
  match: {
    params: { eventId }
  }
}: RouteComponentProps<{ eventId }>) => {
  return (
    <Column justifyContent="center" alignItems="center">
      <h3>Edit Event #{eventId}</h3>
    </Column>
  );
};
