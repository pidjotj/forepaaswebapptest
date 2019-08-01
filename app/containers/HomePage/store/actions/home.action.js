import axios from 'axios';
import { API_KEY, BASE_URL } from '../../../../utils/constants';

const POPULAR_MOVIES_URL = 'discover/movie?language=en&sort_by=popularity.desc&include_adult=false&';

export const GET_POPULAR_MOVIES = 'GET_POPULAR_MOVIES';

export function getPopularMovies() {
  // eslint-disable-next-line no-console
  console.log('~~ getPopularMovies called');
  return (dispatch) => {
    // eslint-disable-next-line no-console
    console.log('return');
    axios.get(`${BASE_URL}${POPULAR_MOVIES_URL}&${API_KEY}`).then((response) => {
      console.log('~~ response', response);
      dispatch({
        type: GET_POPULAR_MOVIES,
        payload: response
      });
    }).catch((error) => {
      console.log('~~ error', error);
    });
  };
}
