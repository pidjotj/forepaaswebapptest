import * as Actions from '../actions/home.action';

const initialState = {
  popularMovies: []
};

// eslint-disable-next-line func-names
const homeReducer = function (state = initialState, action) {
  switch (action.type) {
    case Actions.GET_POPULAR_MOVIES: {
      const firstMovies = action.payload.data.results.slice(0, 10);
      console.log('firstMovies', firstMovies);
      return {
        ...state,
        popularMovies: firstMovies,
      };
    }
    default: {
      return state;
    }
  }
};

export default homeReducer;
