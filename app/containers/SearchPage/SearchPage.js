import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchMoviesList from '../../components/Lists/SearchMoviesList';
import { getPopularMovies } from '../HomePage/store/actions/home.action';

// eslint-disable-next-line react/prefer-stateless-function
class SearchPage extends React.Component {
  componentWillMount() {
    // eslint-disable-next-line react/prop-types,react/destructuring-assignment
    this.props.getPopularMovies();
  }

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
  return bindActionCreators(
    {
      getPopularMovies
    }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
