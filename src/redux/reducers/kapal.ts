import {
  DELETE_KAPAL_ERROR,
  DELETE_KAPAL_PENDING,
  DELETE_KAPAL_SUCCESS,
  DELETE_TYPE_KAPAL_ERROR,
  DELETE_TYPE_KAPAL_PENDING,
  DELETE_TYPE_KAPAL_SUCCESS,
  DELETE_TYPE_SURVEY_ERROR,
  DELETE_TYPE_SURVEY_PENDING,
  DELETE_TYPE_SURVEY_SUCCESS,
  GET_ALL_KAPAL_ERROR,
  GET_ALL_KAPAL_PENDING,
  GET_ALL_KAPAL_SUCCESS,
  GET_TYPE_KAPAL_ERROR,
  GET_TYPE_KAPAL_PENDING,
  GET_TYPE_KAPAL_SUCCESS,
  GET_TYPE_SURVEY_ERROR,
  GET_TYPE_SURVEY_PENDING,
  GET_TYPE_SURVEY_SUCCESS,
  PATCH_KAPAL_ERROR,
  PATCH_KAPAL_PENDING,
  PATCH_KAPAL_SUCCESS,
  POST_KAPAL_ERROR,
  POST_KAPAL_PENDING,
  POST_KAPAL_SUCCESS,
  POST_TYPE_KAPAL_ERROR,
  POST_TYPE_KAPAL_PENDING,
  POST_TYPE_KAPAL_SUCCESS,
  POST_TYPE_SURVEY_ERROR,
  POST_TYPE_SURVEY_PENDING,
  POST_TYPE_SURVEY_SUCCESS
} from "../actions";
import { Action, KapalState } from "../types";

const initialState: KapalState = {
  kapal: {
    isLoading: false,
    list: []
  },
  detailKapal: {
    isLoading: false,
    data: {}
  },
  addKapal: {
    isLoading: false
  },
  patchKapal: {
    isLoading: false
  },
  deleteKapal: {
    isLoading: false
  },
  typeKapal: {
    isLoading: false,
    list: []
  },
  typeSurvey: {
    isLoading: false,
    list: []
  }
};

let result;
let index;

