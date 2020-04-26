import axios, { AxiosRequestConfig } from 'axios';

// create base url
export const API = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? (axios.defaults.baseURL = 'http://localhost:5000')
      : (axios.defaults.baseURL = '/api'),
});

// interceptor
API.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = window.localStorage.getItem('token') || '';

    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
