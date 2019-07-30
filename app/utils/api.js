import apiBuilder from './apiBuilder';
import { API_KEY } from './constants';

export class Api {
  static getPopularMovie = () => {
    const test = 'discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&';
    apiBuilder.get(`/${test}${API_KEY}`).then((response) => {
      console.log('~~ response', response);
    }).catch((error) => {
      console.log('~~ error', error);
    });
  }
}
