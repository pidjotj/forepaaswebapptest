import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Image from '../../images/logo.svg';
import './style.css';

// eslint-disable-next-line react/prefer-stateless-function
class Header extends React.Component {
  render() {
    // TODO Creer un ficher constante
    const home = 'Home';
    const search = 'Search';
    return (
      <div className="flex items-center mt-8 relative">
        <div className="flex items-center">
          <img src={Image} alt="Logo" className="w-auto" />
        </div>
        <div className="flex items-center absolute right-0 mr-8">
          <Link to="/">
            <Button color="primary">
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
