import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
  render() {
    const { popularMovies } = this.props;
    const movieNull = <Typography className="text-white rounded-full" variant="h6">Pas de films</Typography>;
    return (
      <div className="mt-24">
        {popularMovies
          ? <GridList cellHeight={200} className="justify-center " cols={2}>
            {popularMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </GridList> : movieNull}
      </div>
    );
  }
}

SearchMoviesList.propTypes = {
  movies: PropTypes.array
};

function mapStateToProps(state) {
  return {
    popularMovies: state.moviesReducer.popularMovies
  };
}

export default connect(mapStateToProps)(SearchMoviesList);
