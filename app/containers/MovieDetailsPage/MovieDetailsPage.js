import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class MovieDetailsPage extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line react/prop-types,react/destructuring-assignment
    const { movie } = this.props.location.state;
    console.log('movieDetailsProps', movie);
  }

  render() {
    return (
      <div>
        MovieDetailsPage
      </div>
    );
  }
}

export default MovieDetailsPage;
