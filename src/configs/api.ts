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
    })
};

export default api;
