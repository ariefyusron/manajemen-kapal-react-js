import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import Modal from "react-bootstrap/Modal";

import { Reducers } from "../../redux/types";
import {
  deleteKapal,
  getAllKapal,
  getTypeKapal,
  getTypeSurvey,
  postKapal
} from "../../redux/actions";
import { documentTitle } from "../../utils";
import { Col, Container, Row } from "../../components";

const Component = () => {
  documentTitle("Identitas Kapal");
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const kapalState = useSelector((state: Reducers) => state.kapal);
  const [modalAdd, setModalAdd] = useState(false);

  useEffect(() => {
    dispatch(getAllKapal());
    dispatch(getTypeSurvey());
    dispatch(getTypeKapal());
  }, [dispatch]);

  const _addKapal = useCallback(
    form => {
      dispatch(postKapal(form, () => setModalAdd(false)));
    },
    [dispatch]
  );

  return (
    <Container>
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
          {!kapalState.kapal.isLoading ? (
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Nama Kapal</th>
                  <th scope="col">Nama Perusahaan</th>
                  <th scope="col">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {kapalState.kapal.list.map((item, index) => (
                  <tr key={index}>
                    <th scope="row">{`${index + 1}.`}</th>
                    <td>{item.name}</td>
                    <td>{item.class}</td>
                    <td>
                      <button type="button" className="btn btn-success">
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
          ) : (
            <p>loading.div....</p>
          )}
        </Col>
      </Row>

      <Modal show={modalAdd} onHide={() => setModalAdd(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Kapal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(_addKapal)}>
            <div className="form-group">
              <label>Nama Kapal</label>
              <input
                className="form-control"
                type="text"
                name="name"
                placeholder="Nama Kapal"
                ref={register}
              />
            </div>

            <div className="form-group">
              <label>Tipe Kapal</label>
              {!kapalState.typeKapal.isLoading ? (
                <select
                  className="form-control"
                  name="kapal_type"
                  ref={register}
                >
                  <option value="">--pilih--</option>
                  {kapalState.typeKapal.list.map((item, index) => (
                    <option key={index} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              ) : (
                <p>loading...</p>
              )}
            </div>

            <div className="form-group">
              <label>Length OA</label>
              <input
                className="form-control"
                type="text"
                name="length_oa"
                placeholder="length_oa (Satuan Meter)"
                ref={register}
              />
            </div>

            <div className="form-group">
              <label>Length PP</label>
              <input
                className="form-control"
                type="text"
                name="length_pp"
                placeholder="length_pp (Satuan Meter)"
                ref={register}
              />
            </div>

            <div className="form-group">
              <label>Breadth</label>
              <input
                className="form-control"
                type="text"
                name="breadth"
                placeholder="breadth (Satuan Meter)"
                ref={register}
              />
            </div>

            <div className="form-group">
              <label>Depth</label>
              <input
                className="form-control"
                type="text"
                name="depth"
                placeholder="depth (Satuan Meter)"
                ref={register}
              />
            </div>

            <div className="form-group">
              <label>Draft</label>
              <input
                className="form-control"
                type="text"
                name="draft"
                placeholder="draft (Satuan Meter)"
                ref={register}
              />
            </div>

            <div className="form-group">
              <label>Gross Tonnage</label>
              <input
                className="form-control"
                type="text"
                name="gross_tonnage"
                placeholder="gross_tonnage (Satuan Meter)"
                ref={register}
              />
            </div>

            <div className="form-group">
              <label>Nama Perusahaan</label>
              <input
                className="form-control"
                type="text"
                name="class"
                placeholder="Nama Perusahaan"
                ref={register}
              />
            </div>

            <div className="form-group">
              <label>Tipe Survey</label>
              {!kapalState.typeSurvey.isLoading ? (
                <select
                  className="form-control"
                  name="survey_type"
                  ref={register}
                >
                  <option value="">--pilih--</option>
                  {kapalState.typeSurvey.list.map((item, index) => (
                    <option key={index} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              ) : (
                <p>loading...</p>
              )}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setModalAdd(false)}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSubmit(_addKapal)}
          >
            Submit
          </button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Component;
