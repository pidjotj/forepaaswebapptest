import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import Image from '../../images/logo.svg';
import './style.css';

// eslint-disable-next-line react/prefer-stateless-function
class Header extends React.PureComponent {
  render() {
    // TODO Creer un ficher constante
    const home = 'Home';
    const search = 'Search';
    return (
      <div className="flex items-center mt-8 relative">
        <div className="flex items-center">
          <img src={'https://cdn2.iconfinder.com/data/icons/movies-7/32/Movie_5-512.png'} alt="Logo" className="w-1/5 pl-12" />
          <Typography className="text-white" variant="h4">
            MovieFinder
          </Typography>
        </div>
        <div className="flex items-center absolute right-0 mr-12">
          <Link to="/">
            <Button color="primary" className="mr-12">
              {home}
            </Button>
          </Link>
          <Link to="/search">
            <Button color="primary">
              {search}
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
