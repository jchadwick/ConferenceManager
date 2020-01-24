import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Tabs, Tab } from "@material-ui/core";
import { Link } from "@reach/router";
import { Row } from "./Flexbox";
import { useAuth0 } from "../util/auth0";

const ViewPageIndexLookup = { speaker: 0, organizer: 1 };

export type ViewMode = keyof typeof ViewPageIndexLookup | null;

const useStyles = makeStyles(theme =>
  createStyles({
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`
    }
  })
);

interface MainMenuProps {
  view: ViewMode;
}

export const MainMenu = (props: MainMenuProps) => {
  const classes = useStyles(props);
  const { view } = props;

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar style={{ flexWrap: "wrap" }}>
        <Link to="/">
          <Typography variant="h6" color="inherit" noWrap>
            Conference Manager
          </Typography>
        </Link>
        <Row flexGrow={4}>
          <MainNav view={view} />
        </Row>
        <CurrentUser />
      </Toolbar>
    </AppBar>
  );
};

const CurrentUser = () => {
  const { loading, isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return loading ? <div></div> : (isAuthenticated && user) ? (
    <div>
      {user.name}
      <Button
        onClick={() => logout()}
        color="secondary"
        variant="outlined"
        className="link"
      >
        Logout
      </Button>
    </div>
  ) : (
    <Button
      onClick={() => loginWithRedirect()}
      color="primary"
      variant="outlined"
      className="link"
    >
      Login
    </Button>
  );
};

const MainNav = ({ view }) => {
  const currentTab = view ? ViewPageIndexLookup[view] : null;
  return (
    <>
      <Tabs
        value={currentTab}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Link to="/speaker">
          <Tab label="Speaker" />
        </Link>
        <Link to="/organizer">
          <Tab label="Organizer" />
        </Link>
      </Tabs>
    </>
  );
};
