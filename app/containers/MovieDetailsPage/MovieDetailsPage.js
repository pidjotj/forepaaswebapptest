import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MovieDetailsCard from '../../components/Cards/MovieDetailsCard';
import { getDetails } from './store/actions/details.action';

// eslint-disable-next-line react/prefer-stateless-function
class MovieDetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMovieDetails: []
    };
  }

  componentDidMount() {
    const { movieDetails } = this.props;
    console.log('~~~ movieDetails', movieDetails);
    if (movieDetails) {
      this.setState({ currentMovieDetails: movieDetails });
      console.log('~~ movieDetailsAftersetState', this.state.currentMovieDetails);
    }
  }

  render() {
    // this.props.location.state -> data from <Link to />
    // eslint-disable-next-line react/prop-types,react/destructuring-assignment
    const { movie } = this.props.location.state;
    const movieNotNull = <MovieDetailsCard currentMovie={movie} />;
    const movieNull = <span>Il ny a pas de film</span>;
    return (
      <div className="h-screen">
        MovieDetailsPage
        {movie ? movieNotNull : movieNull}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movieDetails: state.detailsReducer
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getDetails
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsPage);
