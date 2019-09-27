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
        }} tabIndex={0} aria-hidden='true'></span>
        <Media query='(max-width: 768px)'>{ matches => matches ?
            (showingMobileNav ? <MobileNav /> : '')
            :
            ''
        }</Media>

        <img className='nav-image' src={ScribbleLogo}
            alt='Scribble NYC Logo'
            tabIndex={0} aria-hidden='true'
            onClick={() => {
                window.location.href = '/';
            }}
            onKeyDown={e => {
                if(e.keyCode === 13) window.location.href = '/';
            }}/>

        <button className='nav-button nav-button-1' onClick={() => window.location.href = '/about'}>About</button>
        <button className='nav-button nav-button-2' onClick={() => window.location.href = '/lastyear'}>Last Year</button>
        <button className='nav-button nav-button-3' onClick={() => window.location.href = '/thisyear'}>This Year</button>
        <button className='nav-button nav-button-4' onClick={() => window.location.href = '/faq'}>FAQs</button>
        <button className='primary-button'
            onClick={()=>window.open("https://www.eventbrite.com/e/scribble-nyc-2019-registration-65267143784?aff=website")}>Sign Up!</button>
    </nav>
}