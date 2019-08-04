import React from 'react';
import { connect } from 'react-redux';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Slider from "react-slick";
import { BASE_URL_IMAGE } from '../../../utils/constants';
import MovieCard from '../../Cards/MovieCard';
import PopularMovieCard from '../../Cards/PopularMovieCard';

const PopularMoviesList = (props) => {
  // eslint-disable-next-line react/prop-types
  const { popularMovies } = props;
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
  };
  console.log('~~ movies', popularMovies);
  const moviesNull = <span>Pas de films</span>;
  const moviesNotNull = (
    <div className="w-full h-screen">
      <Slider {...settings}>
        {popularMovies.map((movie) => (
          <div key={movie.id}>
            <PopularMovieCard movie={movie} />
          </div>
        ))}
      </Slider>
    </div>
  );
  return (
    <div className="flex items-center justify-center mt-6">
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
