import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./styles.scss";
import { Reducers } from "../../redux/types";
import { getAllKapal, getTypeKapal, getTypeSurvey } from "../../redux/actions";
import { documentTitle } from "../../utils";
import { Col, Container, Row } from "../../components";
import { ICONS } from "../../configs";

const Component = () => {
  documentTitle("Identitas Kapal");
  const dispatch = useDispatch();

  const kapalState = useSelector((state: Reducers) => state.kapal);

  useEffect(() => {
    dispatch(getAllKapal());
    dispatch(getTypeSurvey());
    dispatch(getTypeKapal());
  }, [dispatch]);

  return (
    <Container
      isLoading={
        kapalState.kapal.isLoading ||
        kapalState.deleteKapal.isLoading ||
        kapalState.patchKapal.isLoading ||
        kapalState.addKapal.isLoading
      }
      className="page-dashboard"
    >
      <Row style={{ marginBottom: 10, marginTop: 10 }}>
        <Col>
          <h1>Dashboard</h1>
        </Col>
      </Row>

      <Row>
        <Col size={3} className="card">
          <Row justifyContent="center" className="align-items-center">
            <Col size={7}>
              <h5 className="text-muted">Kapal</h5>
              <h1 className="display-3">5</h1>
            </Col>
            <Col size={4}>
              <img src={ICONS.shipColor} alt="ship-color" />
            </Col>
          </Row>
        </Col>

        <Col size={3} className="card">
          <Row justifyContent="center" className="align-items-center">
            <Col size={7}>
              <h5 className="text-muted">Users</h5>
              <h1 className="display-3">5</h1>
            </Col>
            <Col size={4}>
              <img src={ICONS.userColor} alt="ship-color" />
            </Col>
          </Row>
        </Col>

        <Col size={3} className="card">
          <Row justifyContent="center" className="align-items-center">
            <Col size={7}>
              <h5 className="text-muted">RAB Reparasi Kapal</h5>
              <h1 className="display-3">5</h1>
            </Col>
            <Col size={4}>
              <img src={ICONS.rabColor} alt="ship-color" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Component;
