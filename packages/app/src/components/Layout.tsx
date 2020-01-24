import React, { PropsWithChildren } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { MainMenu } from "./MainMenu";
import { Typography, Link } from "@material-ui/core";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles(theme =>
  createStyles({
    container: {
      display: "flex",
      flexGrow: 1,
      flexDirection: "column"
    },
    main: {
      display: "flex",
      flexGrow: 1
    },
    footer: {
      height: theme.spacing(5),
      borderTop: `1px solid ${theme.palette.divider}`,
      paddingTop: theme.spacing(1)
    }
  })
);

export default function Layout(props: PropsWithChildren<{}>) {
  const classes = useStyles(props);
  const { pathname } = useLocation();

  const [view] = pathname
    .substr(1)
    .toLowerCase()
    .split("/");

  return (
    <>
      <div className={classes.container}>
        <MainMenu view={view as any} />
        <main className={classes.main}>{props.children}</main>
        <footer className={classes.footer}>
          <Copyright />
        </footer>
      </div>
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
