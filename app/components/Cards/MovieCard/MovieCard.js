import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { BASE_URL_IMAGE } from '../../../utils/constants';

// eslint-disable-next-line react/prefer-stateless-function
class MovieCard extends Component {
  render() {
    let temp = {};
    const { movie } = this.props;
    const releaseDate = movie.release_date.split('-');
    return (
      <div className="w-2/12 m-4">
        <Link
          to={{
            pathname: '/details',
            state: {
              movie,
            },
          }}
        >
          {/* eslint-disable-next-line global-require */}
          <div>
            <img src={BASE_URL_IMAGE + movie.poster_path} alt="MovieImage" className="border-lg rounded-lg shadow"/>
          </div>
          <div className="relative flex items-center">
            <span className="text-white font-mono rounded-full mr-2">
              {movie.title}
            </span>
            <span className="text-white font-mono rounded-full absolute right-0">
              {movie.vote_average}
            </span>
          </div>
          <span className="text-gray-800 text-sm font-mono rounded-full">
            {releaseDate[0]}
          </span>
        </Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieCard;
