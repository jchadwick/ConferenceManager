import React from "react";
import { RouteComponentProps } from "react-router";
import { Column } from "./components";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export default (props: RouteComponentProps<{}>) => (
  <Column flexGrow={1} justifyContent="center" alignItems="center">
    <h3>Welcome!</h3>
    <Column
      height="50%"
      width="40%"
      justifyContent="space-evenly"
      alignItems="center"
    >
      <div>Are you a:</div>
      <Button
        component={Link}
        to="/speaker"
        fullWidth
        size="large"
        variant="contained"
      >
        Speaker
      </Button>
      <div>or an...</div>
      <Button
        component={Link}
        to="/organizer"
        fullWidth
        size="large"
        variant="contained"
      >
        Organizer
      </Button>
    </Column>
  </Column>
);
