import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import CustomRoute from "./CustomRoute";

// screens
import Login from "../pages/Login";
import Register from "../pages/Register";
import StandarTarif from "../pages/StandarTarif";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <Redirect
          to={{
            pathname: localStorage.getItem("token") ? "standar-tarif" : "login"
          }}
        />
      </Route>
      <CustomRoute path="/login" exact privateMode={false}>
        <Login />
      </CustomRoute>
      <CustomRoute path="/register" privateMode={false}>
        <Register />
      </CustomRoute>
      <CustomRoute path="/standar-tarif">
        <StandarTarif />
      </CustomRoute>
    </Switch>
  </BrowserRouter>
);

export default App;
