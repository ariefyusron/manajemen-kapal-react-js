import { API } from "../../configs";
import { Dispatch } from "../types";

// get dashboard
export const GET_DASHBOARD_PENDING = "GET_DASHBOARD_PENDING";
export const GET_DASHBOARD_SUCCESS = "GET_DASHBOARD_SUCCESS";
export const GET_DASHBOARD_ERROR = "GET_DASHBOARD_ERROR";

export const getDashboard = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_DASHBOARD_PENDING });
    const res = await API.getDashboard();
    dispatch({
      type: GET_DASHBOARD_SUCCESS,
      payload: { data: res.data },
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: GET_DASHBOARD_ERROR,
        payload: { data: err.response.data },
      });
    } else {
      dispatch({ type: GET_DASHBOARD_ERROR });
    }
  }
};
