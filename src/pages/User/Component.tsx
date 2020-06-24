import React, { useState } from "react";

import { documentTitle } from "../../utils";
import { Col, Container, Row } from "../../components";
import { Form } from "./components";

const Component = () => {
  documentTitle("Admin - User");

  const [modalAdd, setModalAdd] = useState(false);

  return (
    <Container>
      <Row style={{ marginBottom: 10, marginTop: 10 }}>
        <Col>
          <h1>User</h1>
        </Col>
      </Row>

      <Row justifyContent="end">
        <Col size={2}>
          <button
            type="button"
            className="btn btn-primary"
            style={{ width: "100%", marginBottom: 5 }}
            onClick={() => setModalAdd(true)}
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

      <Form isShow={modalAdd} onHide={() => setModalAdd(false)} />
    </Container>
  );
};

export default Component;
