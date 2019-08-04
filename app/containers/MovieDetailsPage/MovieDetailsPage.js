import React from 'react';
import MovieDetailsCard from '../../components/Cards/MovieDetailsCard';

// eslint-disable-next-line react/prefer-stateless-function
class MovieDetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMovie: [],
    };
  }
  componentDidMount() {
    // eslint-disable-next-line react/prop-types,react/destructuring-assignment
    const { movie } = this.props.location.state;
    console.log('movieDetailsProps', movie);
    if (movie) {
      this.setState({ currentMovie: movie });
    }
  }

  render() {
    const { currentMovie } = this.state;
    const movieNotNull = <MovieDetailsCard movie={currentMovie} />;
    const movieNull = <span>Il ny a pas de film</span>;
    return (
      <div>
        MovieDetailsPage
        {currentMovie ? movieNotNull : movieNull}
      </div>
    );
  }
}

export default MovieDetailsPage;
