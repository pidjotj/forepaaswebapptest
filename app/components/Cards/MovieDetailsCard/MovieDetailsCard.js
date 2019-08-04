import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BASE_URL_IMAGE } from '../../../utils/constants';

// eslint-disable-next-line react/prefer-stateless-function
class MovieDetailsCard extends Component {
  render() {
    const currentMovie = this.props.movie;
    return (
      <div className="flex flex-row">
        <div>
          {/* eslint-disable-next-line global-require */}
          <img src={BASE_URL_IMAGE + currentMovie.poster_path} alt="imageDetailMovie" className="w-1/4"/>
        </div>
        <div>
          <span className="max-w-lg text-white ">{currentMovie.overview}</span>
        </div>
      </div>
    );
  }
}

MovieDetailsCard.propTypes = {
  movie: PropTypes.object.isRequired
};

export default MovieDetailsCard;
