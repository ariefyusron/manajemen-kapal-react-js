import React from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";

// screens
import User from "../pages/User";
import TypeKapal from "../pages/TypeKapal";
import TypeSurvey from "../pages/TypeSurvey";

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
      <Route path={`${match.path}/kapal`}>
        <TypeKapal />
      </Route>
      <Route path={`${match.path}/survey`}>
        <TypeSurvey />
      </Route>
    </Switch>
  );
};

export default App;
