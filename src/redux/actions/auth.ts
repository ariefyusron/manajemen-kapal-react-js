import { API } from "../../configs";
import { Dispatch } from "../types";

// post login
export const POST_LOGIN_PENDING = "POST_LOGIN_PENDING";
export const POST_LOGIN_SUCCESS = "POST_LOGIN_SUCCESS";
export const POST_LOGIN_ERROR = "POST_LOGIN_ERROR";

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
    localStorage.setItem("token", res.data.is_admin);
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
