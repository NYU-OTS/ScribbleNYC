import React, { useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";

import ScribbleLogo from '../images/ScribbleLogo.svg';
import '../styles/NavigationBar.less';


// The navigation bar.
export default function NavigationBar() {
    // 1.) Setup the state.
    const [goAbout, setGoAbout] = useState(false);
    const [goThisYear, setGoThisYear] = useState(false);
    const [goLastYear, setGoLastYear] = useState(false);
    const [goFAQ, setGoFAQ] = useState(false);

    // .) Return the react component.
    return <nav className='navigation-bar'>
        <img src={ScribbleLogo} alt='Scribble NYC Logo'/>

        <button className='nav-button nav-button-1' onClick={() => setGoAbout(true)}>About</button>
        <button className='nav-button nav-button-2' onClick={() => setGoLastYear(true)}>Last Year</button>
        <button className='nav-button nav-button-3' onClick={() => setGoThisYear(true)}>This Year</button>
        <button className='nav-button nav-button-4' onClick={() => setGoFAQ(true)}>FAQs</button>
        <button className='primary-button'>Sign Up!</button>

        { goAbout && <Redirect to='/about'/> }
        { goLastYear && <Redirect to='/lastyear'/> }
        { goThisYear && <Redirect to='/thisyear'/> }
        { goFAQ && <Redirect to='/faq'/> }
    </nav>
}