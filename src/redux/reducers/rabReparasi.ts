import {
  DELETE_KONTRUKSI_BADAN_KAPAL_ERROR,
  DELETE_KONTRUKSI_BADAN_KAPAL_PENDING,
  DELETE_KONTRUKSI_BADAN_KAPAL_SUCCESS,
  DELETE_PELAYANAN_UMUM_ERROR,
  DELETE_PELAYANAN_UMUM_PENDING,
  DELETE_PELAYANAN_UMUM_SUCCESS,
  DELETE_PENGEDOKAN_ERROR,
  DELETE_PENGEDOKAN_PENDING,
  DELETE_PENGEDOKAN_SUCCESS,
  GET_ALL_KONTRUKSI_BADAN_KAPAL_ERROR,
  GET_ALL_KONTRUKSI_BADAN_KAPAL_PENDING,
  GET_ALL_KONTRUKSI_BADAN_KAPAL_SUCCESS,
  GET_ALL_PELAYANAN_UMUM_ERROR,
  GET_ALL_PELAYANAN_UMUM_PENDING,
  GET_ALL_PELAYANAN_UMUM_SUCCESS,
  GET_ALL_PENGEDOKAN_ERROR,
  GET_ALL_PENGEDOKAN_PENDING,
  GET_ALL_PENGEDOKAN_SUCCESS
} from "../actions";
import { Action, RabReparasiState } from "../types";

const initialState: RabReparasiState = {
  pengedokan: {
    isLoading: false,
    list: []
  },
  pelayananUmum: {
    isLoading: false,
    list: []
  },
  kontruksiBadanKapal: {
    isLoading: false,
    list: []
  }
};

export default (state = initialState, { type, payload }: Action) => {
  switch (type) {
    // get all pengedokan
    case GET_ALL_PENGEDOKAN_PENDING:
      return {
        ...state,
        pengedokan: { ...state.pengedokan, isLoading: true }
      };
    case GET_ALL_PENGEDOKAN_SUCCESS:
      return {
        ...state,
        pengedokan: {
          ...state.pengedokan,
          isLoading: false,
          list: payload.data
        }
      };
    case GET_ALL_PENGEDOKAN_ERROR:
      return {
        ...state,
        pengedokan: {
          ...state.pengedokan,
          isLoading: false
        }
      };

    // delete pengedokan
    case DELETE_PENGEDOKAN_PENDING:
      return {
        ...state,
        pengedokan: { ...state.pengedokan, isLoading: true }
      };
    case DELETE_PENGEDOKAN_SUCCESS:
      return {
        ...state,
        pengedokan: {
          ...state.pengedokan,
          isLoading: false,
          list: state.pengedokan.list.filter(e => e.id !== payload.data)
        }
      };
    case DELETE_PENGEDOKAN_ERROR:
      return {
        ...state,
        pengedokan: {
          ...state.pengedokan,
          isLoading: false
        }
      };

    // get all pelayanan umum
    case GET_ALL_PELAYANAN_UMUM_PENDING:
      return {
        ...state,
        pelayananUmum: { ...state.pelayananUmum, isLoading: true }
      };
    case GET_ALL_PELAYANAN_UMUM_SUCCESS:
      return {
        ...state,
        pelayananUmum: {
          ...state.pelayananUmum,
          isLoading: false,
          list: payload.data
        }
      };
    case GET_ALL_PELAYANAN_UMUM_ERROR:
      return {
        ...state,
        pelayananUmum: {
          ...state.pelayananUmum,
          isLoading: false
        }
      };

    // delete pelayanan umum
    case DELETE_PELAYANAN_UMUM_PENDING:
      return {
        ...state,
        pelayananUmum: { ...state.pelayananUmum, isLoading: true }
      };
    case DELETE_PELAYANAN_UMUM_SUCCESS:
      return {
        ...state,
        pelayananUmum: {
          ...state.pelayananUmum,
          isLoading: false,
          list: state.pelayananUmum.list.filter(e => e.id !== payload.data)
        }
      };
    case DELETE_PELAYANAN_UMUM_ERROR:
      return {
        ...state,
        pelayananUmum: {
          ...state.pelayananUmum,
          isLoading: false
        }
      };

    // get all kontruksi badan kapal
    case GET_ALL_KONTRUKSI_BADAN_KAPAL_PENDING:
      return {
        ...state,
        kontruksiBadanKapal: { ...state.kontruksiBadanKapal, isLoading: true }
      };
    case GET_ALL_KONTRUKSI_BADAN_KAPAL_SUCCESS:
      return {
        ...state,
        kontruksiBadanKapal: {
          ...state.kontruksiBadanKapal,
          isLoading: false,
          list: payload.data
        }
      };
    case GET_ALL_KONTRUKSI_BADAN_KAPAL_ERROR:
      return {
        ...state,
        kontruksiBadanKapal: {
          ...state.kontruksiBadanKapal,
          isLoading: false
        }
      };

    // delete kontruksi badan kapal
    case DELETE_KONTRUKSI_BADAN_KAPAL_PENDING:
      return {
        ...state,
        kontruksiBadanKapal: { ...state.kontruksiBadanKapal, isLoading: true }
      };
    case DELETE_KONTRUKSI_BADAN_KAPAL_SUCCESS:
      return {
        ...state,
        kontruksiBadanKapal: {
          ...state.kontruksiBadanKapal,
          isLoading: false,
          list: state.kontruksiBadanKapal.list.filter(
            e => e.id !== payload.data
          )
        }
      };
    case DELETE_KONTRUKSI_BADAN_KAPAL_ERROR:
      return {
        ...state,
        kontruksiBadanKapal: {
          ...state.kontruksiBadanKapal,
          isLoading: false
        }
      };

    default:
      return state;
  }
};
