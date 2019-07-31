import * as Actions from '../actions/home.action';

const initialState = {
  popularMovies: []
};

// eslint-disable-next-line func-names
const homeReducer = function (state = initialState, action) {
  switch (action.type) {
    case Actions.GET_POPULAR_MOVIES: {
      return {
        ...state,
        popularMovies: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default homeReducer;
