import {
  DELETE_PEKERJAAN_STANDAR_TARIF_ERROR,
  DELETE_PEKERJAAN_STANDAR_TARIF_PENDING,
  DELETE_PEKERJAAN_STANDAR_TARIF_SUCCESS,
  DELETE_STANDAR_TARIF_ERROR,
  DELETE_STANDAR_TARIF_PENDING,
  DELETE_STANDAR_TARIF_SUCCESS,
  GET_PEKERJAAN_STANDAR_TARIF_ERROR,
  GET_PEKERJAAN_STANDAR_TARIF_PENDING,
  GET_PEKERJAAN_STANDAR_TARIF_SUCCESS,
  GET_STANDAR_TARIF_ERROR,
  GET_STANDAR_TARIF_PENDING,
  GET_STANDAR_TARIF_SUCCESS,
  PATCH_PEKERJAAN_STANDAR_TARIF_ERROR,
  PATCH_PEKERJAAN_STANDAR_TARIF_PENDING,
  PATCH_PEKERJAAN_STANDAR_TARIF_SUCCESS,
  PATCH_STANDAR_TARIF_ERROR,
  PATCH_STANDAR_TARIF_PENDING,
  PATCH_STANDAR_TARIF_SUCCESS,
  POST_PEKERJAAN_STANDAR_TARIF_ERROR,
  POST_PEKERJAAN_STANDAR_TARIF_PENDING,
  POST_PEKERJAAN_STANDAR_TARIF_SUCCESS,
  POST_STANDAR_TARIF_ERROR,
  POST_STANDAR_TARIF_PENDING,
  POST_STANDAR_TARIF_SUCCESS
} from "../actions";
import { Action, StandarTarifState } from "../types";

const initialState: StandarTarifState = {
  isLoading: false,
  list: [],
  listPekerjaan: []
};

let result;
let index;

export default (state = initialState, { type, payload }: Action) => {
  switch (type) {
    // get standar tarif
    case GET_STANDAR_TARIF_PENDING:
      return { ...state, isLoading: true };
    case GET_STANDAR_TARIF_SUCCESS:
      return { ...state, isLoading: false, list: payload.data };
    case GET_STANDAR_TARIF_ERROR:
      return { ...state, isLoading: false };

    // delete standar tarif
    case DELETE_STANDAR_TARIF_PENDING:
      return { ...state, isLoading: true };
    case DELETE_STANDAR_TARIF_SUCCESS:
      return {
        ...state,
        isLoading: false,
        list: state.list.filter(
          e => e.id.toString() !== payload.data.toString()
        )
      };
    case DELETE_STANDAR_TARIF_ERROR:
      return { ...state, isLoading: false };

    // post standar tarif
    case POST_STANDAR_TARIF_PENDING:
      return { ...state, isLoading: true };
    case POST_STANDAR_TARIF_SUCCESS:
      return {
        ...state,
        isLoading: false,
        list: [payload.data, ...state.list]
      };
    case POST_STANDAR_TARIF_ERROR:
      return { ...state, isLoading: false };

    // patch standar tarif
    case PATCH_STANDAR_TARIF_PENDING:
      return { ...state, isLoading: true };
    case PATCH_STANDAR_TARIF_SUCCESS:
      result = [...state.list];
      index = state.list.findIndex(item => item.id === payload.id);
      result[index] = { id: payload.id, ...payload.data };

      return { ...state, isLoading: false, list: result };
    case PATCH_STANDAR_TARIF_ERROR:
      return { ...state, isLoading: false };

    // get perkerjaan standar tarif
    case GET_PEKERJAAN_STANDAR_TARIF_PENDING:
      return { ...state, isLoading: true };
    case GET_PEKERJAAN_STANDAR_TARIF_SUCCESS:
      return { ...state, isLoading: false, listPekerjaan: payload.data };
    case GET_PEKERJAAN_STANDAR_TARIF_ERROR:
      return { ...state, isLoading: false };

    // post perkerjaan standar tarif
    case POST_PEKERJAAN_STANDAR_TARIF_PENDING:
      return { ...state, isLoading: true };
    case POST_PEKERJAAN_STANDAR_TARIF_SUCCESS:
      return {
        ...state,
        isLoading: false,
        listPekerjaan: [...state.listPekerjaan, payload.data]
      };
    case POST_PEKERJAAN_STANDAR_TARIF_ERROR:
      return { ...state, isLoading: false };

    // patch pekerjaan standar tarif
    case PATCH_PEKERJAAN_STANDAR_TARIF_PENDING:
      return { ...state, isLoading: true };
    case PATCH_PEKERJAAN_STANDAR_TARIF_SUCCESS:
      result = [...state.listPekerjaan];
      index = state.listPekerjaan.findIndex(item => item.id === payload.id);
      result[index] = { id: payload.id, ...payload.data };

      return { ...state, isLoading: false, listPekerjaan: result };
    case PATCH_PEKERJAAN_STANDAR_TARIF_ERROR:
      return { ...state, isLoading: false };

    // delete pekerjaan standar tarif
    case DELETE_PEKERJAAN_STANDAR_TARIF_PENDING:
      return { ...state, isLoading: true };
    case DELETE_PEKERJAAN_STANDAR_TARIF_SUCCESS:
      return {
        ...state,
        isLoading: false,
        listPekerjaan: state.listPekerjaan.filter(
          e => e.id.toString() !== payload.data.toString()
        )
      };
    case DELETE_PEKERJAAN_STANDAR_TARIF_ERROR:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};
