import React, { ReactNode, memo } from "react";

import { Col, Row } from "..";

interface Props {
  children: ReactNode;
  className?: string;
}

const Component = ({ children, className }: Props) => (
  <Row className={className}>
    <Col>{children}</Col>
  </Row>
);

Component.defaultProps = {
  className: ""
};

export default memo(Component);
