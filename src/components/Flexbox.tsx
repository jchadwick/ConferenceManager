import React from "react";
import Box, { BoxProps } from "@material-ui/core/Box";

export const Flexbox = (props: BoxProps) => <Box display="flex" {...props} />;

export const Row = (props: BoxProps) => (
  <Flexbox flexDirection="row" {...props} />
);

export const Column = (props: BoxProps) => (
  <Flexbox flexDirection="column" {...props} />
);
