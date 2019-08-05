import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import './style.css';

const styles = (theme) => ({
  button: {
    margin: theme.spacing.unit,
    color: 'white'
  }
});
// eslint-disable-next-line react/prefer-stateless-function
class Header extends React.PureComponent {
  render() {
    // TODO Creer un ficher constante
    const title = 'MOVIE';
    const titleBis = 'FINDER';
    const home = 'Acceuil';
    const search = 'Recherche';
    const { classes } = this.props;
    return (
      <div className="flex items-center mt-8">
        <Link to="/">
          <div className="flex md:w-full items-center">
            <img src={'https://cdn2.iconfinder.com/data/icons/movies-7/32/Movie_5-512.png'} alt="Logo" className="w-1/6 pl-12" />
            <span className="ml-8 font-mono text-white text-2xl italic">
              {title}
            </span>
            <span className="font-mono text-blue-400 text-2xl italic">
              {titleBis}
            </span>
          </div>
        </Link>
        <div className="flex items-center float-right ml-12 mt-2">
          <Link to="/">
            <Button color="primary" className={classes.button}>
              {home}
            </Button>
            <span className="text-white">|</span>
          </Link>
          <Link to="/search">
            <Button color="primary" className={classes.button}>
              {search}
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
