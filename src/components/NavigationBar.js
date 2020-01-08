import React, { useState, useEffect } from 'react';
import Media from 'react-media';
import { Redirect } from "react-router-dom";

import MobileNav from './MobileNavigation';
import ScribbleLogo from '../images/ScribbleLogo.svg';
import '../styles/NavigationBar.less';


// The navigation bar.
export default function NavigationBar() {
    const [showingMobileNav, setShowMobileNav] = useState(false);

    // 1.) Return the react component.
    return <nav className='navigation-bar'>
        <span className={showingMobileNav ? 'fas fa-times' : 'fa fa-bars'} onClick={() => {
            setShowMobileNav(!showingMobileNav);
        }} aria-hidden='false'></span>
        <Media query='(max-width: 768px)'>{ matches => matches ?
            (showingMobileNav ? <MobileNav /> : '')
            :
            ''
        }</Media>

        <a className="skip-nav" href="#main">Skip to main content?</a>

        <a href = '/' aria-hidden='false' aria-label="navigate back to home page">
          <img className='nav__logo' src={ScribbleLogo}
              alt='Scribble NYC Logo'
              />
        </a>
        <div>
          <a className='nav__button' href='/' id="homeButton">Home</a>
          <a className='nav__button' href='/about' id="aboutButton">About</a>
          <a className='nav__button' href='/2018' id="lastYearButton">Past years</a>
          <a className='nav__button' href='/faq' id="faqButton">FAQs</a>
          {/*
          <button className='nav__button nav__signupButton'
              onClick={()=>window.open("https://www.eventbrite.com/e/scribble-nyc-2019-registration-65267143784?aff=website")}>Sign Up!</button>
          */}
        </div>
    </nav>
}
