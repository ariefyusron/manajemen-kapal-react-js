import { API } from "../../configs";
import { Dispatch } from "../types";

// get all kapal
export const GET_ALL_KAPAL_PENDING = "GET_ALL_KAPAL_PENDING";
export const GET_ALL_KAPAL_SUCCESS = "GET_ALL_KAPAL_SUCCESS";
export const GET_ALL_KAPAL_ERROR = "GET_ALL_KAPAL_ERROR";

// post kapal
export const POST_KAPAL_PENDING = "POST_KAPAL_PENDING";
export const POST_KAPAL_SUCCESS = "POST_KAPAL_SUCCESS";
export const POST_KAPAL_ERROR = "POST_KAPAL_ERROR";

// patch kapal
export const PATCH_KAPAL_PENDING = "PATCH_KAPAL_PENDING";
export const PATCH_KAPAL_SUCCESS = "PATCH_KAPAL_SUCCESS";
export const PATCH_KAPAL_ERROR = "PATCH_KAPAL_ERROR";

// delete kapal
export const DELETE_KAPAL_PENDING = "DELETE_KAPAL_PENDING";
export const DELETE_KAPAL_SUCCESS = "DELETE_KAPAL_SUCCESS";
export const DELETE_KAPAL_ERROR = "DELETE_KAPAL_ERROR";

// type kapal
export const GET_TYPE_KAPAL_PENDING = "GET_TYPE_KAPAL_PENDING";
export const GET_TYPE_KAPAL_SUCCESS = "GET_TYPE_KAPAL_SUCCESS";
export const GET_TYPE_KAPAL_ERROR = "GET_TYPE_KAPAL_ERROR";

// type survey
export const GET_TYPE_SURVEY_PENDING = "GET_TYPE_SURVEY_PENDING";
export const GET_TYPE_SURVEY_SUCCESS = "GET_TYPE_SURVEY_SUCCESS";
export const GET_TYPE_SURVEY_ERROR = "GET_TYPE_SURVEY_ERROR";

export const getAllKapal = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_ALL_KAPAL_PENDING });
    const res = await API.getAllKapal();
    dispatch({
      type: GET_ALL_KAPAL_SUCCESS,
      payload: { data: res.data }
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: GET_ALL_KAPAL_ERROR,
        payload: { data: err.response.data }
      });
    } else {
      dispatch({ type: GET_ALL_KAPAL_ERROR });
    }
  }
};

export const postKapal = (form: any, cb: () => void) => async (
  dispatch: Dispatch
) => {
  try {
    dispatch({ type: POST_KAPAL_PENDING });
    const res = await API.postKapal(form);
    dispatch({
      type: POST_KAPAL_SUCCESS,
      payload: { data: res.data }
    });
    cb();
  } catch (err) {
    if (err.response) {
      dispatch({
        type: POST_KAPAL_ERROR,
        payload: { data: err.response.data }
      });
    } else {
      dispatch({ type: POST_KAPAL_ERROR });
    }
  }
};

export const patchKapal = (form: any, id: number, cb: () => void) => async (
  dispatch: Dispatch
) => {
  try {
    dispatch({ type: PATCH_KAPAL_PENDING });
    const res = await API.patchKapal(form, id);
    dispatch({
      type: PATCH_KAPAL_SUCCESS,
      payload: { data: res.data, id }
    });
    cb();
  } catch (err) {
    if (err.response) {
      dispatch({
        type: PATCH_KAPAL_ERROR,
        payload: { data: err.response.data }
      });
    } else {
      dispatch({ type: PATCH_KAPAL_ERROR });
    }
  }
};

export const deleteKapal = (id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: DELETE_KAPAL_PENDING });
    await API.deleteKapal(id);
    dispatch({
      type: DELETE_KAPAL_SUCCESS,
      payload: { data: id }
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: DELETE_KAPAL_ERROR,
        payload: { data: err.response.data }
      });
    } else {
      dispatch({ type: DELETE_KAPAL_ERROR });
    }
  }
};

export const getTypeKapal = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_TYPE_KAPAL_PENDING });
    const res = await API.getTypeKapal();
    dispatch({
      type: GET_TYPE_KAPAL_SUCCESS,
      payload: { data: res.data }
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: GET_TYPE_KAPAL_ERROR,
        payload: { data: err.response.data }
      });
    } else {
      dispatch({ type: GET_TYPE_KAPAL_ERROR });
    }
  }
};

export const getTypeSurvey = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_TYPE_SURVEY_PENDING });
    const res = await API.getTypeSurvey();
    dispatch({
      type: GET_TYPE_SURVEY_SUCCESS,
      payload: { data: res.data }
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: GET_TYPE_SURVEY_ERROR,
        payload: { data: err.response.data }
      });
    } else {
      dispatch({ type: GET_TYPE_SURVEY_ERROR });
    }
  }
};
