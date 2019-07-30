import axios from 'axios/index';

const BASE_URL = 'https://api.themoviedb.or/3/';

export default axios.create({
  baseURL: BASE_URL,
  responseType: 'json',
});
