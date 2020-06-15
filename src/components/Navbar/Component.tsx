import React, { memo } from "react";
import { useHistory } from "react-router-dom";

import { Button } from "..";

const Component = () => {
  const history = useHistory();

  return (
    <div>
      <Button onPress={() => history.push("/dashboard")}>Standar tarif</Button>
      <br />
      <Button onPress={() => history.push("/dashboard/identitas-kapal")}>
        Identitas Kapal
      </Button>
    </div>
  );
};

export default memo(Component);
