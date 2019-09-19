import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import ScribbleLogo from '../images/ScribbleLogo.svg';
import '../styles/MobileNav.less';


export default function Home() {
    // 1.) Setup the state.
    const [goAbout, setGoAbout] = useState(false);
    const [goThisYear, setGoThisYear] = useState(false);
    const [goLastYear, setGoLastYear] = useState(false);
    const [goFAQ, setGoFAQ] = useState(false);

    // 2.) Return component.
    return <div className='mobile-nav'>
        <main className='signup-holder'>
            <img className='mobile-nav-image' src={ScribbleLogo} alt='Scribble NYC Logo'/>
            <button className='primary-button'
                onClick={()=>window.open("https://www.eventbrite.com/e/scribble-nyc-2019-registration-65267143784?aff=website")}>Sign Up!</button>
        </main>

       <button className='color-button' onClick={() => setGoLastYear(true)}>
            Last Year
        </button>
       <button className='color-button' onClick={() => setGoAbout(true)}>
            About
        </button>
       <button className='color-button' onClick={() => setGoFAQ(true)}>
            FAQs
        </button>
       <button className='color-button' onClick={() => setGoThisYear(true)}>
            This Year
        </button>

        { goAbout && <Redirect to='/about'/> }
        { goLastYear && <Redirect to='/lastyear'/> }
        { goThisYear && <Redirect to='/thisyear'/> }
        { goFAQ && <Redirect to='/faq'/> }
    </div>
}