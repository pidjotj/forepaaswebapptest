import React from 'react';
import Button from '@material-ui/core/Button';
import Image from './images/ticket.svg';
import './style.css';

// eslint-disable-next-line react/prefer-stateless-function
class Header extends React.Component {
  render() {
    // TODO Creer un ficher constante
    const title = 'MovieFinder';
    const home = 'Home';
    const search = 'Search';
    return (
      <div className="flex items-center mt-8 relative">
        <div className="flex items-center">
          <img src={Image} alt="Logo" className="w-16" />
          <span className="text-black text-xl ml-8">{title}</span>
        </div>
        <div className="flex items-center absolute right-0 mr-8">
          <Button color="primary">
            {home}
          </Button>
          <Button color="primary">
            {search}
          </Button>
        </div>
      </div>
    );
  }
}

export default Header;
