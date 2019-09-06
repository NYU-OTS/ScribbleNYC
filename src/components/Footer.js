import React, { useState, useEffect } from 'react';

import ScribbleLogo from '../images/ScribbleLogo.svg';

import '../styles/Footer.less';


// Exports the footer component for each page.
export default function Footer() {
    return <footer>
        <img src={ScribbleLogo} alt='Scribble NYC Logo'/>
        <p className='footer-text'>Design and Content © 2019, Operations Technology Services and Support, NYU IT</p>
        <button className='primary-button'>Sign Up!</button>
    </footer>
}