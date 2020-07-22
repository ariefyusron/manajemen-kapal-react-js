import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { documentTitle } from "../../utils";
import { Col, Container, FormType, Row } from "../../components";
import { deleteTypeSurvey, getTypeSurvey } from "../../redux/actions";
import { Reducers } from "../../redux/types";

const Component = () => {
  documentTitle("Admin - Survey");
  const dispatch = useDispatch();

  const kapalState = useSelector((state: Reducers) => state.kapal);
  const [modalAdd, setModalAdd] = useState(false);

  useEffect(() => {
    dispatch(getTypeSurvey());
  }, [dispatch]);

  return (
    <Container isLoading={kapalState.typeSurvey.isLoading}>
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
                <th scope="col">Name</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {kapalState.typeSurvey.list.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{`${index + 1}.`}</th>
                  <td>{item.name}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      style={{ marginLeft: 15 }}
                      onClick={() => dispatch(deleteTypeSurvey(item.id))}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Col>
      </Row>

      <FormType
        isShow={modalAdd}
        onHide={() => setModalAdd(false)}
        type="survey"
        title="Add Type Survey"
      />
    </Container>
  );
};

export default Component;
