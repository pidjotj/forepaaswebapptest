import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackwardIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';
import MovieDetailsCard from '../../components/Cards/MovieDetailsCard';
import { getDetails } from './store/actions/details.action';

const styles = (theme) => ({
  margin: {
    margin: theme.spacing.unit,
    color: 'white',
    fontSize: 50,
    marginLeft: 32,
    marginTop: 24
  }
});

// eslint-disable-next-line react/prefer-stateless-function
class MovieDetailsPage extends Component {
  componentWillMount() {
    const { getDetails } = this.props;
    const { movie } = this.props.location.state;
    getDetails(movie.id);
  }

  render() {
    // this.props.location.state -> data from <Link to />
    // eslint-disable-next-line react/prop-types,react/destructuring-assignment
    const { movie } = this.props.location.state;
    const { classes } = this.props;
    const movieNotNull = <MovieDetailsCard currentMovie={movie} />;
    const movieNull = <span>Il ny a pas de film</span>;
    return (
      <div className="h-screen">
        <Link to={'/search'}>
          <IconButton aria-label="back" className={classes.margin} size="small">
            <ArrowBackwardIcon fontSize="inherit"/>
          </IconButton>
          {movie ? movieNotNull : movieNull}
        </Link>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getDetails
    }, dispatch);
}

MovieDetailsPage.propTypes = {
  classes: PropTypes.object.isRequired,
  getDetails: PropTypes.func.isRequired
};

export default withStyles(styles)(connect(null, mapDispatchToProps)(MovieDetailsPage));
