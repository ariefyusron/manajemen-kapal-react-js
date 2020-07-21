import { API } from "../../configs";
import { Dispatch } from "../types";

// get all pengedokan
export const GET_ALL_PENGEDOKAN_PENDING = "GET_ALL_PENGEDOKAN_PENDING";
export const GET_ALL_PENGEDOKAN_SUCCESS = "GET_ALL_PENGEDOKAN_SUCCESS";
export const GET_ALL_PENGEDOKAN_ERROR = "GET_ALL_PENGEDOKAN_ERROR";

// delete pengedokan
export const DELETE_PENGEDOKAN_PENDING = "DELETE_PENGEDOKAN_PENDING";
export const DELETE_PENGEDOKAN_SUCCESS = "DELETE_PENGEDOKAN_SUCCESS";
export const DELETE_PENGEDOKAN_ERROR = "DELETE_PENGEDOKAN_ERROR";

// post pengedokan
export const POST_PENGEDOKAN_PENDING = "POST_PENGEDOKAN_PENDING";
export const POST_PENGEDOKAN_SUCCESS = "POST_PENGEDOKAN_SUCCESS";
export const POST_PENGEDOKAN_ERROR = "POST_PENGEDOKAN_ERROR";

// patch pengedokan
export const PATCH_PENGEDOKAN_PENDING = "PATCH_PENGEDOKAN_PENDING";
export const PATCH_PENGEDOKAN_SUCCESS = "PATCH_PENGEDOKAN_SUCCESS";
export const PATCH_PENGEDOKAN_ERROR = "PATCH_PENGEDOKAN_ERROR";

// get all pelayanan umum
export const GET_ALL_PELAYANAN_UMUM_PENDING = "GET_ALL_PELAYANAN_UMUM_PENDING";
export const GET_ALL_PELAYANAN_UMUM_SUCCESS = "GET_ALL_PELAYANAN_UMUM_SUCCESS";
export const GET_ALL_PELAYANAN_UMUM_ERROR = "GET_ALL_PELAYANAN_UMUM_ERROR";

// delete pelayanan umum
export const DELETE_PELAYANAN_UMUM_PENDING = "DELETE_PELAYANAN_UMUM_PENDING";
export const DELETE_PELAYANAN_UMUM_SUCCESS = "DELETE_PELAYANAN_UMUM_SUCCESS";
export const DELETE_PELAYANAN_UMUM_ERROR = "DELETE_PELAYANAN_UMUM_ERROR";

// post pelayanan umum
export const POST_PELAYANAN_UMUM_PENDING = "POST_PELAYANAN_UMUM_PENDING";
export const POST_PELAYANAN_UMUM_SUCCESS = "POST_PELAYANAN_UMUM_SUCCESS";
export const POST_PELAYANAN_UMUM_ERROR = "POST_PELAYANAN_UMUM_ERROR";

// patch pelayanan umum
export const PATCH_PELAYANAN_UMUM_PENDING = "PATCH_PELAYANAN_UMUM_PENDING";
export const PATCH_PELAYANAN_UMUM_SUCCESS = "PATCH_PELAYANAN_UMUM_SUCCESS";
export const PATCH_PELAYANAN_UMUM_ERROR = "PATCH_PELAYANAN_UMUM_ERROR";

// get all kontruksi badan kapal
export const GET_ALL_KONTRUKSI_BADAN_KAPAL_PENDING =
  "GET_ALL_KONTRUKSI_BADAN_KAPAL_PENDING";
export const GET_ALL_KONTRUKSI_BADAN_KAPAL_SUCCESS =
  "GET_ALL_KONTRUKSI_BADAN_KAPAL_SUCCESS";
export const GET_ALL_KONTRUKSI_BADAN_KAPAL_ERROR =
  "GET_ALL_KONTRUKSI_BADAN_KAPAL_ERROR";

// delete kontruksi badan kapal
export const DELETE_KONTRUKSI_BADAN_KAPAL_PENDING =
  "DELETE_KONTRUKSI_BADAN_KAPAL_PENDING";
export const DELETE_KONTRUKSI_BADAN_KAPAL_SUCCESS =
  "DELETE_KONTRUKSI_BADAN_KAPAL_SUCCESS";
