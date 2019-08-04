import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BASE_URL_IMAGE } from '../../../utils/constants';

// eslint-disable-next-line react/prefer-stateless-function
class MovieDetailsCard extends Component {
  render() {
    const noSynopsis = "Il n'y a pas de synopsis";
    const noTitle = 'Pas de titre';
    const noReleaseDate = '????';
    const noPoster = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUiSKTwcqe7rZMmfoFAcPG0Me7GgxmDO1Vo3mu_dCVaJf-C6lz';
    const { currentMovie } = this.props;
    const releaseDate = currentMovie.release_date.split('-');
    return (
      <div className="flex flex-row align-center justify-center content-center mt-8 ml-8">
        <div className="items-center w-4/12">
          {/* eslint-disable-next-line global-require */}
          <img src={currentMovie.poster_path !== null ? BASE_URL_IMAGE + currentMovie.poster_path : noPoster} alt="imageDetailMovie" className="w-full rounded-lg" />
        </div>
        <div className="w-8/12 text-white font-mono pl-10">
          <div>
            <span className="text-3xl mr-4">{currentMovie.title ? currentMovie.title : noTitle}</span>
            <span className="text-blue-400">({releaseDate[0] ? releaseDate[0] : noReleaseDate})</span>
          </div>
          <div className="w-10/12 mt-12">
            <div className="mb-5">
              <span className="text-2xl">Synopsis</span>
            </div>
            <span>{currentMovie.overview ? currentMovie.overview : noSynopsis}</span>
          </div>
        </div>
      </div>
    );
  }
}

MovieDetailsCard.propTypes = {
  currentMovie: PropTypes.object
};

export default MovieDetailsCard;