import React from 'react';
import Image from './images/ticket.svg';
import './style.css';

// eslint-disable-next-line react/prefer-stateless-function
class Header extends React.Component {
  render() {
    const title = 'MovieFinder';
    return (
      <div className="flex items-center mt-8">
        <img src={Image} alt="Logo" className="w-16" />
        <span className="text-black text-xl ml-8">{title}</span>
      </div>
    );
  }
}

export default Header;
