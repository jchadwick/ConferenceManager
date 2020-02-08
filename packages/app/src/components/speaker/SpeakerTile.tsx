import React from "react";
import { SpeakerProfile } from "../../api";
import { Paper, makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles(
  createStyles({
    root: {},
    name: {},
    avatar: {},
    tagline: {}
  })
);

interface SpeakerTileProps {
  speaker: SpeakerProfile;
}

export const SpeakerTile = ({ speaker }: SpeakerTileProps) => {
  const classes = useStyles({});

  return (
    <Paper className={classes.root}>
      <div className={classes.avatar}>
          <img src={speaker.avatar} alt={speaker.name} />
      </div>
      <div className={classes.name}>{speaker.name}</div>
      <div className={classes.tagline}>{speaker.tagline}</div>
    </Paper>
  );
};
