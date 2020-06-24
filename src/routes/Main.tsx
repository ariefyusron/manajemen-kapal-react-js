import React from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";

import "./styles.scss";
import { Col, Row, Sidebar, Topbar } from "../components";

// screens
import StandarTarif from "../pages/StandarTarif";
import IdentitasKapal from "../pages/IdentitasKapal";
import Admin from "./Admin";

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
              <Route path={`${match.path}/admin`}>
                {localStorage.getItem("is_admin") === "true" ? (
                  <Admin />
                ) : (
                  <Redirect to={match.path} />
                )}
              </Route>
            </Col>
          </Row>
        </div>
      </>
    </Switch>
  );
};

export default App;
