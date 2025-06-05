import axios from 'axios';
import {baseUrl} from './constants/url';
import {apiToken} from './constants/api';

const axiosOptions = axios.create({
  baseURL: baseUrl,
  params: {
    language: 'en-US',
  },
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${apiToken}`,
  },
});

export default axiosOptions;
