import React from "react";
import { useHistory } from "react-router-dom";

import "./styles.scss";

const Component = () => {
  const history = useHistory();

  return (
    <div className="page-landing-page">
      <div className="background" />
      <div className="content">
        <h4>Rencana Anggaran Biaya</h4>
        <h1>Reparasi Kapal</h1>
        <button
          className="btn btn-primary"
          type="submit"
          style={{ width: "30%" }}
          onClick={() =>
            history.push(localStorage.getItem("token") ? "dashboard" : "login")
          }
        >
          {localStorage.getItem("token") ? "Dashboard" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Component;
