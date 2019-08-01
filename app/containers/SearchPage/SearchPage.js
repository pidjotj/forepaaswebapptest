import React from 'react';
import MovieCard from '../../components/Cards/MovieCard';

// eslint-disable-next-line react/prefer-stateless-function
class SearchPage extends React.Component {
  render() {
    return (
      <div>
        Search page
        <MovieCard />
      </div>
    );
  }
}

export default SearchPage;
