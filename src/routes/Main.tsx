import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import "./styles.scss";
import { Col, Row, Sidebar, Topbar } from "../components";

// screens
import StandarTarif from "../pages/StandarTarif";
import IdentitasKapal from "../pages/IdentitasKapal";

const App = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <>
        <Topbar />
        <div className="container-fluid">
          <Row>
            <Col size={2} className="sidebar">
              <Sidebar />
            </Col>
            <Col size={10}>
              <Route path={match.path} exact>
                <StandarTarif />
              </Route>
              <Route path={`${match.path}/identitas-kapal`}>
                <IdentitasKapal />
              </Route>
            </Col>
          </Row>
        </div>
      </>
    </Switch>
  );
};

export default App;
