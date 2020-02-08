import React, { useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Tabs, Tab } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Row } from "./Flexbox";
import { Auth } from "aws-amplify";
import { Authenticator } from "aws-amplify-react";
import { UsernameAttributes } from "aws-amplify-react/lib-esm/Auth/common/types";

const ViewPageIndexLookup = { speaker: 0, organizer: 1 };

export type ViewMode = keyof typeof ViewPageIndexLookup | null;

const useStyles = makeStyles(theme =>
  createStyles({
    mainLogo: {
      fontSize: "150%",
      textDecoration: "none",
      color: "#555",
      fontWeight: 600
    },
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

  useEffect(() => {
    Auth.currentSession().then(x => console.log(x));
  }, []);

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar style={{ flexWrap: "wrap" }}>
        <Link className={classes.mainLogo} to="/">
          Conference Manager
        </Link>
        <Row flexGrow={4} justifyContent="center">
          <MainNav view={view} />
        </Row>
        <CurrentUser />
      </Toolbar>
    </AppBar>
  );
};

const CurrentUser = () => {
  return (
    <Link to="/login">
      <Authenticator usernameAttributes={UsernameAttributes.USERNAME} />
    </Link>
  );
};

const MainNav = ({ view }) => {
  const currentTab = view ? ViewPageIndexLookup[view] : null;
  return view ? (
    <Tabs
      value={currentTab}
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      <Tab component={Link} to="/my/profile" label="Speaker" />
      <Tab component={Link} to="/organizer" label="Organizer" />
    </Tabs>
  ) : null;
};
