import * as Actions from '../actions/search.action';

const initialState = {
  researchedMovies: [],
};

const searchReducer = function (state = initialState.researchedMovies, action) {
  switch (action.type) {
    case Actions.GET_RESEARCHED_MOVIE: {
      return {
        ...state,
        researchedMovies: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default searchReducer;
