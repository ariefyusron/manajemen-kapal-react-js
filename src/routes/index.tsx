import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import CustomRoute from "./CustomRoute";

// screens
import Login from "../pages/Login";
import Register from "../pages/Register";
import Main from "./Main";
import LandingPage from "../pages/LandingPage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <CustomRoute path="/login" exact privateMode={false}>
          <Login />
        </CustomRoute>
        <CustomRoute path="/register" privateMode={false}>
          <Register />
        </CustomRoute>
        <CustomRoute path="/dashboard">
          <Main />
        </CustomRoute>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
