import {
  POST_LOGIN_ERROR,
  POST_LOGIN_PENDING,
  POST_LOGIN_SUCCESS,
  POST_REGISTER_ERROR,
  POST_REGISTER_PENDING,
  POST_REGISTER_SUCCESS
} from "../actions";
import { Action, AuthState } from "../types";

const initialState: AuthState = {
  login: {
    isLoading: false,
    error: ""
  },
  register: {
    isLoading: false,
    error: ""
  }
};

export default (state = initialState, { type, payload }: Action) => {
  switch (type) {
    // post login
    case POST_LOGIN_PENDING:
      return {
        ...state,
        login: { ...state.login, isLoading: true, error: "" }
      };
    case POST_LOGIN_SUCCESS:
      return { ...state, login: { ...state.login, isLoading: false } };
    case POST_LOGIN_ERROR:
      return {
        ...state,
        login: { ...state.login, isLoading: false, error: payload.data || "" }
      };

    // post register
    case POST_REGISTER_PENDING:
      return {
        ...state,
        register: { ...state.register, isLoading: true, error: "" }
      };
    case POST_REGISTER_SUCCESS:
      return { ...state, register: { ...state.register, isLoading: false } };
    case POST_REGISTER_ERROR:
      return {
        ...state,
        register: {
          ...state.register,
          isLoading: false,
          error: payload.data || ""
        }
      };

    default:
      return state;
  }
};
