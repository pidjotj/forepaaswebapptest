import React, { Component } from 'react';
import Slider from 'react-slick/lib';
import PropTypes from 'prop-types';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { BASE_URL_IMAGE } from '../../../utils/constants';

// eslint-disable-next-line react/prefer-stateless-function
class PopularMoviesList extends Component {
  render() {
    const { movies } = this.props;
    const moviesNull = <span>Pas de films</span>;
    const moviesNotNull = (
      <Carousel selectedItem={0} className="w-1/3 align-center">
        {movies.map((movie) => (
          <div key={movie.id}>
            <img src={BASE_URL_IMAGE + movie.poster_path} alt="img" />
            <p className="legend">{movie.overview}</p>
          </div>
        ))}
      </Carousel>
    );
    return (
      <div className="flex items-center justify-center mt-24">
        {movies.length > 0 ? moviesNotNull : moviesNull}
      </div>
    );
  }
}

PopularMoviesList.propTypes = {
  movies: PropTypes.object.isRequired,
};

export default PopularMoviesList;
