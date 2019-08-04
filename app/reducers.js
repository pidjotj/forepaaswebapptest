/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from 'utils/history';
import homeReducer from './containers/HomePage/store/reducers/home.reducer';
import searchReducer from './containers/SearchPage/store/reducers/search.reducer';
import detailsReducer from './containers/MovieDetailsPage/store/reducers/details.reducer';

/**
 * Merges the main reducers with the router state and dynamically injected reducers
 */
export default function createReducer() {
  const rootReducer = combineReducers({
    router: connectRouter(history),
    moviesReducer: homeReducer,
    movieSearchedReducer: searchReducer,
    movieDetailsReducer: detailsReducer,
  });

  return rootReducer;
}
