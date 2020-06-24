import React from "react";

import { documentTitle } from "../../utils";
import { Col, Container, Row } from "../../components";

const Component = () => {
  documentTitle("Admin - Survey");

  return (
    <Container>
      <Row style={{ marginBottom: 10, marginTop: 10 }}>
        <Col>
          <h1>Type Survey</h1>
        </Col>
      </Row>

      <Row justifyContent="end">
        <Col size={2}>
          <button
            type="button"
            className="btn btn-primary"
            style={{ width: "100%", marginBottom: 5 }}
          >
            Add
          </button>
        </Col>
      </Row>

      <Row>
        <Col>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th scope="col">No</th>
                <th scope="col">Username</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1.</th>
                <td>username</td>
                <td>
                  <button type="button" className="btn btn-success">
                    edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    style={{ marginLeft: 15 }}
                  >
                    delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  );
};

export default Component;
