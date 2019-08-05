import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BASE_URL_IMAGE } from '../../../utils/constants';

// eslint-disable-next-line react/prefer-stateless-function
class MovieDetailsCard extends Component {
  nFormatter = (num) => {
    let isNegative = false;
    isNegative = num < 0;
    let formattedNumber = null;
    num = Math.abs(num);
    if (num >= 1000000000) {
      formattedNumber = `${(num / 1000000000).toFixed(1).replace(/\.0$/, '')  }G`;
    } else if (num >= 1000000) {
      formattedNumber = `${(num / 1000000).toFixed(1).replace(/\.0$/, '')  }M`;
    } else if (num >= 1000) {
      formattedNumber = `${(num / 1000).toFixed(1).replace(/\.0$/, '')  }K`;
    } else {
      formattedNumber = num;
    }
    if (isNegative) { formattedNumber = '-' + formattedNumber }
    return formattedNumber;
  };

  render() {
    const noSynopsis = "Il n'y a pas de synopsis";
    const noTitle = 'Pas de titre';
    const noReleaseDate = '????';
    const noPoster = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUiSKTwcqe7rZMmfoFAcPG0Me7GgxmDO1Vo3mu_dCVaJf-C6lz';
    const { currentMovie, movieDetails } = this.props;
    const recettes = movieDetails.revenue - movieDetails.budget;
    const releaseDate = currentMovie.release_date.split('-');
    return (
      <div className="flex mt-8 ml-8 mb-32">
        <div className="w-4/12">
          {/* eslint-disable-next-line global-require */}
          <img src={currentMovie.poster_path !== null ? BASE_URL_IMAGE + currentMovie.poster_path : noPoster} alt="imageDetailMovie" className="w-full rounded-lg" />
        </div>
        <div className="w-8/12 text-white font-mono pl-10">
          <div>
            <span className="text-3xl mr-4">{currentMovie.title ? currentMovie.title : noTitle}</span>
            <span className="text-blue-400">({releaseDate[0] ? releaseDate[0] : noReleaseDate})</span>
          </div>
          <div className="mt-10 flex">
            <div>
              <div className="flex justify-center">
                <span className="text-blue-400">Budget</span>
              </div>
              <div className="flex justify-center">
                <span>{this.nFormatter(movieDetails.budget)} $</span>
              </div>
            </div>
            <div className="ml-32">
              <div className="flex justify-center">
                <span className="text-blue-400">Revenue</span>
              </div>
              <div className="flex justify-center">
                <span>{this.nFormatter(movieDetails.revenue)} $</span>
              </div>
            </div>
            <div className="ml-32">
              <div className="flex justify-center">
                <span className="text-blue-400">Recettes</span>
              </div>
              <div className={`flex justify-center ${recettes >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                <span>{this.nFormatter(movieDetails.revenue - movieDetails.budget)} $</span>
              </div>
            </div>
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

function mapStateToProps(state) {
  return {
    movieDetails: state.movieDetailsReducer.movieDetails
  };
}

MovieDetailsCard.propTypes = {
  currentMovie: PropTypes.object
};

export default connect(mapStateToProps)(MovieDetailsCard);
