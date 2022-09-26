import axios from 'axios';
const API = axios.create({ baseURL: `http://localhost:5000/` });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('user')) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem('user')).token
    }`;
  }
  return req;
});

export const login = (userData) => API.post(`/user/login`, userData);
export const register = (userData) => API.post(`/user/register`, userData);

export const getReport = () => API.get(`/report`);
export const setReport = (data) => API.post(`/report`, data);
