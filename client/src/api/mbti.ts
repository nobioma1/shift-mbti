import axios from 'axios';

export const mbtiApi = axios.create({
  baseURL: process.env.API_URL,
});
