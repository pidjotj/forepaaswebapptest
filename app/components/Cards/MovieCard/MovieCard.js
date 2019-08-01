import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

// eslint-disable-next-line react/prefer-stateless-function
class MovieCard extends Component {
  render() {
    return (
      <div className="w-2/12">
        {/* eslint-disable-next-line global-require */}
        <img src={require('../../../images/troie.jpg')} alt="MovieImage" className="border-lg" />
        <div className="relative flex items-center">
          <Typography className="text-white rounded-full" variant="h7">
            Troy
          </Typography>
          <Typography className="text-white rounded-full absolute right-0" variant="h7">
            16k
          </Typography>
        </div>
        <Typography className="text-white rounded-full" variant="h7">
          1992
        </Typography>
      </div>
    );
  }
}

export default MovieCard;
