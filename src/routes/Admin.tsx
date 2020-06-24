import React from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";

// screens
import User from "../pages/User";

const App = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.path}`} exact>
        <Redirect to={`${match.path}/user`} />
      </Route>
      <Route path={`${match.path}/user`}>
        <User />
      </Route>
    </Switch>
  );
};

export default App;
