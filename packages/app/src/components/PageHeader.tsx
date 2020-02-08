import React, { ReactElement } from "react";
import { Row } from "./Flexbox";
import { Paper } from "@material-ui/core";

interface PageHeaderProps {
  title: string | ReactElement;
  actions?: ReactElement;
}

export const PageHeader = ({ title, actions }: PageHeaderProps) => (
  <Paper>
    <Row>
      <Row flexGrow={1}>
        <h2>{title}</h2>
      </Row>
      <Row flexGrow={4} alignItems="center" justifyContent="flex-end">
        {actions && actions}
      </Row>
    </Row>
  </Paper>
);
