import React, { useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";

import ScribbleLogo from '../images/ScribbleLogo.svg';
import '../styles/NavigationBar.less';


// The navigation bar.
export default function NavigationBar() {
    // 1.) Return the react component.
    return <nav className='navigation-bar'>
        <span className='fa fa-bars'></span>

        <img src={ScribbleLogo} alt='Scribble NYC Logo' onClick={() => {
            window.location.href = '/';
        }}/>

        <button className='nav-button nav-button-1' onClick={() => window.location.href = '/about'}>About</button>
        <button className='nav-button nav-button-2' onClick={() => window.location.href = '/lastyear'}>Last Year</button>
        <button className='nav-button nav-button-3' onClick={() => window.location.href = '/thisyear'}>This Year</button>
        <button className='nav-button nav-button-4' onClick={() => window.location.href = '/faq'}>FAQs</button>
        <button className='primary-button'>Sign Up!</button>
    </nav>
}