export const DELETE_KONTRUKSI_BADAN_KAPAL_ERROR =
  "DELETE_KONTRUKSI_BADAN_KAPAL_ERROR";

// post kontruksi badan kapal
export const POST_KONTRUKSI_BADAN_KAPAL_PENDING =
  "POST_KONTRUKSI_BADAN_KAPAL_PENDING";
export const POST_KONTRUKSI_BADAN_KAPAL_SUCCESS =
  "POST_KONTRUKSI_BADAN_KAPAL_SUCCESS";
export const POST_KONTRUKSI_BADAN_KAPAL_ERROR =
  "POST_KONTRUKSI_BADAN_KAPAL_ERROR";

// patch kontruksi badan kapal
export const PATCH_KONTRUKSI_BADAN_KAPAL_PENDING =
  "PATCH_KONTRUKSI_BADAN_KAPAL_PENDING";
export const PATCH_KONTRUKSI_BADAN_KAPAL_SUCCESS =
  "PATCH_KONTRUKSI_BADAN_KAPAL_SUCCESS";
export const PATCH_KONTRUKSI_BADAN_KAPAL_ERROR =
  "PATCH_KONTRUKSI_BADAN_KAPAL_ERROR";

export const getAllPengedokan = (idKapal: string) => async (
  dispatch: Dispatch
) => {
  try {
    dispatch({ type: GET_ALL_PENGEDOKAN_PENDING });
    const res = await API.getAllPengedokan(idKapal);
    dispatch({
      type: GET_ALL_PENGEDOKAN_SUCCESS,
      payload: { data: res.data }
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: GET_ALL_PENGEDOKAN_ERROR,
        payload: { data: err.response.data }
      });
    } else {
      dispatch({ type: GET_ALL_PENGEDOKAN_ERROR });
    }
  }
};

export const deletePengedokan = (idKapal: string, id: string) => async (
  dispatch: Dispatch
) => {
  try {
    dispatch({ type: DELETE_PENGEDOKAN_PENDING });
    await API.deletePengedokan(idKapal, id);
    dispatch({
      type: DELETE_PENGEDOKAN_SUCCESS,
      payload: { data: id }
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: DELETE_PENGEDOKAN_ERROR,
        payload: { data: err.response.data }
      });
    } else {
      dispatch({ type: DELETE_PENGEDOKAN_ERROR });
    }
  }
};

export const postPengedokan = (
  form: any,
  idKapal: string,
  cb?: () => void
) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: POST_PENGEDOKAN_PENDING });
    const res = await API.postPengedokan(form, idKapal);
    cb && cb();
    dispatch({
      type: POST_PENGEDOKAN_SUCCESS,
      payload: { data: res.data }
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: POST_PENGEDOKAN_ERROR,
        payload: { data: err.response.data }
      });
    } else {
      dispatch({ type: POST_PENGEDOKAN_ERROR });
    }
  }
};

export const patchPengedokan = (
  form: any,
  idKapal: string,
  id: string | number,
  cb?: () => void
) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: PATCH_PENGEDOKAN_PENDING });
    const res = await API.patchPengedokan(form, idKapal, id);
    cb && cb();
    dispatch({
      type: PATCH_PENGEDOKAN_SUCCESS,
      payload: { data: res.data, id }
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: PATCH_PENGEDOKAN_ERROR,
        payload: { data: err.response.data }
      });
    } else {
      dispatch({ type: PATCH_PENGEDOKAN_ERROR });
    }
  }
};

export const getAllPelayananUmum = (idKapal: string) => async (
  dispatch: Dispatch
) => {
  try {
    dispatch({ type: GET_ALL_PELAYANAN_UMUM_PENDING });
    const res = await API.getAllPelayananUmum(idKapal);
    dispatch({
      type: GET_ALL_PELAYANAN_UMUM_SUCCESS,
      payload: { data: res.data }
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: GET_ALL_PELAYANAN_UMUM_ERROR,
        payload: { data: err.response.data }
      });
    } else {
      dispatch({ type: GET_ALL_PELAYANAN_UMUM_ERROR });
    }
  }
};

