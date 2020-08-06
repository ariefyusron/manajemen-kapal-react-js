import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import "./styles.scss";
import { Reducers } from "../../redux/types";
import { getDashboard } from "../../redux/actions";
import { documentTitle } from "../../utils";
import { Col, Container, Row } from "../../components";
import { ICONS } from "../../configs";

const ICON = ICONS as any;

const Component = () => {
  documentTitle("Identitas Kapal");
  const dispatch = useDispatch();
  const history = useHistory();

  const dashboardState = useSelector((state: Reducers) => state.dashboard);

  useEffect(() => {
    dispatch(getDashboard());
  }, [dispatch]);

  return (
    <Container isLoading={dashboardState.isLoading} className="page-dashboard">
      <Row style={{ marginBottom: 10, marginTop: 10 }}>
        <Col>
          <h1>Dashboard</h1>
        </Col>
      </Row>

      <Row>
        {dashboardState.list.map((item, index) => (
          <Col
            size={3}
            className="card"
            key={index}
            onClick={() => history.push(item.link)}
          >
            <Row justifyContent="center" className="align-items-center">
              <Col size={7}>
                <h5 className="text-muted">{item.title}</h5>
                <h1 className="display-3">{item.value}</h1>
              </Col>
              <Col size={4}>
                <img src={ICON[item.icon]} alt="ship-color" />
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Component;
