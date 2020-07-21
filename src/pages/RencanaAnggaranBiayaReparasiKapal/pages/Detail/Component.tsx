import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Reducers } from "../../../../redux/types";
import {
  deleteKontruksiBadanKapal,
  deletePelayananUmum,
  deletePengedokan,
  getAllKontruksiBadanKapal,
  getAllPelayananUmum,
  getAllPengedokan
} from "../../../../redux/actions";
import { documentTitle } from "../../../../utils";
import { Col, Container, Row } from "../../../../components";

const Component = () => {
  documentTitle("RAB Reparasai Kapal");
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  const [pekerjaan, setPekerjaan] = useState("");
  const rabReparasiState = useSelector((state: Reducers) => state.rabReparasi);

  useEffect(() => {
    dispatch(getAllPengedokan(id!));
    dispatch(getAllPelayananUmum(id!));
    dispatch(getAllKontruksiBadanKapal(id!));
  }, [dispatch, id]);

  return (
    <Container>
      <Row
        style={{ marginBottom: 20, marginTop: 10 }}
        className="align-items-center"
      >
        <Col size={11}>
          <h1>Rencana Anggaran Biaya Reparasi Kapal</h1>
        </Col>
        <Col size={1}>
          <button
            type="button"
            className="btn btn-link my-2 my-sm-0"
            onClick={() => history.goBack()}
            style={{ textDecoration: "underline" }}
          >
            Back
          </button>
        </Col>
      </Row>

      <Row justifyContent="end" style={{ marginBottom: 20 }}>
        <Col size={3}>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Pekerjaan</label>
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              onChange={e => setPekerjaan(e.target.value)}
            >
              <option value="">--All--</option>
              <option value="1">Pengedokan</option>
              <option value="2">Pelayanan Umum</option>
              <option value="3">Kontruksi Badan Kapal</option>
            </select>
          </div>
        </Col>
      </Row>

      {(pekerjaan === "" || pekerjaan === "1") && (
        <Row style={{ marginBottom: 30 }}>
          <Col>
            <Row style={{ marginBottom: 10 }}>
              <Col size={10}>
                <h3>Pengedokan</h3>
              </Col>
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
                {!rabReparasiState.pengedokan.isLoading ? (
                  <table className="table" style={{ textAlign: "center" }}>
                    <thead className="thead-light">
                      <tr>
                        <th scope="col">No</th>
                        <th scope="col">Nama Pekerjaan</th>
                        <th scope="col">Satuan</th>
                        <th scope="col">DPS (Jasa Tenaga)</th>
                        <th scope="col">SUB KONT (Jasa Tenaga)</th>
                        <th scope="col">Jasa Peralatan</th>
                        <th scope="col">Material</th>
                        <th scope="col">Material Bantu</th>
                        <th scope="col">Total</th>
                        <th scope="col">Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rabReparasiState.pengedokan.list.map((item, index) => (
                        <tr key={index}>
                          <th scope="row">{`${index + 1}.`}</th>
                          <td>{item.nama_pekerjaan}</td>
                          <td>{item.satuan}</td>
                          <td>{item.dps}</td>
                          <td>{item.sub_kont}</td>
                          <td>{item.jasa_peralatan}</td>
                          <td>{item.material}</td>
                          <td>{item.material_bantu}</td>
                          <td>{item.total}</td>
                          <td>
                            <button type="button" className="btn btn-success">
                              edit
                            </button>
                            <button
                              type="button"
                              className="btn btn-danger"
                              style={{ marginLeft: 15 }}
                              onClick={() =>
                                dispatch(deletePengedokan(id!, item.id))
                              }
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
          </Col>
        </Row>
      )}

      {(pekerjaan === "" || pekerjaan === "2") && (
        <Row style={{ marginBottom: 30 }}>
          <Col>
            <Row style={{ marginBottom: 10 }}>
              <Col size={10}>
                <h3>Pelayanan Umum</h3>
              </Col>
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
                {!rabReparasiState.pelayananUmum.isLoading ? (
                  <table className="table" style={{ textAlign: "center" }}>
                    <thead className="thead-light">
                      <tr>
                        <th scope="col">No</th>
                        <th scope="col">Nama Pekerjaan</th>
                        <th scope="col">Satuan</th>
                        <th scope="col">DPS (Jasa Tenaga)</th>
                        <th scope="col">SUB KONT (Jasa Tenaga)</th>
                        <th scope="col">Jasa Peralatan</th>
                        <th scope="col">Material</th>
                        <th scope="col">Material Bantu</th>
                        <th scope="col">Total</th>
                        <th scope="col">Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rabReparasiState.pelayananUmum.list.map(
                        (item, index) => (
                          <tr key={index}>
                            <th scope="row">{`${index + 1}.`}</th>
                            <td>{item.nama_pekerjaan}</td>
                            <td>{item.satuan}</td>
                            <td>{item.dps}</td>
                            <td>{item.sub_kont}</td>
                            <td>{item.jasa_peralatan}</td>
                            <td>{item.material}</td>
                            <td>{item.material_bantu}</td>
                            <td>{item.total}</td>
                            <td>
                              <button type="button" className="btn btn-success">
                                edit
                              </button>
                              <button
                                type="button"
                                className="btn btn-danger"
                                style={{ marginLeft: 15 }}
                                onClick={() =>
                                  dispatch(deletePelayananUmum(id!, item.id))
                                }
                              >
                                delete
                              </button>
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                ) : (
                  <p>loading.div....</p>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      )}

      {(pekerjaan === "" || pekerjaan === "3") && (
        <Row>
          <Col>
            <Row style={{ marginBottom: 10 }}>
              <Col size={10}>
                <h3>Kontruksi Badan Kapal</h3>
              </Col>
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
                {!rabReparasiState.kontruksiBadanKapal.isLoading ? (
                  <table className="table" style={{ textAlign: "center" }}>
                    <thead className="thead-light">
                      <tr>
                        <th scope="col">No</th>
                        <th scope="col">Nama Pekerjaan</th>
                        <th scope="col">Satuan</th>
                        <th scope="col">DPS (Jasa Tenaga)</th>
                        <th scope="col">SUB KONT (Jasa Tenaga)</th>
                        <th scope="col">Jasa Peralatan</th>
                        <th scope="col">Material</th>
                        <th scope="col">Material Bantu</th>
                        <th scope="col">Total</th>
                        <th scope="col">Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rabReparasiState.kontruksiBadanKapal.list.map(
                        (item, index) => (
                          <tr key={index}>
                            <th scope="row">{`${index + 1}.`}</th>
                            <td>{item.nama_pekerjaan}</td>
                            <td>{item.satuan}</td>
                            <td>{item.dps}</td>
                            <td>{item.sub_kont}</td>
                            <td>{item.jasa_peralatan}</td>
                            <td>{item.material}</td>
                            <td>{item.material_bantu}</td>
                            <td>{item.total}</td>
                            <td>
                              <button type="button" className="btn btn-success">
                                edit
                              </button>
                              <button
                                type="button"
                                className="btn btn-danger"
                                style={{ marginLeft: 15 }}
                                onClick={() =>
                                  dispatch(
                                    deleteKontruksiBadanKapal(id!, item.id)
                                  )
                                }
                              >
                                delete
                              </button>
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                ) : (
                  <p>loading.div....</p>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Component;
