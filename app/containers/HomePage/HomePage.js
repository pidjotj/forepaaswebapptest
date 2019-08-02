import React, { Component } from 'react';
import { connect } from 'react-redux';
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

  componentDidMount() {
    if (this.props.popularMovies) {
      // eslint-disable-next-line react/prop-types,react/destructuring-assignment
      const tempPopularMovies = this.props.popularMovies.popularMovies.data.results.slice(0, 10);
      console.log('~~ tempPop', tempPopularMovies);
      this.setState({ tenPopularMovies: tempPopularMovies });
    }
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { tenPopularMovies } = this.state;
    const noMovie = <div> <span>Error</span> </div>;
    const movies = <PopularMoviesList movies={tenPopularMovies} />;
    return (
      <div>
        {tenPopularMovies !== [] ? movies : noMovie}
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
