import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Reducers } from "../../redux/types";
import {
  deleteKapal,
  getAllKapal,
  getTypeKapal,
  getTypeSurvey,
} from "../../redux/actions";
import { documentTitle } from "../../utils";
import { Col, Container, Row } from "../../components";
import { Form } from "./components";

const Component = () => {
  documentTitle("Identitas Kapal");
  const dispatch = useDispatch();

  const kapalState = useSelector((state: Reducers) => state.kapal);
  const [modalAdd, setModalAdd] = useState(false);
  const [modalEdit, setModalEdit] = useState({
    show: false,
    index: 0,
    id: 0,
  });

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
    >
      <Row style={{ marginBottom: 10, marginTop: 10 }}>
        <Col>
          <h1>Identitas Kapal</h1>
        </Col>
      </Row>

      <Row justifyContent="end">
        <Col size={2}>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setModalAdd(true)}
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
                <th scope="col">Nama Kapal</th>
                <th scope="col">Nama Perusahaan</th>
                <th scope="col">Tahun</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {kapalState.kapal.list.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{`${index + 1}.`}</th>
                  <td>{item.name}</td>
                  <td>{item.class}</td>
                  <td>{item.tahun}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={() =>
                        setModalEdit({ show: true, index, id: item.id })
                      }
                    >
                      edit
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      style={{ marginLeft: 15 }}
                      onClick={() => dispatch(deleteKapal(item.id))}
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

      <Form
        isShow={modalAdd}
        onHide={() => setModalAdd(false)}
        title="Add Kapal"
      />
      <Form
        isShow={modalEdit.show}
        onHide={() => setModalEdit({ ...modalEdit, show: false })}
        data={kapalState.kapal.list[modalEdit.index]}
        id={modalEdit.id}
        title="Edit Kapal"
      />
    </Container>
  );
};

export default Component;
