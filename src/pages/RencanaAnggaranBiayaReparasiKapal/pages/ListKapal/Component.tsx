import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Reducers } from "../../../../redux/types";
import { getAllKapal } from "../../../../redux/actions";
import { Col, Container, Row } from "../../../../components";

const Component = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const kapalState = useSelector((state: Reducers) => state.kapal);

  useEffect(() => {
    dispatch(getAllKapal());
  }, [dispatch]);

  return (
    <Container isLoading={kapalState.kapal.isLoading}>
      <Row style={{ marginBottom: 40, marginTop: 10 }}>
        <Col>
          <h1>Rencana Anggaran Biaya Reparasi Kapal</h1>
        </Col>
      </Row>

      <Row>
        <Col>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th scope="col">No</th>
                <th scope="col">Nama Perusahaan</th>
                <th scope="col">Nama Kapal</th>
                <th scope="col">Tahun</th>
                <th scope="col">Type Kapal</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {kapalState.kapal.list.map((item, index) => (
                <tr
                  key={index}
                  onClick={() =>
                    history.push(`${history.location.pathname}/${item.id}`)
                  }
                >
                  <th scope="row">{`${index + 1}.`}</th>
                  <td>{item.class}</td>
                  <td>{item.name}</td>
                  <td>{item.tahun}</td>
                  <td>{item.KapalType && item.KapalType.name}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={e => {
                        e.stopPropagation();
                        history.push(
                          `${history.location.pathname}/history/${item.id}`
                        );
                      }}
                    >
                      History
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  );
};

export default Component;
