import React from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core";

const theme = createMuiTheme({
  overrides: {
    MuiPaper: {
      root: {
        padding: ".25em 1em",
        margin: ".25em"
      }
    }
  },
  props: {
    MuiTextField: {
      margin: "dense",
      variant: "outlined",
      fullWidth: true
    }
  }
});

export const ThemeProvider = ({ children }) => (
  <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
);
