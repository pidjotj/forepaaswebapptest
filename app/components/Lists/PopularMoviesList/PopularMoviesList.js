import React, { Component } from 'react';
import Slider from 'react-slick/lib';
import PropTypes from 'prop-types';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

// eslint-disable-next-line react/prefer-stateless-function
class PopularMoviesList extends Component {
  render() {
    const { movies } = this.props;
    console.log('PopularMoviesList', this.props.movies[0]);
    return (
      <div>
        <Carousel selectedItem={2}>
          <div>
            <img src={require('../../../images/troie.jpg')} alt="img" />
            <p className="legend">lllll</p>
          </div>
          <div>
            <img src="../../../images/troie.jpg" alt="img" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="../../../images/troie.jpg" alt="img" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div>
    );
  }
}

PopularMoviesList.propTypes = {
  movies: PropTypes.object.isRequired,
};

export default PopularMoviesList;
