import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import { documentTitle } from "../../utils";

// screens
import ListKapal from "./pages/ListKapal";
import Detail from "./pages/Detail";
import ListHistoy from "./pages/ListHistory";

const App = () => {
  documentTitle("RAB Reparasai Kapal");
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={match.path} exact>
        <ListKapal />
      </Route>
      <Route path={`${match.path}/:id`} exact>
        <Detail />
      </Route>
      <Route path={`${match.path}/history/:id`} exact>
        <ListHistoy />
      </Route>
    </Switch>
  );
};

export default App;
