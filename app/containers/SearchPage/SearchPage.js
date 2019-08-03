import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MovieCard from '../../components/Cards/MovieCard';
import { getResearchedMovie } from './store/actions/search.action';
import { BASE_URL_SEARCH } from '../../utils/constants';
import { getPopularMovies } from '../HomePage/store/actions/home.action';
import SearchMoviesList from '../../components/Lists/SearchMoviesList';

// eslint-disable-next-line react/prefer-stateless-function
class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tenPopularMovies: [],
      moviesResearched: [],
    };
  }

  componentDidMount() {
    // PopularMovies before the forst research
    // eslint-disable-next-line react/destructuring-assignment,react/prop-types
    if (this.props.popularMovies) {
      // eslint-disable-next-line react/prop-types,react/destructuring-assignment
      const tempPopularMovies = this.props.popularMovies.popularMovies.data.results.slice(0, 10);
      console.log('~~ tempPop', tempPopularMovies);
      this.setState({ tenPopularMovies: tempPopularMovies });
    }
  }

  render() {
    const { tenPopularMovies } = this.state;
    let temp = [];
    console.log(BASE_URL_SEARCH);
    console.log('search ten pops', tenPopularMovies);
    if (tenPopularMovies) {
      temp = tenPopularMovies;
      console.log('temp', temp);
    }
    return (
      <div>
        <SearchMoviesList movies={temp} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    popularMovies: state.moviesReducer,
    researchedMovies: state.movieSearchedReducer
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getResearchedMovie,
      getPopularMovies
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
