import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './style.css';

// eslint-disable-next-line react/prefer-stateless-function
class Header extends React.PureComponent {
  render() {
    // TODO Creer un ficher constante
    const title = 'MOVIE';
    const titleBis = 'FINDER';
    const home = 'Acceuil';
    const search = 'Recherche';
    return (
      <div className="flex items-center mt-8 relative">
        <Link to="/">
          <div className="flex items-center">
            <img src={'https://cdn2.iconfinder.com/data/icons/movies-7/32/Movie_5-512.png'} alt="Logo" className="w-1/6 pl-12" />
            <span className="ml-8 font-mono text-white text-2xl italic">
              {title}
            </span>
            <span className="font-mono text-blue-400 text-2xl italic">
              {titleBis}
            </span>
          </div>
        </Link>
        <div className="flex items-center absolute right-0 mr-12">
          <Link to="/">
            <Button color="primary">
              {home}
            </Button>
            <span className="text-white">|</span>
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
