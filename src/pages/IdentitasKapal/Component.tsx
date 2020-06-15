import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { handleLogout } from "../../redux/actions";
import { documentTitle } from "../../utils";

const Component = () => {
  documentTitle("Identitas Kapal");
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div>
      <h1>Identitas Kapal</h1>

      <button
        type="button"
        onClick={() => dispatch(handleLogout(() => history.push("/login")))}
      >
        Logout
      </button>
    </div>
  );
};

export default Component;
