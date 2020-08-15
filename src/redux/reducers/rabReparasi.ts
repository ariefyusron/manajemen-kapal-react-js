import {
  DELETE_PEKERJAAN_RAB_ERROR,
  DELETE_PEKERJAAN_RAB_PENDING,
  DELETE_PEKERJAAN_RAB_SUCCESS,
  DELETE_RAB_ERROR,
  DELETE_RAB_PENDING,
  DELETE_RAB_SUCCESS,
  GET_ALL_PEKERJAAN_RAB_ERROR,
  GET_ALL_PEKERJAAN_RAB_PENDING,
  GET_ALL_PEKERJAAN_RAB_SUCCESS,
  GET_ALL_RAB_ERROR,
  GET_ALL_RAB_PENDING,
  GET_ALL_RAB_SUCCESS,
  PATCH_PEKERJAAN_RAB_ERROR,
  PATCH_PEKERJAAN_RAB_PENDING,
  PATCH_PEKERJAAN_RAB_SUCCESS,
  PATCH_RAB_ERROR,
  PATCH_RAB_PENDING,
  PATCH_RAB_SUCCESS,
  POST_PEKERJAAN_RAB_ERROR,
  POST_PEKERJAAN_RAB_PENDING,
  POST_PEKERJAAN_RAB_SUCCESS,
  POST_RAB_ERROR,
  POST_RAB_PENDING,
  POST_RAB_SUCCESS,
  SAVE_RAB_REPARASI_ERROR,
  SAVE_RAB_REPARASI_PENDING,
  SAVE_RAB_REPARASI_SUCCESS
} from "../actions";
import { Action, RabReparasiState } from "../types";

const initialState: RabReparasiState = {
  isLoading: false,
  list: [],
  listPekerjaan: []
};

let result;
let index;

export default (state = initialState, { type, payload }: Action) => {
  switch (type) {
    // get rab
    case GET_ALL_RAB_PENDING:
      return { ...state, isLoading: true };
    case GET_ALL_RAB_SUCCESS:
      return { ...state, isLoading: false, list: payload.data };
    case GET_ALL_RAB_ERROR:
      return { ...state, isLoading: false };

    // delete rab
    case DELETE_RAB_PENDING:
      return { ...state, isLoading: true };
    case DELETE_RAB_SUCCESS:
      return {
        ...state,
        isLoading: false,
        list: state.list.filter(
          e => e.id.toString() !== payload.data.toString()
        )
      };
    case DELETE_RAB_ERROR:
      return { ...state, isLoading: false };

    // post rab
    case POST_RAB_PENDING:
      return { ...state, isLoading: true };
    case POST_RAB_SUCCESS:
      return {
        ...state,
        isLoading: false,
        list: [payload.data, ...state.list]
      };
    case POST_RAB_ERROR:
      return { ...state, isLoading: false };

    // patch rab
    case PATCH_RAB_PENDING:
      return { ...state, isLoading: true };
    case PATCH_RAB_SUCCESS:
      result = [...state.list];
      index = state.list.findIndex(item => item.id === payload.id);
      result[index] = { id: payload.id, ...payload.data };

      return { ...state, isLoading: false, list: result };
    case PATCH_RAB_ERROR:
      return { ...state, isLoading: false };

    // get perkerjaan rab
    case GET_ALL_PEKERJAAN_RAB_PENDING:
      return { ...state, isLoading: true };
    case GET_ALL_PEKERJAAN_RAB_SUCCESS:
      return { ...state, isLoading: false, listPekerjaan: payload.data };
    case GET_ALL_PEKERJAAN_RAB_ERROR:
      return { ...state, isLoading: false };

    // post perkerjaan rab
    case POST_PEKERJAAN_RAB_PENDING:
      return { ...state, isLoading: true };
    case POST_PEKERJAAN_RAB_SUCCESS:
      return {
        ...state,
        isLoading: false,
        listPekerjaan: [...state.listPekerjaan, payload.data]
      };
    case POST_PEKERJAAN_RAB_ERROR:
      return { ...state, isLoading: false };

    // patch pekerjaan rab
    case PATCH_PEKERJAAN_RAB_PENDING:
      return { ...state, isLoading: true };
    case PATCH_PEKERJAAN_RAB_SUCCESS:
      result = [...state.listPekerjaan];
      index = state.listPekerjaan.findIndex(item => item.id === payload.id);
      result[index] = { id: payload.id, ...payload.data };

      return { ...state, isLoading: false, listPekerjaan: result };
    case PATCH_PEKERJAAN_RAB_ERROR:
      return { ...state, isLoading: false };

    // delete pekerjaan rab
    case DELETE_PEKERJAAN_RAB_PENDING:
      return { ...state, isLoading: true };
    case DELETE_PEKERJAAN_RAB_SUCCESS:
      return {
        ...state,
        isLoading: false,
        listPekerjaan: state.listPekerjaan.filter(
          e => e.id.toString() !== payload.data.toString()
        )
      };
    case DELETE_PEKERJAAN_RAB_ERROR:
      return { ...state, isLoading: false };

    // save rab reparasi
    case SAVE_RAB_REPARASI_PENDING:
      return { ...state, isLoading: true };
    case SAVE_RAB_REPARASI_SUCCESS:
      result = [...state.listPekerjaan];
      result[0].is_save = !payload.data;

      return {
        ...state,
        isLoading: false,
        listPekerjaan: result
      };
    case SAVE_RAB_REPARASI_ERROR:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};
