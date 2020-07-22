import { combineReducers } from "redux";

import auth from "./auth";
import kapal from "./kapal";
import rabReparasi from "./rabReparasi";
import standarTarif from "./standarTarif";

export default combineReducers({ auth, kapal, rabReparasi, standarTarif });
