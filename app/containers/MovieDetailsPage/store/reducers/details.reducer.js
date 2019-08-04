import * as Actions from '../actions/details.action';

const initialState = {
  movieDetails: []
};

// eslint-disable-next-line func-names
const detailsReducer = function (state = initialState, action) {
  switch (action.type) {
    case Actions.GET_DETAILS: {
      return {
        ...state,
        movieDetails: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default detailsReducer;
