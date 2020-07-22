import React, { useCallback, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { Reducers } from "../../../../redux/types";
import {
  deletePekerjaanRab,
  deleteRab,
  getAllPekerjaanRab,
  getAllRab,
  getKapal
} from "../../../../redux/actions";
import { maskedMoney } from "../../../../utils";
import { Col, Container, Row } from "../../../../components";
import { Form, FormPekerjaan } from "./components";

const Component = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  const [modalEditPekerjaan, setModalEditPekerjaan] = useState({
    visible: false,
    index: 0,
    id: 0
  });
  const [modalAddPekerjaan, setModalAddPekerjaan] = useState(false);
  const [modalEdit, setModalEdit] = useState({
    visible: false,
    index: 0,
    id: 0
  });
  const [modalAdd, setModalAdd] = useState(false);
  const { rabReparasiState, kapalState } = useSelector(
    (state: Reducers) => ({
      rabReparasiState: state.rabReparasi,
      kapalState: state.kapal
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(getAllPekerjaanRab(id!));
    dispatch(getAllRab(id!));
    dispatch(getKapal(id!));
  }, [dispatch, id]);

  const _sum = useCallback(
    (item: any[], key: string) =>
      item.reduce((a, b) => parseInt(a, 10) + (parseInt(b[key], 10) || 0), 0),
    []
  );

  return (
    <Container
      isLoading={rabReparasiState.isLoading || kapalState.detailKapal.isLoading}
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
        <Col size={10}>
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
        {rabReparasiState.listPekerjaan.length > 0 && (
          <Col size={2}>
            <button
              type="button"
              className="btn btn-primary"
              style={{ width: "100%", marginBottom: 5 }}
              onClick={() => setModalAdd(true)}
            >
              Add sub pekerjaan
            </button>
          </Col>
        )}
      </Row>

      {rabReparasiState.listPekerjaan.map((e, i) => (
        <Row style={{ marginBottom: 30 }} key={i}>
          <Col>
            <Row style={{ marginBottom: 10 }}>
              <Col size={10}>
                <h3>{e.name}</h3>
              </Col>
              <Col size={2}>
                <Row justifyContent="end">
                  <Col size={3}>
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={() =>
                        setModalEditPekerjaan({
                          visible: true,
                          index: i,
                          id: e.id
                        })
                      }
                    >
                      edit
                    </button>
                  </Col>
                  <Col size={6}>
                    <button
                      type="button"
                      className="btn btn-danger"
                      style={{ marginLeft: 15 }}
                      onClick={() => dispatch(deletePekerjaanRab(id!, e.id))}
                    >
                      delete
                    </button>
                  </Col>
                </Row>
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
                    {rabReparasiState.list.map(
                      (item, index) =>
                        item.id_pekerjaan.toString() === e.id.toString() && (
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
                                  dispatch(deleteRab(id!, item.id))
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
      ))}

      <Row justifyContent="center" style={{ marginBottom: 20, marginTop: 50 }}>
        <Col size={2}>
          <button
            type="button"
            className="btn btn-primary"
            style={{ width: "100%", marginBottom: 5 }}
            onClick={() => setModalAddPekerjaan(true)}
          >
            Add pekerjaan
          </button>
        </Col>
      </Row>

      {rabReparasiState.listPekerjaan.length > 0 && (
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
                      <td>{maskedMoney(_sum(rabReparasiState.list, "dps"))}</td>
                      <td>
                        {maskedMoney(_sum(rabReparasiState.list, "sub_kont"))}
                      </td>
                      <td>
                        {maskedMoney(
                          _sum(rabReparasiState.list, "jasa_peralatan")
                        )}
                      </td>
                      <td>
                        {maskedMoney(_sum(rabReparasiState.list, "material"))}
                      </td>
                      <td>
                        {maskedMoney(
                          _sum(rabReparasiState.list, "material_bantu")
                        )}
                      </td>
                      <td>
                        {maskedMoney(_sum(rabReparasiState.list, "overhead"))}
                      </td>
                      <td>
                        {maskedMoney(_sum(rabReparasiState.list, "total"))}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Total biaya tenaga kerja</th>
                      <td colSpan={6} style={{ textAlign: "center" }}>
                        {maskedMoney(
                          _sum(rabReparasiState.list, "dps") +
                            _sum(rabReparasiState.list, "sub_kont")
                        )}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Total biaya bahan baku</th>
                      <td colSpan={6} style={{ textAlign: "center" }}>
                        {maskedMoney(_sum(rabReparasiState.list, "material"))}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Total biaya overhead</th>
                      <td colSpan={6} style={{ textAlign: "center" }}>
                        {maskedMoney(_sum(rabReparasiState.list, "overhead"))}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Total biaya tidak langsung</th>
                      <td colSpan={6} style={{ textAlign: "center" }}>
                        {maskedMoney(
                          (_sum(rabReparasiState.list, "dps") +
                            _sum(rabReparasiState.list, "sub_kont") +
                            _sum(rabReparasiState.list, "material") +
                            _sum(rabReparasiState.list, "overhead")) *
                            (2.5 / 100)
                        )}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Total estimasi biaya</th>
                      <td colSpan={6} style={{ textAlign: "center" }}>
                        {maskedMoney(
                          _sum(rabReparasiState.list, "dps") +
                            _sum(rabReparasiState.list, "sub_kont") +
                            _sum(rabReparasiState.list, "material") +
                            _sum(rabReparasiState.list, "overhead") +
                            (_sum(rabReparasiState.list, "dps") +
                              _sum(rabReparasiState.list, "sub_kont") +
                              _sum(rabReparasiState.list, "material") +
                              _sum(rabReparasiState.list, "overhead")) *
                              (2.5 / 100)
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Col>
            </Row>
          </Col>
        </Row>
      )}

      <Form
        title="Edit Rab"
        isShow={modalEdit.visible}
        onHide={() => setModalEdit({ ...modalEdit, visible: false })}
        data={rabReparasiState.list[modalEdit.index]}
        idKapal={id!}
        id={modalEdit.id}
      />

      <Form
        title="Add Rab"
        isShow={modalAdd}
        onHide={() => setModalAdd(false)}
        idKapal={id!}
      />

      <FormPekerjaan
        title="Add Pekerjaan"
        isShow={modalAddPekerjaan}
        onHide={() => setModalAddPekerjaan(false)}
        idKapal={id!}
      />

      <FormPekerjaan
        title="Edit Pekerjaan"
        isShow={modalEditPekerjaan.visible}
        onHide={() =>
          setModalEditPekerjaan({ ...modalEditPekerjaan, visible: false })
        }
        idKapal={id!}
        data={rabReparasiState.listPekerjaan[modalEditPekerjaan.index]}
        id={modalEditPekerjaan.id}
      />
    </Container>
  );
};

export default Component;
