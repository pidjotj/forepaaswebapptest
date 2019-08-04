import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BASE_URL_IMAGE } from '../../../utils/constants';

// eslint-disable-next-line react/prefer-stateless-function
class PopularMovieCard extends Component {
  render() {
    const { movie } = this.props;
    const releaseDate = movie.release_date.split('-');
    const noPoster = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUiSKTwcqe7rZMmfoFAcPG0Me7GgxmDO1Vo3mu_dCVaJf-C6lz';
    return (
      <div className="h-auto p-4">
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
            <img src={movie.poster_path ? BASE_URL_IMAGE + movie.poster_path : noPoster} alt="MovieImage" className="border-lg rounded-lg shadow" />
          </div>
          <span className="text-white text-sm font-mono rounded-full pt-2 pr-2">
            {movie.title}
          </span>`
          <div className="relative flex items-center">
            <span className="text-gray-800 text-sm font-mono rounded-full">
              {releaseDate[0]}
            </span>
            <span className="text-white text-sm font-mono rounded-full absolute right-0">
              {movie.vote_average}/10
            </span>
          </div>
        </Link>
      </div>
    );
  }
}

PopularMovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default PopularMovieCard;
