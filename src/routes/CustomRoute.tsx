import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

interface Props {
  privateMode?: boolean;
}

const CustomRoute = ({
  privateMode,
  children,
  ...props
}: Partial<RouteProps & Props>) => {
  const renderPage = () => {
    if (privateMode) {
      return localStorage.getItem("token") ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: "/login",
          }}
        />
      );
    }

    return !localStorage.getItem("token") ? (
      children
    ) : (
      <Redirect
        to={{
          pathname: "/dashboard",
        }}
      />
    );
  };

  return <Route {...props}>{renderPage}</Route>;
};

CustomRoute.defaultProps = {
  privateMode: true,
};

export default CustomRoute;
