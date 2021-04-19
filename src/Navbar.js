import React, { useEffect, useState } from 'react';
import logo from './assests/netflix_logo.png';
import avatar from './assests/Netflix-avatar.png';
import './navbar.css';
import { useHistory } from 'react-router';
import tmdb_logo from './assests/tmdb_logo.svg';
function Navbar() {
  const [shownav, setShowNav] = useState(false);
  const history = useHistory();
  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', transitionNavbar);
    return () => {
      window.removeEventListener('scroll', transitionNavbar);
    };
  }, []);
  return (
    <div className={`nav ${shownav && 'nav__black'}`}>
      <div className='nav__contents'>
        <img
          src={logo}
          alt='netflix-logo'
          className='nav__logo'
          onClick={() => history.push('/')}
        />
        <img src={tmdb_logo} alt='tmdb' className='nav__tmdblogo' />
        <img
          src={avatar}
          alt='netflix-avatar'
          className='nav__avatar'
          onClick={() => history.push('./profile')}
        />
      </div>
    </div>
  );
}

export default Navbar;
