import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/es/Typography/Typography';
import MovieCard from '../../Cards/MovieCard';

// eslint-disable-next-line react/prefer-stateless-function
class SearchMoviesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesFromState: [],
    };
  }

  componentDidMount() {
    const { movies } = this.props;
    if (movies) {
      console.log('~~ movies', movies);
      this.setState({ moviesFromState: movies });
    }
  }

  render() {
    const { moviesFromState } = this.state;
    const { movies } = this.props;
    const movieNull = <Typography className="text-white rounded-full" variant="h6">Pas de films</Typography>;
    if (moviesFromState) {
      console.log('okok', movies);
    }
    return (
      <div>
        {movies ? movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        )) : movieNull}
      </div>
    );
  }
}

SearchMoviesList.propTypes = {
  movies: PropTypes.object.isRequired
};

export default SearchMoviesList;
