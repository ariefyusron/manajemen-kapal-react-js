import React, { memo } from "react";
import { useHistory } from "react-router-dom";

const Component = () => {
  const history = useHistory();

  return (
    <div>
      <button type="button" onClick={() => history.push("/dashboard")}>
        Standar tarif
      </button>
      <br />
      <button
        type="button"
        onClick={() => history.push("/dashboard/identitas-kapal")}
      >
        Identitas Kapal
      </button>
    </div>
  );
};

export default memo(Component);
