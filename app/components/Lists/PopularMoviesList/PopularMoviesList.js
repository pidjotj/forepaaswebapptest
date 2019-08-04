import React from 'react';
import { connect } from 'react-redux';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { BASE_URL_IMAGE } from '../../../utils/constants';

const PopularMoviesList = (props) => {
  // eslint-disable-next-line react/prop-types
  const { popularMovies } = props;
  console.log('~~ movies', popularMovies);
  const moviesNull = <span>Pas de films</span>;
  const moviesNotNull = (
    <Carousel selectedItem={0} className="w-1/3 align-center">
      {popularMovies.map((movie) => (
        <div key={movie.id}>
          <img src={BASE_URL_IMAGE + movie.poster_path} alt="img" />
          <p className="legend">{movie.overview}</p>
        </div>
      ))}
    </Carousel>
  );
  return (
    <div className="flex items-center justify-center mt-24">
      {popularMovies ? moviesNotNull : moviesNull}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    popularMovies: state.moviesReducer.popularMovies
  };
}

export default connect(mapStateToProps)(PopularMoviesList);
