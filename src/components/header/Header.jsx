import React from 'react';
import CTA from './CTA';
import ME from '../../photos/thafsal-one.png';
import './Header.css';
import HeaderSocial from './HeaderSocial'
const Header = () => {
  return (
    <header id='header'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Thafsal Afreedh</h1>
        <h5 className="text-ligh">Fullstack Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="logo" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header