import { API } from "../../configs";
import { Dispatch } from "../types";

// get persetujuan rab
export const GET_PERSETUJUAN_RAB_PENDING = "GET_PERSETUJUAN_RAB_PENDING";
export const GET_PERSETUJUAN_RAB_SUCCESS = "GET_PERSETUJUAN_RAB_SUCCESS";
export const GET_PERSETUJUAN_RAB_ERROR = "GET_PERSETUJUAN_RAB_ERROR";

// patch persetujuan rab
export const PATCH_PERSETUJUAN_RAB_PENDING = "PATCH_PERSETUJUAN_RAB_PENDING";
export const PATCH_PERSETUJUAN_RAB_SUCCESS = "PATCH_PERSETUJUAN_RAB_SUCCESS";
export const PATCH_PERSETUJUAN_RAB_ERROR = "PATCH_PERSETUJUAN_RAB_ERROR";

export const getPersetujuanRab = (idKapal: string) => async (
  dispatch: Dispatch
) => {
  try {
    dispatch({ type: GET_PERSETUJUAN_RAB_PENDING });
    const res = await API.getPersetujuanRab(idKapal);
    dispatch({
      type: GET_PERSETUJUAN_RAB_SUCCESS,
      payload: { data: res.data },
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: GET_PERSETUJUAN_RAB_ERROR,
        payload: { data: err.response.data },
      });
    } else {
      dispatch({ type: GET_PERSETUJUAN_RAB_ERROR });
    }
  }
};

export const patchPersetujuanRab = (
  form: any,
  idKapal: string,
  cb?: () => void
) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: PATCH_PERSETUJUAN_RAB_PENDING });
    const res = await API.patchPersetujuanRab(form, idKapal);
    cb && cb();
    dispatch({
      type: PATCH_PERSETUJUAN_RAB_SUCCESS,
      payload: { data: res.data },
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: PATCH_PERSETUJUAN_RAB_ERROR,
        payload: { data: err.response.data },
      });
    } else {
      dispatch({ type: PATCH_PERSETUJUAN_RAB_ERROR });
    }
  }
};
