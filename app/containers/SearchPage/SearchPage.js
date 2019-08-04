import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MovieCard from '../../components/Cards/MovieCard';
import { getResearchedMovie } from './store/actions/search.action';
import { BASE_URL_SEARCH } from '../../utils/constants';
import SearchMoviesList from '../../components/Lists/SearchMoviesList';
import SearchInput from '../../components/SearchInput';

// eslint-disable-next-line react/prefer-stateless-function
class SearchPage extends React.Component {
  checkResearch = (value) => {
    const { getResearchedMovie } = this.props;

    setTimeout(
      getResearchedMovie(value),
      300,
    );
  };

  render() {
    return (
      <div>
        {/* eslint-disable-next-line react/prop-types */}
        <SearchInput onChange={(value) => this.checkResearch(value)} />
        <SearchMoviesList />
      </div>
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
