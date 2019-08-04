import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { bindActionCreators } from 'redux';
import GridList from '@material-ui/core/GridList';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/es/Typography/Typography';
import { Button } from '@material-ui/core';
import MovieCard from '../../Cards/MovieCard';
import { getResearchedMovie } from '../../../containers/SearchPage/store/actions/search.action';

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
  button: {
    margin: theme.spacing.unit,
    color: 'white'
  }
});

// eslint-disable-next-line react/prefer-stateless-function
class SearchMoviesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      searchText: '',
    };
  }

  nextPage = () => {
    const { getResearchedMovie } = this.props;
    const { page, searchText } = this.state;
    console.log('before setState page', this.state.page);
    this.setState({ page: page + 1 }, () => {
      console.log('setState page', this.state.page);
      getResearchedMovie(searchText, page + 1);
    });
    console.log('next', page);
  };

  previousPage = () => {
    const { getResearchedMovie } = this.props;
    const { page, searchText } = this.state;
    this.setState({ page: page - 1 }, () => {
      console.log('setState page', page);
      getResearchedMovie(searchText, page - 1);
    });
    console.log('previous', page);
  };

  checkResearch = (value) => {
    const { getResearchedMovie } = this.props;
    const { page } = this.state;
    this.setState({ searchText: value, page: 1 });
    setTimeout(
      getResearchedMovie(value, 1),
      300,
    );
  };

  render() {
    const { page } = this.state;
    const { popularMovies, researchedMovies, classes } = this.props;
    let movies = [];
    if (researchedMovies) {
      if (researchedMovies.length > 0) {
        movies = researchedMovies;
      }
    } else {
      movies = popularMovies;
    }
    const movieNull = <Typography className="text-white rounded-full" variant="h6">Pas de films</Typography>;
    return (
      <React.Fragment>
        <div className="mt-12">
          <span className="text-white ml-12 font-mono text-xl">
            Tous les films
          </span>
          <Input
            autoFocus={false}
            className="w-3/12 bg-white pl-3 pr-3 mr-10 float-right rounded-lg "
            onChange={(e) => this.checkResearch(e.target.value)}
            placeholder="Rechercher ..."
          />
        </div>
        <div className="mt-12">
          {movies
            ? <GridList cellHeight={200} className="justify-center">
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </GridList> : movieNull}
          <div className="flex w-full justify-center items-center">
            <Button disabled={page === 1} className={classes.button} onClick={this.previousPage}>
              Precedent
            </Button>
            <Button className={classes.button} onClick={this.nextPage}>
              Suivant
            </Button>
          </div>
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

SearchMoviesList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(SearchMoviesList));
