import { API } from "../../configs";
import { Dispatch } from "../types";

// get standar tarif
export const GET_STANDAR_TARIF_PENDING = "GET_STANDAR_TARIF_PENDING";
export const GET_STANDAR_TARIF_SUCCESS = "GET_STANDAR_TARIF_SUCCESS";
export const GET_STANDAR_TARIF_ERROR = "GET_STANDAR_TARIF_ERROR";

// delete standar tarif
export const DELETE_STANDAR_TARIF_PENDING = "DELETE_STANDAR_TARIF_PENDING";
export const DELETE_STANDAR_TARIF_SUCCESS = "DELETE_STANDAR_TARIF_SUCCESS";
export const DELETE_STANDAR_TARIF_ERROR = "DELETE_STANDAR_TARIF_ERROR";

// post standar tarif
export const POST_STANDAR_TARIF_PENDING = "POST_STANDAR_TARIF_PENDING";
export const POST_STANDAR_TARIF_SUCCESS = "POST_STANDAR_TARIF_SUCCESS";
export const POST_STANDAR_TARIF_ERROR = "POST_STANDAR_TARIF_ERROR";

// patch standar tarif
export const PATCH_STANDAR_TARIF_PENDING = "PATCH_STANDAR_TARIF_PENDING";
export const PATCH_STANDAR_TARIF_SUCCESS = "PATCH_STANDAR_TARIF_SUCCESS";
export const PATCH_STANDAR_TARIF_ERROR = "PATCH_STANDAR_TARIF_ERROR";

export const getStandarTarif = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_STANDAR_TARIF_PENDING });
    const res = await API.getStandarTarif();
    dispatch({
      type: GET_STANDAR_TARIF_SUCCESS,
      payload: { data: res.data }
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: GET_STANDAR_TARIF_ERROR,
        payload: { data: err.response.data }
      });
    } else {
      dispatch({ type: GET_STANDAR_TARIF_ERROR });
    }
  }
};

export const deleteStandarTarif = (id: string) => async (
  dispatch: Dispatch
) => {
  try {
    dispatch({ type: DELETE_STANDAR_TARIF_PENDING });
    await API.deleteStandarTarif(id);
    dispatch({
      type: DELETE_STANDAR_TARIF_SUCCESS,
      payload: { data: id }
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: DELETE_STANDAR_TARIF_ERROR,
        payload: { data: err.response.data }
      });
    } else {
      dispatch({ type: DELETE_STANDAR_TARIF_ERROR });
    }
  }
};

export const postStandarTarif = (form: any, cb?: () => void) => async (
  dispatch: Dispatch
) => {
  try {
    dispatch({ type: POST_STANDAR_TARIF_PENDING });
    const res = await API.postStandarTarif(form);
    cb && cb();
    dispatch({
      type: POST_STANDAR_TARIF_SUCCESS,
      payload: { data: res.data }
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: POST_STANDAR_TARIF_ERROR,
        payload: { data: err.response.data }
      });
    } else {
      dispatch({ type: POST_STANDAR_TARIF_ERROR });
    }
  }
};

export const patchStandarTarif = (
  form: any,
  id: string | number,
  cb?: () => void
) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: PATCH_STANDAR_TARIF_PENDING });
    const res = await API.patchStandarTarif(form, id);
    cb && cb();
    dispatch({
      type: PATCH_STANDAR_TARIF_SUCCESS,
      payload: { data: res.data, id }
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: PATCH_STANDAR_TARIF_ERROR,
        payload: { data: err.response.data }
      });
    } else {
      dispatch({ type: PATCH_STANDAR_TARIF_ERROR });
    }
  }
};
