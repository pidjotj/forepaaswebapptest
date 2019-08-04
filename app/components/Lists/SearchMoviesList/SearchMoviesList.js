import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { bindActionCreators } from 'redux';
import GridList from '@material-ui/core/GridList';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/es/Typography/Typography';
import MovieCard from '../../Cards/MovieCard';
import { getResearchedMovie } from '../../../containers/SearchPage/store/actions/search.action';
import { getPopularMovies } from '../../../containers/HomePage/store/actions/home.action';

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
  checkResearch = (value) => {
    const { getResearchedMovie } = this.props;

    setTimeout(
      getResearchedMovie(value),
      300,
    );
  };

  render() {
    const { popularMovies, researchedMovies } = this.props;
    let movies = [];
    if (researchedMovies.length > 0) {
      movies = researchedMovies;
    } else {
      movies = popularMovies;
    }
    const movieNull = <Typography className="text-white rounded-full" variant="h6">Pas de films</Typography>;
    return (
      <React.Fragment>
        <div className="mt-12 ">
          <Input
            autoFocus
            className="w-4/12 bg-white pl-3 pr-3 rounded-lg"
            onChange={(e) => this.checkResearch(e.target.value)}
            placeholder="Rechercher ..."
          />
        </div>
        <div className="mt-12">
          {movies
            ? <GridList cellHeight={200} className="justify-center " cols={2}>
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </GridList> : movieNull}
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    popularMovies: state.moviesReducer.popularMovies,
    researchedMovies: state.movieSearchedReducer.researchedMovies
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getResearchedMovie
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchMoviesList);
