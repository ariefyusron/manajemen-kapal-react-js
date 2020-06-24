import { API } from "../../configs";
import { Dispatch } from "../types";

// post login
export const POST_LOGIN_PENDING = "POST_LOGIN_PENDING";
export const POST_LOGIN_SUCCESS = "POST_LOGIN_SUCCESS";
export const POST_LOGIN_ERROR = "POST_LOGIN_ERROR";

// post register
export const POST_REGISTER_PENDING = "POST_REGISTER_PENDING";
export const POST_REGISTER_SUCCESS = "POST_REGISTER_SUCCESS";
export const POST_REGISTER_ERROR = "POST_REGISTER_ERROR";

// get all user
export const GET_ALL_USER_PENDING = "GET_ALL_USER_PENDING";
export const GET_ALL_USER_SUCCESS = "GET_ALL_USER_SUCCESS";
export const GET_ALL_USER_ERROR = "GET_ALL_USER_ERROR";

// delete user
export const DELETE_USER_PENDING = "DELETE_USER_PENDING";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_ERROR = "DELETE_USER_ERROR";

export const HANDLE_LOGOUT = "HANDLE_LOGOUT";

export const postLogin = (
  form: {
    username: string;
    password: string;
  },
  cb: () => void
) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: POST_LOGIN_PENDING });
    const res = await API.postLogin(form);
    dispatch({
      type: POST_LOGIN_SUCCESS,
      payload: { data: res.data }
    });
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("is_admin", res.data.is_admin);
    cb();
  } catch (err) {
    if (err.response) {
      dispatch({
        type: POST_LOGIN_ERROR,
        payload: { data: err.response.data.message }
      });
    } else {
      dispatch({ type: POST_LOGIN_ERROR });
    }
  }
};

export const postRegister = (
  form: {
    username: string;
    password: string;
    is_admin: boolean;
  },
  cb: () => void,
  fromAdmin = false
) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: POST_REGISTER_PENDING });
    const res = await API.postRegister(form);
    dispatch({
      type: POST_REGISTER_SUCCESS,
      payload: { data: res.data }
    });
    if (!fromAdmin) {
      dispatch(postLogin(form, cb));
    } else {
      cb();
    }
  } catch (err) {
    if (err.response) {
      dispatch({
        type: POST_REGISTER_ERROR,
        payload: { data: err.response.data.message }
      });
    } else {
      dispatch({ type: POST_REGISTER_ERROR });
    }
  }
};

export const handleLogout = (cb: () => void) => async (dispatch: Dispatch) => {
  dispatch({ type: HANDLE_LOGOUT });
  localStorage.removeItem("token");
  localStorage.removeItem("is_admin");
  cb();
};

export const getAllUser = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_ALL_USER_PENDING });
    const res = await API.getAllUser();
    dispatch({
      type: GET_ALL_USER_SUCCESS,
      payload: { data: res.data }
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: GET_ALL_USER_ERROR,
        payload: { data: err.response.data }
      });
    } else {
      dispatch({ type: GET_ALL_USER_ERROR });
    }
  }
};

export const deleteUser = (id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: DELETE_USER_PENDING });
    await API.deleteUser(id);
    dispatch({
      type: DELETE_USER_SUCCESS,
      payload: { id }
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: DELETE_USER_ERROR,
        payload: { data: err.response.data }
      });
    } else {
      dispatch({ type: DELETE_USER_ERROR });
    }
  }
};
