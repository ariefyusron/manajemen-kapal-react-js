import React, { ReactNode, memo } from "react";

import { Col, Row } from "..";

interface Props {
  children: ReactNode;
  title?: string;
}

const Component = ({ children, title }: Props) => (
  <div className="card">
    <div className="card-body">
      <>
        {title !== "" && (
          <Row style={{ marginBottom: 30 }}>
            <Col>
              <div className="h4" style={{ textAlign: "center" }}>
                {title}
              </div>
            </Col>
          </Row>
        )}
        {children}
      </>
    </div>
  </div>
);

Component.defaultProps = {
  title: ""
};

export default memo(Component);
