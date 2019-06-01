import axios from 'axios';
import * as apiConfig from './apiConfig';

const axiosInstance = axios.create({
  responseType: 'json',
  baseURL: apiConfig.basePath,
});

export default axiosInstance;
