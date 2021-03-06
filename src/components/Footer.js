import React, { useState, useEffect } from 'react';

import ScribbleLogo from '../images/ScribbleLogo.png';

import '../styles/Footer.less';


// Exports the footer component for each page.
export default function Footer() {
    return <footer role="contentinfo">
        <img aria-hidden='true' src={ScribbleLogo} alt='Scribble NYC Logo'/>
        <span className='footer-text'>
            Design and Content © 2019, Operations Technology Services and Support, NYU IT
        </span>
        {/*
        <button className='primary-button'
            onClick={()=>window.open("https://www.eventbrite.com/e/scribble-nyc-2019-registration-65267143784?aff=website")}>Sign Up!</button>
        */}
        <div></div>
    </footer>
}
