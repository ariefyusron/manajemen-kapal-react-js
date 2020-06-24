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
  getTypeSurvey: () =>
    host.get("survey-type", {
      headers: { Authorization: token }
    })
};

export default api;
