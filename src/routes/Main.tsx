import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import { Navbar } from "../components";

// screens
import StandarTarif from "../pages/StandarTarif";
import IdentitasKapal from "../pages/IdentitasKapal";

const App = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "center",
            paddingTop: 50
          }}
        >
          <Navbar />
        </div>
        <div style={{ flex: 4 }}>
          <Route path={match.path} exact>
            <StandarTarif />
          </Route>
          <Route path={`${match.path}/identitas-kapal`}>
            <IdentitasKapal />
          </Route>
        </div>
      </div>
    </Switch>
  );
};

export default App;
