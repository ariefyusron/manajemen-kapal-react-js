import axios from "axios";

const host = axios.create({
  baseURL: process.env.REACT_APP_HOST
});

// type body

const api = {
  postLogin: (form: { username: string; password: string }) =>
    host.post("user/login", form),
  postRegister: (form: {
    username: string;
    password: string;
    is_admin: boolean;
  }) => host.post("user/register", form)
};

export default api;
