import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

// screens
import ListKapal from "./pages/ListKapal";
import Detail from "./pages/Detail";

const App = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={match.path} exact>
        <ListKapal />
      </Route>
      <Route path={`${match.path}/:id`} exact>
        <Detail />
      </Route>
    </Switch>
  );
};

export default App;
