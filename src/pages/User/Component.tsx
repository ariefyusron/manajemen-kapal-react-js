import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { documentTitle } from "../../utils";
import { Col, Container, Row } from "../../components";
import { Form } from "./components";
import { deleteUser, getAllUser } from "../../redux/actions";
import { Reducers } from "../../redux/types";

const Component = () => {
  documentTitle("Admin - User");
  const dispatch = useDispatch();

  const [modalAdd, setModalAdd] = useState(false);
  const authState = useSelector((state: Reducers) => state.auth);

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  return (
    <Container isLoading={authState.user.isLoading}>
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
                <th scope="col">Permission</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {authState.user.list.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{`${index + 1}.`}</th>
                  <td>{item.username}</td>
                  <td>{item.is_admin ? "Admin" : "User"}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      style={{ marginLeft: 15 }}
                      onClick={() => dispatch(deleteUser(item.id))}
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

      <Form isShow={modalAdd} onHide={() => setModalAdd(false)} />
    </Container>
  );
};

export default Component;
