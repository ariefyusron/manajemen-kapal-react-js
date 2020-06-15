import axios from "axios";

const host = axios.create({
  baseURL: process.env.REACT_APP_HOST
});

// type body

const api = {
  postLogin: (form: { username: string; password: string }) =>
    host.post("user/login", form)
};

export default api;
