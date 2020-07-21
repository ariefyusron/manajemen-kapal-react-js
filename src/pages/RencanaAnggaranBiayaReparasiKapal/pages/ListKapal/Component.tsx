import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Reducers } from "../../../../redux/types";
import { getAllKapal } from "../../../../redux/actions";
import { documentTitle } from "../../../../utils";
import { Col, Container, Row } from "../../../../components";

const Component = () => {
  documentTitle("RAB Reparasai Kapal");
  const dispatch = useDispatch();
  const history = useHistory();

  const kapalState = useSelector((state: Reducers) => state.kapal);

  useEffect(() => {
    dispatch(getAllKapal());
  }, [dispatch]);

  return (
    <Container>
      <Row style={{ marginBottom: 40, marginTop: 10 }}>
        <Col>
          <h1>Rencana Anggaran Biaya Reparasi Kapal</h1>
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
                    <td>{item.name}</td>
                    <td>{item.class}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>loading.div....</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Component;
