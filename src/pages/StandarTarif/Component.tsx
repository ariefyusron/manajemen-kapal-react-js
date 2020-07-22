import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Reducers } from "../../redux/types";
import { deleteStandarTarif, getStandarTarif } from "../../redux/actions";
import { documentTitle, maskedMoney } from "../../utils";
import { Col, Container, Row } from "../../components";
import { Form } from "./components";

const Component = () => {
  documentTitle("Standar Tarifs");
  const dispatch = useDispatch();

  const [modalAdd, setModalAdd] = useState(false);
  const [modalEdit, setModalEdit] = useState({
    visible: false,
    index: 0,
    id: 0
  });
  const standarTarifState = useSelector(
    (state: Reducers) => state.standarTarif
  );

  useEffect(() => {
    dispatch(getStandarTarif());
  }, [dispatch]);

  return (
    <Container>
      <Row style={{ marginBottom: 10, marginTop: 10 }}>
        <Col>
          <h1>Standar Tarif</h1>
        </Col>
      </Row>

      {localStorage.getItem("is_admin") === "true" && (
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
      )}

      <Row>
        <Col>
          {!standarTarifState.isLoading ? (
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Item Pekerjaan</th>
                  <th scope="col">Jam Orang</th>
                  <th scope="col">DPS</th>
                  <th scope="col">SUB KONT</th>
                  <th scope="col">Peralatan</th>
                  <th scope="col">Material</th>
                  <th scope="col">Material Bantu</th>
                  <th scope="col">Overhead</th>
                  <th scope="col">Total HPP</th>
                  <th scope="col">Standar Tarif Reparasi Kapal</th>
                  {localStorage.getItem("is_admin") === "true" && (
                    <th scope="col">Aksi</th>
                  )}
                </tr>
              </thead>
              <tbody>
                {standarTarifState.list.map((item, index) => (
                  <tr key={index} style={{ textAlign: "center" }}>
                    <th scope="row">{`${index + 1}.`}</th>
                    <td>{item.item_pekerjaan}</td>
                    <td>{item.jam_orang}</td>
                    <td>{maskedMoney(item.dps)}</td>
                    <td>{maskedMoney(item.sub_kont)}</td>
                    <td>{maskedMoney(item.peralatan)}</td>
                    <td>{maskedMoney(item.material)}</td>
                    <td>{maskedMoney(item.material_bantu)}</td>
                    <td>{maskedMoney(item.overhead)}</td>
                    <td>{maskedMoney(item.total_hpp)}</td>
                    <td>{maskedMoney(item.standar_tarif)}</td>
                    {localStorage.getItem("is_admin") === "true" && (
                      <td>
                        <button
                          type="button"
                          className="btn btn-success"
                          onClick={() =>
                            setModalEdit({ visible: true, index, id: item.id })
                          }
                        >
                          edit
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger"
                          style={{ marginLeft: 15 }}
                          onClick={() => dispatch(deleteStandarTarif(item.id))}
                        >
                          delete
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>loading.div....</p>
          )}
        </Col>
      </Row>

      <Form
        isShow={modalAdd}
        title="Add Standar Tarif"
        onHide={() => setModalAdd(false)}
      />

      <Form
        isShow={modalEdit.visible}
        title="Edit Standar Tarif"
        onHide={() => setModalEdit({ ...modalEdit, visible: false })}
        data={standarTarifState.list[modalEdit.index]}
        id={modalEdit.id}
      />
    </Container>
  );
};

export default Component;
