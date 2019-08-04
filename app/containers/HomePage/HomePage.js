import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';
import { bindActionCreators } from 'redux';
import { getPopularMovies } from './store/actions/home.action';
import PopularMoviesList from '../../components/Lists/PopularMoviesList';
// eslint-disable-next-line react/prefer-stateless-function
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tenPopularMovies: [],
    };
  }

  componentWillMount() {
    // eslint-disable-next-line react/prop-types,react/destructuring-assignment
    this.props.getPopularMovies();
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { tenPopularMovies } = this.state;
    const noMovie = <div> <span>Error</span> </div>;
    const movies = <PopularMoviesList />;
    return (
      <div className="bg-scroll">
        <span className="text-white mt-8 ml-4">
          Les 10 films les plus populaires du moment
        </span>
        {tenPopularMovies !== null ? movies : noMovie}
      </div>
    );
  }
}

// TODO essaie de recuperer les infos du store au meme moment que le store en lui meme, passer le getPopularMovies dans App
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