export default (state = initialState, { type, payload }: Action) => {
  switch (type) {
    // get all kapal
    case GET_ALL_KAPAL_PENDING:
      return {
        ...state,
        kapal: { ...state.kapal, isLoading: true }
      };
    case GET_ALL_KAPAL_SUCCESS:
      return {
        ...state,
        kapal: { ...state.kapal, isLoading: false, list: payload.data }
      };
    case GET_ALL_KAPAL_ERROR:
      return {
        ...state,
        kapal: { ...state.kapal, isLoading: false }
      };

    // post kapal
    case POST_KAPAL_PENDING:
      return {
        ...state,
        addKapal: { ...state.addKapal, isLoading: true }
      };
    case POST_KAPAL_SUCCESS:
      return {
        ...state,
        addKapal: { ...state.addKapal, isLoading: false },
        kapal: { ...state.kapal, list: [payload.data, ...state.kapal.list] }
      };
    case POST_KAPAL_ERROR:
      return {
        ...state,
        addKapal: { ...state.addKapal, isLoading: false }
      };

    // patch kapal
    case PATCH_KAPAL_PENDING:
      return {
        ...state,
        patchKapal: { ...state.patchKapal, isLoading: true }
      };
    case PATCH_KAPAL_SUCCESS:
      result = [...state.kapal.list];
      index = state.kapal.list.findIndex(item => item.id === payload.id);
      result[index] = { id: payload.id, ...payload.data };

      return {
        ...state,
        patchKapal: { ...state.patchKapal, isLoading: false },
        kapal: { ...state.kapal, list: result }
      };
    case PATCH_KAPAL_ERROR:
      return {
        ...state,
        patchKapal: { ...state.patchKapal, isLoading: false }
      };

    // delete kapal
    case DELETE_KAPAL_PENDING:
      return {
        ...state,
        deleteKapal: { ...state.deleteKapal, isLoading: true }
      };
    case DELETE_KAPAL_SUCCESS:
      return {
        ...state,
        deleteKapal: { ...state.deleteKapal, isLoading: false },
        kapal: {
          ...state.kapal,
          list: state.kapal.list.filter(item => item.id !== payload.data)
        }
      };
    case DELETE_KAPAL_ERROR:
      return {
        ...state,
        deleteKapal: { ...state.deleteKapal, isLoading: false }
      };

    // get type kapal
    case GET_TYPE_KAPAL_PENDING:
      return {
        ...state,
        typeKapal: { ...state.typeKapal, isLoading: true }
      };
    case GET_TYPE_KAPAL_SUCCESS:
      return {
        ...state,
        typeKapal: { ...state.typeKapal, isLoading: false, list: payload.data }
      };
    case GET_TYPE_KAPAL_ERROR:
      return {
        ...state,
        typeKapal: { ...state.typeKapal, isLoading: false }
      };

    // post type kapal
    case POST_TYPE_KAPAL_PENDING:
      return {
        ...state,
        typeKapal: { ...state.typeKapal, isLoading: true }
      };
    case POST_TYPE_KAPAL_SUCCESS:
      return {
        ...state,
        typeKapal: {
          ...state.typeKapal,
          isLoading: false,
          list: [payload.data, ...state.typeKapal.list]
        }
      };
    case POST_TYPE_KAPAL_ERROR:
      return {
        ...state,
        typeKapal: { ...state.typeKapal, isLoading: false }
      };

    // delete type kapal
    case DELETE_TYPE_KAPAL_PENDING:
      return {
        ...state,
        typeKapal: { ...state.typeKapal, isLoading: true }
      };
    case DELETE_TYPE_KAPAL_SUCCESS:
      return {
        ...state,
        typeKapal: {
          ...state.typeKapal,
          isLoading: false,
          list: state.typeKapal.list.filter(item => item.id !== payload.id)
        }
      };
    case DELETE_TYPE_KAPAL_ERROR:
      return {
        ...state,
        typeKapal: { ...state.typeKapal, isLoading: false }
      };

    // get type survey
    case GET_TYPE_SURVEY_PENDING:
      return {
        ...state,
        typeSurvey: { ...state.typeSurvey, isLoading: true }
      };
    case GET_TYPE_SURVEY_SUCCESS:
      return {
        ...state,
        typeSurvey: {
          ...state.typeSurvey,
          isLoading: false,
          list: payload.data
        }
      };
    case GET_TYPE_SURVEY_ERROR:
      return {
        ...state,
        typeSurvey: { ...state.typeSurvey, isLoading: false }
      };

    // post type survey
    case POST_TYPE_SURVEY_PENDING:
      return {
        ...state,
        typeSurvey: { ...state.typeSurvey, isLoading: true }
      };
    case POST_TYPE_SURVEY_SUCCESS:
      return {
        ...state,
        typeSurvey: {
          ...state.typeSurvey,
          isLoading: false,
          list: [payload.data, ...state.typeSurvey.list]
        }
      };
    case POST_TYPE_SURVEY_ERROR:
      return {
        ...state,
        typeSurvey: { ...state.typeSurvey, isLoading: false }
      };

    // delete type survey
    case DELETE_TYPE_SURVEY_PENDING:
      return {
        ...state,
        typeSurvey: { ...state.typeSurvey, isLoading: true }
      };
    case DELETE_TYPE_SURVEY_SUCCESS:
      return {
        ...state,
        typeSurvey: {
          ...state.typeSurvey,
          isLoading: false,
          list: state.typeSurvey.list.filter(item => item.id !== payload.id)
        }
      };
    case DELETE_TYPE_SURVEY_ERROR:
      return {
        ...state,
        typeSurvey: { ...state.typeSurvey, isLoading: false }
      };

    default:
      return state;
  }
};
