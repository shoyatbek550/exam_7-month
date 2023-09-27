import axios from "axios";

const commonConfig = {
  baseURL: "http://207.154.221.44:4002/api",
  headers: {
    "Content-type": "application/json",
  },
};

export const axiosLogin = axios.create(commonConfig);

export const axiosBase = axios.create(commonConfig);

axiosBase.interceptors.request.use((config) => {
  const token = typeof window !== "undefined" ? window.window.localStorage.getItem('token') : null;
  
  if (token) {
    config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
  }

  return config;
});
