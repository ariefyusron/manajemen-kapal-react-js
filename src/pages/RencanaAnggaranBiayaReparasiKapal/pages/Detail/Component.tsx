import React, { useCallback, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { Reducers } from "../../../../redux/types";
import {
  deleteKontruksiBadanKapal,
  deletePelayananUmum,
  deletePengedokan,
  getAllKontruksiBadanKapal,
  getAllPelayananUmum,
  getAllPengedokan,
  getKapal
} from "../../../../redux/actions";
import { documentTitle, maskedMoney } from "../../../../utils";
import { Col, Container, Row } from "../../../../components";
import { Form } from "./components";

interface ModalEdit {
  visible: boolean;
  index: number;
  id: number | string;
  type: "pengedokan" | "pelayananUmum" | "kontruksiBadanKapal";
}

interface ModalAdd {
  visible: boolean;
  type: "pengedokan" | "pelayananUmum" | "kontruksiBadanKapal";
}

const initModalEdit: ModalEdit = {
  visible: false,
  index: 0,
  id: 0,
  type: "pengedokan"
};

const initModalAdd: ModalAdd = {
  visible: false,
  type: "pengedokan"
};

const Component = () => {
  documentTitle("RAB Reparasai Kapal");
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  const [pekerjaan, setPekerjaan] = useState("");
  const [modalEdit, setModalEdit] = useState(initModalEdit);
  const [modalAdd, setModalAdd] = useState(initModalAdd);
  const { rabReparasiState, kapalState } = useSelector(
    (state: Reducers) => ({
      rabReparasiState: state.rabReparasi,
      kapalState: state.kapal
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(getAllPengedokan(id!));
    dispatch(getAllPelayananUmum(id!));
    dispatch(getAllKontruksiBadanKapal(id!));
    dispatch(getKapal(id!));
  }, [dispatch, id]);

  const _typeTitle = useCallback(
    (type: "pengedokan" | "pelayananUmum" | "kontruksiBadanKapal") => {
      if (type === "pengedokan") {
        return "Pengedokan";
      }
      if (type === "pelayananUmum") {
        return "Pelayanan Umum";
      }
      return "Kontruksi Badan Kapal";
    },
    []
  );

  const _sum = useCallback(
    (item: any[], key: string) =>
      item.reduce((a, b) => parseInt(a, 10) + (parseInt(b[key], 10) || 0), 0),
    []
  );

  return (
    <Container
      isLoading={
        rabReparasiState.pengedokan.isLoading ||
        rabReparasiState.pelayananUmum.isLoading ||
        rabReparasiState.kontruksiBadanKapal.isLoading ||
        kapalState.detailKapal.isLoading
      }
    >
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

      <Row style={{ marginBottom: 40 }} className="align-items-end">
        <Col size={9}>
          <table style={{ width: "50%" }}>
            <tr>
              <td>CLIENT</td>
              <td>:</td>
              <td>{kapalState.detailKapal.data.class}</td>
            </tr>
            <tr>
              <td>SHIP</td>
              <td>:</td>
              <td>{kapalState.detailKapal.data.name}</td>
            </tr>
            <tr>
              <td colSpan={3} style={{ textAlign: "center" }}>
                SHIP&apos;S PARTICULARS
              </td>
              <td>UNIT</td>
            </tr>
            <tr>
              <td>LENGTH OA</td>
              <td>:</td>
              <td>{kapalState.detailKapal.data.length_oa}</td>
              <td>Meter</td>
            </tr>
            <tr>
              <td>LENGTH PP</td>
              <td>:</td>
              <td>{kapalState.detailKapal.data.length_pp}</td>
              <td>Meter</td>
            </tr>
            <tr>
              <td>BREADTH</td>
              <td>:</td>
              <td>{kapalState.detailKapal.data.breadth}</td>
              <td>Meter</td>
            </tr>
            <tr>
              <td>DEPTH</td>
              <td>:</td>
              <td>{kapalState.detailKapal.data.depth}</td>
              <td>Meter</td>
            </tr>
            <tr>
              <td>DRAFT</td>
              <td>:</td>
              <td>{kapalState.detailKapal.data.draft}</td>
              <td>Meter</td>
            </tr>
            <tr>
              <td>GROSS TONNAGE</td>
              <td>:</td>
              <td>{kapalState.detailKapal.data.gross_tonnage}</td>
              <td>Ton</td>
            </tr>
            <tr>
              <td colSpan={3} style={{ textAlign: "center" }}>
                CLASSIFICATION AND SURVEY
              </td>
            </tr>
            <tr>
              <td>CLASSIFICATION</td>
              <td>:</td>
              <td>
                {kapalState.detailKapal.data.KapalType &&
                  kapalState.detailKapal.data.KapalType.name}
              </td>
            </tr>
            <tr>
              <td>KIND OF SURVEY</td>
              <td>:</td>
              <td>
                {kapalState.detailKapal.data.SurveyType &&
                  kapalState.detailKapal.data.SurveyType.name}
              </td>
            </tr>
          </table>
        </Col>
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
                  onClick={() =>
                    setModalAdd({ visible: true, type: "pengedokan" })
                  }
                >
                  Add
                </button>
              </Col>
            </Row>
            <Row>
              <Col>
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
                      <th scope="col">Overhead</th>
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
                        <td>{maskedMoney(item.dps)}</td>
                        <td>{maskedMoney(item.sub_kont)}</td>
                        <td>{maskedMoney(item.jasa_peralatan)}</td>
                        <td>{maskedMoney(item.material)}</td>
                        <td>{maskedMoney(item.material_bantu)}</td>
                        <td>{maskedMoney(item.overhead)}</td>
                        <td>{maskedMoney(item.total)}</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-success"
                            onClick={() =>
                              setModalEdit({
                                id: item.id,
                                visible: true,
                                type: "pengedokan",
                                index
                              })
                            }
                          >
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
                  onClick={() =>
                    setModalAdd({ visible: true, type: "pelayananUmum" })
                  }
                >
                  Add
                </button>
              </Col>
            </Row>
            <Row>
              <Col>
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
                      <th scope="col">Overhead</th>
                      <th scope="col">Total</th>
                      <th scope="col">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rabReparasiState.pelayananUmum.list.map((item, index) => (
                      <tr key={index}>
                        <th scope="row">{`${index + 1}.`}</th>
                        <td>{item.nama_pekerjaan}</td>
                        <td>{item.satuan}</td>
                        <td>{maskedMoney(item.dps)}</td>
                        <td>{maskedMoney(item.sub_kont)}</td>
                        <td>{maskedMoney(item.jasa_peralatan)}</td>
                        <td>{maskedMoney(item.material)}</td>
                        <td>{maskedMoney(item.material_bantu)}</td>
                        <td>{maskedMoney(item.overhead)}</td>
                        <td>{maskedMoney(item.total)}</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-success"
                            onClick={() =>
                              setModalEdit({
                                id: item.id,
                                visible: true,
                                type: "pelayananUmum",
                                index
                              })
                            }
                          >
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
                    ))}
                  </tbody>
                </table>
              </Col>
            </Row>
          </Col>
        </Row>
      )}

      {(pekerjaan === "" || pekerjaan === "3") && (
        <Row style={{ marginBottom: 30 }}>
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
                  onClick={() =>
                    setModalAdd({ visible: true, type: "kontruksiBadanKapal" })
                  }
                >
                  Add
                </button>
              </Col>
            </Row>
            <Row>
              <Col>
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
                      <th scope="col">Overhead</th>
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
                          <td>{maskedMoney(item.dps)}</td>
                          <td>{maskedMoney(item.sub_kont)}</td>
                          <td>{maskedMoney(item.jasa_peralatan)}</td>
                          <td>{maskedMoney(item.material)}</td>
                          <td>{maskedMoney(item.material_bantu)}</td>
                          <td>{maskedMoney(item.overhead)}</td>
                          <td>{maskedMoney(item.total)}</td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-success"
                              onClick={() =>
                                setModalEdit({
                                  id: item.id,
                                  visible: true,
                                  type: "kontruksiBadanKapal",
                                  index
                                })
                              }
                            >
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
              </Col>
            </Row>
          </Col>
        </Row>
      )}

      <Row style={{ marginBottom: 60 }}>
        <Col>
          <Row style={{ marginBottom: 10 }}>
            <Col>
              <h3>Total</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">DPS (Jasa Tenaga)</th>
                    <th scope="col">SUB KONT (Jasa Tenaga</th>
                    <th scope="col">Jasa Peralatan</th>
                    <th scope="col">Material</th>
                    <th scope="col">Material Bantu</th>
                    <th scope="col">Overhead</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ textAlign: "center" }}>
                    <td>
                      {maskedMoney(
                        _sum(rabReparasiState.pengedokan.list, "dps") +
                          _sum(rabReparasiState.pelayananUmum.list, "dps") +
                          _sum(rabReparasiState.kontruksiBadanKapal.list, "dps")
                      )}
                    </td>
                    <td>
                      {maskedMoney(
                        _sum(rabReparasiState.pengedokan.list, "sub_kont") +
                          _sum(
                            rabReparasiState.pelayananUmum.list,
                            "sub_kont"
                          ) +
                          _sum(
                            rabReparasiState.kontruksiBadanKapal.list,
                            "sub_kont"
                          )
                      )}
                    </td>
                    <td>
                      {maskedMoney(
                        _sum(
                          rabReparasiState.pengedokan.list,
                          "jasa_peralatan"
                        ) +
                          _sum(
                            rabReparasiState.pelayananUmum.list,
                            "jasa_peralatan"
                          ) +
                          _sum(
                            rabReparasiState.kontruksiBadanKapal.list,
                            "jasa_peralatan"
                          )
                      )}
                    </td>
                    <td>
                      {maskedMoney(
                        _sum(rabReparasiState.pengedokan.list, "material") +
                          _sum(
                            rabReparasiState.pelayananUmum.list,
                            "material"
                          ) +
                          _sum(
                            rabReparasiState.kontruksiBadanKapal.list,
                            "material"
                          )
                      )}
                    </td>
                    <td>
                      {maskedMoney(
                        _sum(
                          rabReparasiState.pengedokan.list,
                          "material_bantu"
                        ) +
                          _sum(
                            rabReparasiState.pelayananUmum.list,
                            "material_bantu"
                          ) +
                          _sum(
                            rabReparasiState.kontruksiBadanKapal.list,
                            "material_bantu"
                          )
                      )}
                    </td>
                    <td>
                      {maskedMoney(
                        _sum(rabReparasiState.pengedokan.list, "overhead") +
                          _sum(
                            rabReparasiState.pelayananUmum.list,
                            "overhead"
                          ) +
                          _sum(
                            rabReparasiState.kontruksiBadanKapal.list,
                            "overhead"
                          )
                      )}
                    </td>
                    <td>
                      {maskedMoney(
                        _sum(rabReparasiState.pengedokan.list, "total") +
                          _sum(rabReparasiState.pelayananUmum.list, "total") +
                          _sum(
                            rabReparasiState.kontruksiBadanKapal.list,
                            "total"
                          )
                      )}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Total biaya tenaga kerja</th>
                    <td colSpan={6} style={{ textAlign: "center" }}>
                      {maskedMoney(50000)}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Total bahan baku</th>
                    <td colSpan={6} style={{ textAlign: "center" }}>
                      {maskedMoney(50000)}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Total biaya tidak langsung</th>
                    <td colSpan={6} style={{ textAlign: "center" }}>
                      {maskedMoney(50000)}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Harga PPN 10%</th>
                    <td colSpan={6} style={{ textAlign: "center" }}>
                      {maskedMoney(50000)}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Total estimasi biaya</th>
                    <td colSpan={6} style={{ textAlign: "center" }}>
                      {maskedMoney(50000)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </Col>
          </Row>
        </Col>
      </Row>

      <Form
        title={`Edit ${_typeTitle(modalEdit.type)}`}
        isShow={modalEdit.visible}
        onHide={() => setModalEdit({ ...modalEdit, visible: false })}
        data={rabReparasiState[modalEdit.type].list[modalEdit.index]}
        idKapal={id!}
        type={modalEdit.type}
        id={modalEdit.id}
      />

      <Form
        title={`Add ${_typeTitle(modalAdd.type)}`}
        isShow={modalAdd.visible}
        onHide={() => setModalAdd({ ...modalAdd, visible: false })}
        idKapal={id!}
        type={modalAdd.type}
      />
    </Container>
  );
};

export default Component;
