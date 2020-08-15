import axios from "axios";

const host = axios.create({
  baseURL: process.env.REACT_APP_HOST,
});
const token = `Bearer ${localStorage.getItem("token")}`;

// type body

const api = {
  postLogin: (form: { username: string; password: string }) =>
    host.post("user/login", form),
  postRegister: (form: {
    username: string;
    password: string;
    is_admin: boolean;
  }) => host.post("user/register", form),
  getAllUser: () =>
    host.get("user", {
      headers: { Authorization: token },
    }),
  deleteUser: (id: string) =>
    host.delete(`user/${id}`, {
      headers: { Authorization: token },
    }),

  getDashboard: () =>
    host.get("dashboard", {
      headers: { Authorization: token },
    }),

  getKapal: (id: string) =>
    host.get(`kapal/${id}`, {
      headers: { Authorization: token },
    }),
  getAllKapal: () =>
    host.get("kapal", {
      headers: { Authorization: token },
    }),
  postKapal: (form: any) =>
    host.post("kapal", form, {
      headers: { Authorization: token },
    }),
  patchKapal: (form: any, id: number) =>
    host.patch(`kapal/${id}`, form, {
      headers: { Authorization: token },
    }),
  deleteKapal: (id: string) =>
    host.delete(`kapal/${id}`, {
      headers: { Authorization: token },
    }),

  getTypeKapal: () =>
    host.get("kapal-type", {
      headers: { Authorization: token },
    }),
  postTypeKapal: (form: any) =>
    host.post("kapal-type", form, {
      headers: { Authorization: token },
    }),
  deleteTypeKapal: (id: string) =>
    host.delete(`kapal-type/${id}`, {
      headers: { Authorization: token },
    }),

  getTypeSurvey: () =>
    host.get("survey-type", {
      headers: { Authorization: token },
    }),
  postTypeSurvey: (form: any) =>
    host.post("survey-type", form, {
      headers: { Authorization: token },
    }),
  deleteTypeSurvey: (id: string) =>
    host.delete(`survey-type/${id}`, {
      headers: { Authorization: token },
    }),

  getAllRab: (idKapal: string) =>
    host.get(`rab/${idKapal}`, {
      headers: { Authorization: token },
    }),
  deleteRab: (idKapal: string, id: string) =>
    host.delete(`rab/${idKapal}/${id}`, {
      headers: { Authorization: token },
    }),
  postRab: (form: any, id: string) =>
    host.post(`rab/${id}`, form, {
      headers: { Authorization: token },
    }),
  patchRab: (form: any, idKapal: string, id: string | number) =>
    host.patch(`rab/${idKapal}/${id}`, form, {
      headers: { Authorization: token },
    }),
  getAllPekerjaanRab: (idKapal: string) =>
    host.get(`rab/${idKapal}/pekerjaan/${idKapal}`, {
      headers: { Authorization: token },
    }),
  deletePekerjaanRab: (idKapal: string, id: string) =>
    host.delete(`rab/${idKapal}/pekerjaan/${idKapal}/${id}`, {
      headers: { Authorization: token },
    }),
  postPekerjaanRab: (form: any, id: string | number) =>
    host.post(`rab/${id}/pekerjaan/${id}`, form, {
      headers: { Authorization: token },
    }),
  patchPekerjaanRab: (
    form: any,
    idKapal: string | number,
    id: string | number
  ) =>
    host.patch(`rab/${idKapal}/pekerjaan/${idKapal}/${id}`, form, {
      headers: { Authorization: token },
    }),

  getStandarTarif: () =>
    host.get("standar-tarif", {
      headers: { Authorization: token },
    }),
  deleteStandarTarif: (id: string) =>
    host.delete(`standar-tarif/${id}`, {
      headers: { Authorization: token },
    }),
  postStandarTarif: (form: any) =>
    host.post("standar-tarif", form, {
      headers: { Authorization: token },
    }),
  patchStandarTarif: (form: any, id: string | number) =>
    host.patch(`standar-tarif/${id}`, form, {
      headers: { Authorization: token },
    }),
  getPekerjaanStandarTarif: () =>
    host.get("standar-tarif/pekerjaan", {
      headers: { Authorization: token },
    }),
  deletePekerjaanStandarTarif: (id: string) =>
    host.delete(`standar-tarif/pekerjaan/${id}`, {
      headers: { Authorization: token },
    }),
  postPekerjaanStandarTarif: (form: any) =>
    host.post("standar-tarif/pekerjaan", form, {
      headers: { Authorization: token },
    }),
  patchPekerjaanStandarTarif: (form: any, id: string | number) =>
    host.patch(`standar-tarif/pekerjaan/${id}`, form, {
      headers: { Authorization: token },
    }),

  getPersetujuanRab: (idKapal: string) =>
    host.get(`persetujuan-rab/${idKapal}`, {
      headers: { Authorization: token },
    }),
  patchPersetujuanRab: (form: any, idKapal: string) =>
    host.patch(`persetujuan-rab/${idKapal}`, form, {
      headers: { Authorization: token },
    }),

  saveRabReparasi: (idKapal: string, edit: boolean) =>
    host.post(
      `history/${edit ? `is-edit/${idKapal}` : idKapal}`,
      {},
      {
        headers: { Authorization: token },
      }
    ),
  getHistory: (idKapal: string) =>
    host.get(`history/${idKapal}`, {
      headers: { Authorization: token },
    }),
  getHistoryPekerjaan: (idHistory: string) =>
    host.get(`history/pekerjaan/${idHistory}`, {
      headers: { Authorization: token },
    }),
  getHistoryRab: (idHistory: string) =>
    host.get(`history/rab/${idHistory}`, {
      headers: { Authorization: token },
    }),
};

export default api;
