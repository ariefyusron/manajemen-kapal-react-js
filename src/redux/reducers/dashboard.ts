import {
  GET_DASHBOARD_ERROR,
  GET_DASHBOARD_PENDING,
  GET_DASHBOARD_SUCCESS
} from "../actions";
import { Action, DashboardState } from "../types";

const initialState: DashboardState = {
  isLoading: false,
  list: []
};

export default (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case GET_DASHBOARD_PENDING:
      return { ...state, isLoading: true };
    case GET_DASHBOARD_SUCCESS:
      return { ...state, isLoading: false, list: payload.data };
    case GET_DASHBOARD_ERROR:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};
