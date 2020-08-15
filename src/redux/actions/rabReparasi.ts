import { API } from "../../configs";
import { Dispatch } from "../types";

// get all rab
export const GET_ALL_RAB_PENDING = "GET_ALL_RAB_PENDING";
export const GET_ALL_RAB_SUCCESS = "GET_ALL_RAB_SUCCESS";
export const GET_ALL_RAB_ERROR = "GET_ALL_RAB_ERROR";

// delete rab
export const DELETE_RAB_PENDING = "DELETE_RAB_PENDING";
export const DELETE_RAB_SUCCESS = "DELETE_RAB_SUCCESS";
export const DELETE_RAB_ERROR = "DELETE_RAB_ERROR";

// post rab
export const POST_RAB_PENDING = "POST_RAB_PENDING";
export const POST_RAB_SUCCESS = "POST_RAB_SUCCESS";
export const POST_RAB_ERROR = "POST_RAB_ERROR";

// patch rab
export const PATCH_RAB_PENDING = "PATCH_RAB_PENDING";
export const PATCH_RAB_SUCCESS = "PATCH_RAB_SUCCESS";
export const PATCH_RAB_ERROR = "PATCH_RAB_ERROR";

// get all pekerjaan rab
export const GET_ALL_PEKERJAAN_RAB_PENDING = "GET_ALL_PEKERJAAN_RAB_PENDING";
export const GET_ALL_PEKERJAAN_RAB_SUCCESS = "GET_ALL_PEKERJAAN_RAB_SUCCESS";
export const GET_ALL_PEKERJAAN_RAB_ERROR = "GET_ALL_PEKERJAAN_RAB_ERROR";

// delete pekerjaan rab
export const DELETE_PEKERJAAN_RAB_PENDING = "DELETE_PEKERJAAN_RAB_PENDING";
export const DELETE_PEKERJAAN_RAB_SUCCESS = "DELETE_PEKERJAAN_RAB_SUCCESS";
export const DELETE_PEKERJAAN_RAB_ERROR = "DELETE_PEKERJAAN_RAB_ERROR";

// post pekerjaan rab
export const POST_PEKERJAAN_RAB_PENDING = "POST_PEKERJAAN_RAB_PENDING";
export const POST_PEKERJAAN_RAB_SUCCESS = "POST_PEKERJAAN_RAB_SUCCESS";
export const POST_PEKERJAAN_RAB_ERROR = "POST_PEKERJAAN_RAB_ERROR";

// patch pekerjaan rab
export const PATCH_PEKERJAAN_RAB_PENDING = "PATCH_PEKERJAAN_RAB_PENDING";
export const PATCH_PEKERJAAN_RAB_SUCCESS = "PATCH_PEKERJAAN_RAB_SUCCESS";
export const PATCH_PEKERJAAN_RAB_ERROR = "PATCH_PEKERJAAN_RAB_ERROR";

// save rab reparasi
export const SAVE_RAB_REPARASI_PENDING = "SAVE_RAB_REPARASI_PENDING";
export const SAVE_RAB_REPARASI_SUCCESS = "SAVE_RAB_REPARASI_SUCCESS";
export const SAVE_RAB_REPARASI_ERROR = "SAVE_RAB_REPARASI_ERROR";

// get history
export const GET_HISTORY_PENDING = "GET_HISTORY_PENDING";
export const GET_HISTORY_SUCCESS = "GET_HISTORY_SUCCESS";
export const GET_HISTORY_ERROR = "GET_HISTORY_ERROR";

export const getAllRab = (idKapal: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_ALL_RAB_PENDING });
    const res = await API.getAllRab(idKapal);
    dispatch({
      type: GET_ALL_RAB_SUCCESS,
      payload: { data: res.data },
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: GET_ALL_RAB_ERROR,
        payload: { data: err.response.data },
      });
    } else {
      dispatch({ type: GET_ALL_RAB_ERROR });
    }
  }
};

export const deleteRab = (idKapal: string, id: string) => async (
  dispatch: Dispatch
) => {
  try {
    dispatch({ type: DELETE_RAB_PENDING });
    await API.deleteRab(idKapal, id);
    dispatch({
      type: DELETE_RAB_SUCCESS,
      payload: { data: id },
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: DELETE_RAB_ERROR,
        payload: { data: err.response.data },
      });
    } else {
      dispatch({ type: DELETE_RAB_ERROR });
    }
  }
};

