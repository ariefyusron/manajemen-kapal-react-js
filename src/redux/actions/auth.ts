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
  },
  cb: () => void
) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: POST_REGISTER_PENDING });
    const res = await API.postRegister({ ...form, is_admin: true });
    dispatch({
      type: POST_REGISTER_SUCCESS,
      payload: { data: res.data }
    });
    dispatch(postLogin(form, cb));
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
