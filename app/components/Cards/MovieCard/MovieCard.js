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
      <div className="w-2/12">
        {/* eslint-disable-next-line global-require */}
        <img src={BASE_URL_IMAGE + movie.poster_path} alt="MovieImage" className="border-lg" />
        <div className="relative flex items-center">
          <Typography className="text-white rounded-full" variant="h6">
            {movie.title}
          </Typography>
          <Typography className="text-white rounded-full absolute right-0" variant="h6">
            16k
          </Typography>
        </div>
        <Typography className="text-white rounded-full" variant="h6">
          1992
        </Typography>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieCard;
