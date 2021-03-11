import axios from 'axios';

axios.interceptors.request.use((config) => {
  config.baseURL = process.env.REACT_APP_API_URL;
  return config;
},
(error) => Promise.reject(error));
