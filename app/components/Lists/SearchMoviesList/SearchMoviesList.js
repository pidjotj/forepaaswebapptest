import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/es/Typography/Typography';
import MovieCard from '../../Cards/MovieCard';

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
});

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
      <div className="mt-24">
        {movies
          ? <GridList cellHeight={200} className="justify-center " cols={2}>
            {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
          </GridList> : movieNull}
      </div>
    );
  }
}

SearchMoviesList.propTypes = {
  movies: PropTypes.object.isRequired
};

export default SearchMoviesList;
