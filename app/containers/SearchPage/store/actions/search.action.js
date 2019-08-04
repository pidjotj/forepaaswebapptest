import axios from 'axios';
import { BASE_URL_SEARCH } from '../../../../utils/constants';

export const GET_RESEARCHED_MOVIE = 'GET_RESEARCHED_MOVIE';

export function getResearchedMovie(term) {
  console.log('~~ getResearchedMovie called');
  console.log('~~ term', term);
  const test = term;
  return (dispatch) => {
    console.log('~~ in dispatch', test);
    axios.get(`${BASE_URL_SEARCH}${term}`).then((response) => {
      console.log('search response', response);
      dispatch({
        type: GET_RESEARCHED_MOVIE,
        payload: response.data.results
      });
    }).catch((error) => {
      console.error(error);
    });
  };
}
