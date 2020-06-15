import { combineReducers } from "redux";

import auth from "./auth";
import kapal from "./kapal";

export default combineReducers({ auth, kapal });
