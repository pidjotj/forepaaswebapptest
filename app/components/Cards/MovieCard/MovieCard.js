import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { BASE_URL_IMAGE } from '../../../utils/constants';

// eslint-disable-next-line react/prefer-stateless-function
class MovieCard extends Component {
  render() {
    let temp = {};
    const { movie } = this.props;
    return (
      <div className="w-2/12 ml-12">
        {/* eslint-disable-next-line global-require */}
        <img src={BASE_URL_IMAGE + movie.poster_path} alt="MovieImage" className="border-lg rounded-lg shadow" />
        <div className="relative flex items-center">
          <span className="text-white font-mono rounded-full">
            {movie.title}
          </span>
          <span className="text-white font-mono rounded-full absolute right-0">
            16k
          </span>
        </div>
        <span className="text-white font-mono rounded-full">
          1992
        </span>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieCard;
