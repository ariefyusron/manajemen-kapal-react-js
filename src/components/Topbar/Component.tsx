import React, { memo } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./styles.scss";
import { Col, Row } from "..";
import { handleLogout } from "../../redux/actions";

const Component = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div className="component-topbar sticky-top">
      <div className="container-fluid">
        <Row style={{ height: 70 }} className="align-items-center">
          <Col
            size={2}
            className="left"
            style={{ height: "100%" }}
            onClick={() => history.push("/")}
          >
            <span className="navbar-brand mb-0 h1">Home</span>
          </Col>
          <Col size={10}>
            <Row justifyContent="end">
              <button
                className="btn btn-link my-2 my-sm-0"
                type="button"
                style={{ color: "white", textDecoration: "underline" }}
                onClick={() => dispatch(handleLogout())}
              >
                Logout
              </button>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default memo(Component);
