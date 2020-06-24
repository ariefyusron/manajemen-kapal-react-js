import {
  DELETE_USER_ERROR,
  DELETE_USER_PENDING,
  DELETE_USER_SUCCESS,
  GET_ALL_USER_ERROR,
  GET_ALL_USER_PENDING,
  GET_ALL_USER_SUCCESS,
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
  },
  user: {
    isLoading: false,
    list: []
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

    // get all user
    case GET_ALL_USER_PENDING:
      return { ...state, user: { ...state.user, isLoading: true } };
    case GET_ALL_USER_SUCCESS:
      return {
        ...state,
        user: { ...state.user, isLoading: false, list: payload.data }
      };
    case GET_ALL_USER_ERROR:
      return { ...state, user: { ...state.user, isLoading: false } };

    // delete user
    case DELETE_USER_PENDING:
      return { ...state, user: { ...state.user, isLoading: true } };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          isLoading: false,
          list: state.user.list.filter(item => item.id !== payload.id)
        }
      };
    case DELETE_USER_ERROR:
      return { ...state, user: { ...state.user, isLoading: false } };

    default:
      return state;
  }
};
