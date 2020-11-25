import axios from 'axios';

const baseAPI = (baseURL: string) => {
  const api = axios.create({
    baseURL,
  });

  return api;
};

export default baseAPI;
