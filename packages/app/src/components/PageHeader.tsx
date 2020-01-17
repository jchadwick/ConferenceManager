import React, { ReactElement } from "react";
import { Panel } from "./Panel";
import { Row } from "./Flexbox";

interface PageHeaderProps {
  title: string | ReactElement;
  actions?: ReactElement;
}

export const PageHeader = ({ title, actions }: PageHeaderProps) => (
  <Panel>
    <Row>
      <Row flexGrow={1}>
        <h2>{title}</h2>
      </Row>
      <Row flexGrow={4} alignItems="center" justifyContent="flex-end">
        {actions && actions}
      </Row>
    </Row>
  </Panel>
);
