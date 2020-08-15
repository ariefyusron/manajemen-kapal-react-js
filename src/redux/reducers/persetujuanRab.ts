import {
  GET_PERSETUJUAN_RAB_ERROR,
  GET_PERSETUJUAN_RAB_PENDING,
  GET_PERSETUJUAN_RAB_SUCCESS,
  PATCH_PERSETUJUAN_RAB_ERROR,
  PATCH_PERSETUJUAN_RAB_PENDING,
  PATCH_PERSETUJUAN_RAB_SUCCESS,
} from "../actions";
import { Action, PersetujuanRabState } from "../types";

const initialState: PersetujuanRabState = {
  isLoading: false,
  data: {},
};

export default (state = initialState, { type, payload }: Action) => {
  switch (type) {
    // get persetujuan rab
    case GET_PERSETUJUAN_RAB_PENDING:
      return { ...state, isLoading: true };
    case GET_PERSETUJUAN_RAB_SUCCESS:
      return { ...state, isLoading: false, data: payload.data };
    case GET_PERSETUJUAN_RAB_ERROR:
      return { ...state, isLoading: false };

    // patch persetujuan rab
    case PATCH_PERSETUJUAN_RAB_PENDING:
      return { ...state, isLoading: true };
    case PATCH_PERSETUJUAN_RAB_SUCCESS:
      return { ...state, isLoading: false, data: payload.data };
    case PATCH_PERSETUJUAN_RAB_ERROR:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};
