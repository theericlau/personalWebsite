import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Header = props => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to='/'>Portfolio</Link></li>
          <li><Link to='/photography'>Photography</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {

};

export default Header;