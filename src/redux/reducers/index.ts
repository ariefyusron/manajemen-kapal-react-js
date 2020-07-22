import { combineReducers } from "redux";

import auth from "./auth";
import kapal from "./kapal";
import rabReparasi from "./rabReparasi";
import standarTarif from "./standarTarif";
import persetujuanRab from "./persetujuanRab";

export default combineReducers({
  auth,
  kapal,
  rabReparasi,
  standarTarif,
  persetujuanRab
});
