import React, { ReactNode, memo } from "react";

import { Col, Row } from "..";

interface Props {
  children: ReactNode;
  className?: string;
}

const Component = ({ children, className }: Props) => (
  <Row>
    <Col className={className}>{children}</Col>
  </Row>
);

Component.defaultProps = {
  className: ""
};

export default memo(Component);
