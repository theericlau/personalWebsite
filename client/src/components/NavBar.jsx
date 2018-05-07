import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div className="header">
        <div className="navbar-header">Eric Lau</div>
        <ul id="main-menu">
        <li>
          {/* <Link to="/portfolio" className="header-link"> */}
            <span>portfolio</span>
          {/* </Link> */}
        </li>
        <li>
          {/* <Link to="/photography" className="header-link"> */}
            <span>photography</span>
          {/* </Link> */}
        </li>
        <li>
          {/* <Link to="/about" className="header-link"> */}
            <span>about</span>
          {/* </Link> */}
        </li>
        <li>
          {/* <Link to="/contact" className="header-link"> */}
            <span>contact</span>
          {/* </Link> */}
        </li>
        </ul>
        <div className="footer">
          <div className="social-icon-block">
            <a href="https://www.instagram.com/theericlau/"><img className="social-ico" src="https://6fae29wby9-flywheel.netdna-ssl.com/wp-content/themes/marvel-child/assets/instagram.png" alt="Instagram"/></a>
            <a href="https://www.youtube.com/c/theericlau"><img className="social-ico" src="https://6fae29wby9-flywheel.netdna-ssl.com/wp-content/themes/marvel-child/assets/youtube.png" alt="Youtube" /></a>
            <a href="https://twitter.com/theericlau"><img className="social-ico" src="https://6fae29wby9-flywheel.netdna-ssl.com/wp-content/themes/marvel-child/assets/twitter.png" alt="Twitter" /></a>
          </div>
          <div className="copyright-text">
            <p>© Eric Lau 2018</p>
          </div>

        </div>
      </div>
    )
  }
}

NavBar.propTypes = {

};

export default NavBar;