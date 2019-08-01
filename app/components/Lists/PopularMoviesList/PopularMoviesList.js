import React, { Component } from 'react';
import Slider from 'react-slick/lib';

// eslint-disable-next-line react/prefer-stateless-function
class PopularMoviesList extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <span>1</span>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}

export default PopularMoviesList;
