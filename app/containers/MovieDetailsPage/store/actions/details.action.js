import axios from 'axios';
import { API_KEY, BASE_URL_DETAILS } from '../../../../utils/constants';

export const GET_DETAILS = 'GET_DETAILS';

// eslint-disable-next-line camelcase
export function getDetails(movie_id) {
  console.log('~~ getDetailsCalled');
  return (dispatch) => {
    axios.get(`${BASE_URL_DETAILS}${movie_id}?${API_KEY}`).then((response) => {
      console.log('~~ details reponse', response);
      dispatch({
        type: GET_DETAILS,
        payload: response
      });
    }).catch((error) => {
      console.error('~~ detailsError', error);
    });
  };
}
