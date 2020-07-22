import React, { ReactNode, memo } from "react";

import { Col, Loading, Row } from "..";

interface Props {
  children: ReactNode;
  className?: string;
  isLoading?: boolean;
}

const Component = ({ children, className, isLoading }: Props) => (
  <Row>
    <Col className={className}>{children}</Col>
    {isLoading && <Loading />}
  </Row>
);

Component.defaultProps = {
  className: "",
  isLoading: false
};

export default memo(Component);
