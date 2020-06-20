import React, { memo } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { handleLogout } from "../../redux/actions";

const Component = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <nav className="navbar sticky-top navbar-dark bg-dark">
      <span className="navbar-brand mb-0 h1" onClick={() => history.push("/")}>
        Home
      </span>
      <button
        className="btn btn-link my-2 my-sm-0"
        type="button"
        style={{ color: "white", textDecoration: "underline" }}
        onClick={() => dispatch(handleLogout(() => history.push("/login")))}
      >
        Logout
      </button>
    </nav>
  );
};

export default memo(Component);
