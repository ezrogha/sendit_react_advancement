import axios from 'axios';
import promise from 'promise';

const axiosInstance = axios.create({
  baseURL: process.env.baseURL,
  headers: { Authorization: `Bearer ${localStorage.getItem('user_token')}` },
});

axiosInstance.interceptors.request.use((config) => {
  if (localStorage.getItem('user_token')
  && config.headers.Authorization === 'Bearer null') {
    config.headers.Authorization = `Bearer ${localStorage.getItem('user_token')
    }`;
  }
  return config;
});

export default axiosInstance;
