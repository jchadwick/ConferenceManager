import React, { useState, PropsWithChildren } from "react";
import {
  Drawer,
  IconButton,
  makeStyles,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import clsx from "clsx";
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon
} from "@material-ui/icons";
import { ReactComponentLike } from "prop-types";

const useStyles = makeStyles(theme => ({
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  drawerPaper: {
    flexGrow: 1,
    position: "relative",
    whiteSpace: "nowrap",
    width: "16rem",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  }
}));

export function SecondaryMenu(props: PropsWithChildren<{}>) {
  const [open, setOpen] = useState<boolean>(true);
  const classes = useStyles(props);

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={() => setOpen(!open)}>
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      {props.children}
    </Drawer>
  );
}

interface SecondaryMenuItemProps {
  Icon: ReactComponentLike;
  text: string;
  action?: () => void;
}

export function SecondaryMenuItem({
  Icon,
  text,
  action
}: SecondaryMenuItemProps) {
  return (
    <ListItem button onClick={action}>
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
}
