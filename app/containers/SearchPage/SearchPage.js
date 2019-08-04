import React from 'react';
import { connect } from 'react-redux';
import { getResearchedMovie } from './store/actions/search.action';
import SearchMoviesList from '../../components/Lists/SearchMoviesList';

// eslint-disable-next-line react/prefer-stateless-function
class SearchPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SearchMoviesList />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    popularMovies: state.moviesReducer.popularMovies,
    researchedMovies: state.movieSearchedReducer
  };
}

function mapDispatchToProps(dispatch) {
  return { getResearchedMovie: (e) => dispatch(getResearchedMovie(e)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
