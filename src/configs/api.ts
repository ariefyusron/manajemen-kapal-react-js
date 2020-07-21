import axios from "axios";

const host = axios.create({
  baseURL: process.env.REACT_APP_HOST
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
      headers: { Authorization: token }
    }),
  deleteUser: (id: string) =>
    host.delete(`user/${id}`, {
      headers: { Authorization: token }
    }),

  getKapal: (id: string) =>
    host.get(`kapal/${id}`, {
      headers: { Authorization: token }
    }),
  getAllKapal: () =>
    host.get("kapal", {
      headers: { Authorization: token }
    }),
  postKapal: (form: any) =>
    host.post("kapal", form, {
      headers: { Authorization: token }
    }),
  patchKapal: (form: any, id: number) =>
    host.patch(`kapal/${id}`, form, {
      headers: { Authorization: token }
    }),
  deleteKapal: (id: string) =>
    host.delete(`kapal/${id}`, {
      headers: { Authorization: token }
    }),

  getTypeKapal: () =>
    host.get("kapal-type", {
      headers: { Authorization: token }
    }),
  postTypeKapal: (form: any) =>
    host.post("kapal-type", form, {
      headers: { Authorization: token }
    }),
  deleteTypeKapal: (id: string) =>
    host.delete(`kapal-type/${id}`, {
      headers: { Authorization: token }
    }),

  getTypeSurvey: () =>
    host.get("survey-type", {
      headers: { Authorization: token }
    }),
  postTypeSurvey: (form: any) =>
    host.post("survey-type", form, {
      headers: { Authorization: token }
    }),
  deleteTypeSurvey: (id: string) =>
    host.delete(`survey-type/${id}`, {
      headers: { Authorization: token }
    }),

  getAllPengedokan: (idKapal: string) =>
    host.get(`pengedokan/${idKapal}`, {
      headers: { Authorization: token }
    }),
  deletePengedokan: (idKapal: string, id: string) =>
    host.delete(`pengedokan/${idKapal}/${id}`, {
      headers: { Authorization: token }
    }),
  postPengedokan: (form: any, id: string) =>
    host.post(`pengedokan/${id}`, form, {
      headers: { Authorization: token }
    }),
  patchPengedokan: (form: any, idKapal: string, id: string | number) =>
    host.patch(`pengedokan/${idKapal}/${id}`, form, {
      headers: { Authorization: token }
    }),

  getAllPelayananUmum: (idKapal: string) =>
    host.get(`pelayanan-umum/${idKapal}`, {
      headers: { Authorization: token }
    }),
  deletePelayananUmum: (idKapal: string, id: string) =>
    host.delete(`pelayanan-umum/${idKapal}/${id}`, {
      headers: { Authorization: token }
    }),
  postPelayananUmum: (form: any, id: string) =>
    host.post(`pelayanan-umum/${id}`, form, {
      headers: { Authorization: token }
    }),
  patchPelayananUmum: (form: any, idKapal: string, id: string | number) =>
    host.patch(`pelayanan-umum/${idKapal}/${id}`, form, {
      headers: { Authorization: token }
    }),

  getAllKontruksiBadanKapal: (idKapal: string) =>
    host.get(`kontruksi-badan-kapal/${idKapal}`, {
      headers: { Authorization: token }
    }),
  deleteKontruksiBadanKapal: (idKapal: string, id: string) =>
    host.delete(`kontruksi-badan-kapal/${idKapal}/${id}`, {
      headers: { Authorization: token }
    }),
  postKontruksiBadanKapal: (form: any, id: string) =>
    host.post(`kontruksi-badan-kapal/${id}`, form, {
      headers: { Authorization: token }
    }),
  patchKontruksiBadanKapal: (form: any, idKapal: string, id: string | number) =>
    host.patch(`kontruksi-badan-kapal/${idKapal}/${id}`, form, {
      headers: { Authorization: token }
    })
};

export default api;