export const postRab = (form: any, idKapal: string, cb?: () => void) => async (
  dispatch: Dispatch
) => {
  try {
    dispatch({ type: POST_RAB_PENDING });
    const res = await API.postRab(form, idKapal);
    cb && cb();
    dispatch({
      type: POST_RAB_SUCCESS,
      payload: { data: res.data },
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: POST_RAB_ERROR,
        payload: { data: err.response.data },
      });
    } else {
      dispatch({ type: POST_RAB_ERROR });
    }
  }
};

export const patchRab = (
  form: any,
  idKapal: string,
  id: string | number,
  cb?: () => void
) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: PATCH_RAB_PENDING });
    const res = await API.patchRab(form, idKapal, id);
    cb && cb();
    dispatch({
      type: PATCH_RAB_SUCCESS,
      payload: { data: res.data, id },
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: PATCH_RAB_ERROR,
        payload: { data: err.response.data },
      });
    } else {
      dispatch({ type: PATCH_RAB_ERROR });
    }
  }
};

export const getAllPekerjaanRab = (idKapal: string) => async (
  dispatch: Dispatch
) => {
  try {
    dispatch({ type: GET_ALL_PEKERJAAN_RAB_PENDING });
    const res = await API.getAllPekerjaanRab(idKapal);
    dispatch({
      type: GET_ALL_PEKERJAAN_RAB_SUCCESS,
      payload: { data: res.data },
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: GET_ALL_PEKERJAAN_RAB_ERROR,
        payload: { data: err.response.data },
      });
    } else {
      dispatch({ type: GET_ALL_PEKERJAAN_RAB_ERROR });
    }
  }
};

export const deletePekerjaanRab = (idKapal: string, id: string) => async (
  dispatch: Dispatch
) => {
  try {
    dispatch({ type: DELETE_PEKERJAAN_RAB_PENDING });
    await API.deletePekerjaanRab(idKapal, id);
    dispatch({
      type: DELETE_PEKERJAAN_RAB_SUCCESS,
      payload: { data: id },
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: DELETE_PEKERJAAN_RAB_ERROR,
        payload: { data: err.response.data },
      });
    } else {
      dispatch({ type: DELETE_PEKERJAAN_RAB_ERROR });
    }
  }
};

export const postPekerjaanRab = (
  form: any,
  idKapal: string | number,
  cb?: () => void
) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: POST_PEKERJAAN_RAB_PENDING });
    const res = await API.postPekerjaanRab(form, idKapal);
    cb && cb();
    dispatch({
      type: POST_PEKERJAAN_RAB_SUCCESS,
      payload: { data: res.data },
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: POST_PEKERJAAN_RAB_ERROR,
        payload: { data: err.response.data },
      });
    } else {
      dispatch({ type: POST_PEKERJAAN_RAB_ERROR });
    }
  }
};

export const patchPekerjaanRab = (
  form: any,
  idKapal: string | number,
  id: string | number,
  cb?: () => void
) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: PATCH_PEKERJAAN_RAB_PENDING });
    const res = await API.patchPekerjaanRab(form, idKapal, id);
    cb && cb();
    dispatch({
      type: PATCH_PEKERJAAN_RAB_SUCCESS,
      payload: { data: res.data, id },
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: PATCH_PEKERJAAN_RAB_ERROR,
        payload: { data: err.response.data },
      });
    } else {
      dispatch({ type: PATCH_PEKERJAAN_RAB_ERROR });
    }
  }
};

export const saveRabReparasi = (idKapal: string, edit: boolean) => async (
  dispatch: Dispatch
) => {
  try {
    dispatch({ type: SAVE_RAB_REPARASI_PENDING });
    await API.saveRabReparasi(idKapal, edit);
    dispatch({ type: SAVE_RAB_REPARASI_SUCCESS, payload: { data: edit } });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: SAVE_RAB_REPARASI_ERROR,
        payload: { data: err.response.data },
      });
    } else {
      dispatch({ type: SAVE_RAB_REPARASI_ERROR });
    }
  }
};

export const getHistory = (idKapal: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_HISTORY_PENDING });
    const res = await API.getHistory(idKapal);
    dispatch({ type: GET_HISTORY_SUCCESS, payload: { data: res.data } });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: GET_HISTORY_ERROR,
        payload: { data: err.response.data },
      });
    } else {
      dispatch({ type: GET_HISTORY_ERROR });
    }
  }
};
