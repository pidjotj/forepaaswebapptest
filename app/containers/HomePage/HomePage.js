import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPopularMovies } from './store/actions/home.action';
import axios from 'axios';
import { API_KEY, BASE_URL } from '../../utils/constants';
import PopularMoviesList from '../../components/PopularMoviesList';

// eslint-disable-next-line react/prefer-stateless-function
class HomePage extends Component {
  componentWillMount() {
    getPopularMovies();
    const POPULAR_MOVIES_URL = 'discover/movie?language=en&sort_by=popularity.desc&include_adult=false&';
    axios.get(`${BASE_URL}${POPULAR_MOVIES_URL}&${API_KEY}`).then((response) => {
      console.log('~~ easyResponse', response);
    }).catch((error) => {
      console.log(error.status);
    });
  }

  render() {
    console.log('~~ popularMovies', this.props.popularMovies);
    return (
      <div>
        <PopularMoviesList />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    popularMovies: state.moviesReducer
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getPopularMovies
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