export const deletePelayananUmum = (idKapal: string, id: string) => async (
  dispatch: Dispatch
) => {
  try {
    dispatch({ type: DELETE_PELAYANAN_UMUM_PENDING });
    await API.deletePelayananUmum(idKapal, id);
    dispatch({
      type: DELETE_PELAYANAN_UMUM_SUCCESS,
      payload: { data: id }
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: DELETE_PELAYANAN_UMUM_ERROR,
        payload: { data: err.response.data }
      });
    } else {
      dispatch({ type: DELETE_PELAYANAN_UMUM_ERROR });
    }
  }
};

export const postPelayananUmum = (
  form: any,
  idKapal: string,
  cb?: () => void
) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: POST_PELAYANAN_UMUM_PENDING });
    const res = await API.postPelayananUmum(form, idKapal);
    cb && cb();
    dispatch({
      type: POST_PELAYANAN_UMUM_SUCCESS,
      payload: { data: res.data }
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: POST_PELAYANAN_UMUM_ERROR,
        payload: { data: err.response.data }
      });
    } else {
      dispatch({ type: POST_PELAYANAN_UMUM_ERROR });
    }
  }
};

export const patchPelayananUmum = (
  form: any,
  idKapal: string,
  id: string | number,
  cb?: () => void
) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: PATCH_PELAYANAN_UMUM_PENDING });
    const res = await API.patchPelayananUmum(form, idKapal, id);
    cb && cb();
    dispatch({
      type: PATCH_PELAYANAN_UMUM_SUCCESS,
      payload: { data: res.data, id }
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: PATCH_PELAYANAN_UMUM_ERROR,
        payload: { data: err.response.data }
      });
    } else {
      dispatch({ type: PATCH_PELAYANAN_UMUM_ERROR });
    }
  }
};

export const getAllKontruksiBadanKapal = (idKapal: string) => async (
  dispatch: Dispatch
) => {
  try {
    dispatch({ type: GET_ALL_KONTRUKSI_BADAN_KAPAL_PENDING });
    const res = await API.getAllKontruksiBadanKapal(idKapal);
    dispatch({
      type: GET_ALL_KONTRUKSI_BADAN_KAPAL_SUCCESS,
      payload: { data: res.data }
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: GET_ALL_KONTRUKSI_BADAN_KAPAL_ERROR,
        payload: { data: err.response.data }
      });
    } else {
      dispatch({ type: GET_ALL_KONTRUKSI_BADAN_KAPAL_ERROR });
    }
  }
};

export const deleteKontruksiBadanKapal = (
  idKapal: string,
  id: string
) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: DELETE_KONTRUKSI_BADAN_KAPAL_PENDING });
    await API.deleteKontruksiBadanKapal(idKapal, id);
    dispatch({
      type: DELETE_KONTRUKSI_BADAN_KAPAL_SUCCESS,
      payload: { data: id }
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: DELETE_KONTRUKSI_BADAN_KAPAL_ERROR,
        payload: { data: err.response.data }
      });
    } else {
      dispatch({ type: DELETE_KONTRUKSI_BADAN_KAPAL_ERROR });
    }
  }
};

export const postKontruksiBadanKapal = (
  form: any,
  idKapal: string,
  cb?: () => void
) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: POST_KONTRUKSI_BADAN_KAPAL_PENDING });
    const res = await API.postKontruksiBadanKapal(form, idKapal);
    cb && cb();
    dispatch({
      type: POST_KONTRUKSI_BADAN_KAPAL_SUCCESS,
      payload: { data: res.data }
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: POST_KONTRUKSI_BADAN_KAPAL_ERROR,
        payload: { data: err.response.data }
      });
    } else {
      dispatch({ type: POST_KONTRUKSI_BADAN_KAPAL_ERROR });
    }
  }
};

export const patchKontruksiBadanKapal = (
  form: any,
  idKapal: string,
  id: string | number,
  cb?: () => void
) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: PATCH_KONTRUKSI_BADAN_KAPAL_PENDING });
    const res = await API.patchKontruksiBadanKapal(form, idKapal, id);
    cb && cb();
    dispatch({
      type: PATCH_KONTRUKSI_BADAN_KAPAL_SUCCESS,
      payload: { data: res.data, id }
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: PATCH_KONTRUKSI_BADAN_KAPAL_ERROR,
        payload: { data: err.response.data }
      });
    } else {
      dispatch({ type: PATCH_KONTRUKSI_BADAN_KAPAL_ERROR });
    }
  }
};
