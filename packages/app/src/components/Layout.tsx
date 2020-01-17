import React, { PropsWithChildren } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { MainMenu, ViewMode } from "./MainMenu";
import { Flexbox, Column } from "./Flexbox";
import { Typography, Link } from "@material-ui/core";

const useStyles = makeStyles(theme =>
  createStyles({
    footer: {
      height: theme.spacing(5),
      borderTop: `1px solid ${theme.palette.divider}`,
      paddingTop: theme.spacing(1)
    }
  })
);

interface LayoutProps {
  view: ViewMode;
  direction?: "column" | "row";
}

export default function Layout(props: PropsWithChildren<LayoutProps>) {
  const classes = useStyles(props);

  return (
    <>
      <Column flexGrow={1}>
        <MainMenu view={props.view} />
        <Flexbox
          component="main"
          flexGrow={1}
          flexDirection={props.direction || "column"}
        >
          {props.children}
        </Flexbox>
        <footer className={classes.footer}>
          <Copyright />
        </footer>
      </Column>
    </>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      <span>{` Copyright © ${new Date().getFullYear()} `}</span>
      <Link color="inherit" href="https://www.jesschadwick.com/">
        Jess Chadwick
      </Link>
    </Typography>
  );
}
