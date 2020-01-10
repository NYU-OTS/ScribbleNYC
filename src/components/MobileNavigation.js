import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import ScribbleLogo from '../images/ScribbleLogo.svg';
import '../styles/MobileNav.less';


export default function Home() {
    // 1.) Setup the state.
    const [goHome, setGoHome] = useState(false);
    const [goAbout, setGoAbout] = useState(false);
    const [goThisYear, setGoThisYear] = useState(false);
    const [goLastYear, setGoLastYear] = useState(false);
    const [goFAQ, setGoFAQ] = useState(false);

    // 2.) Return component.
    return <div className='mobile-nav'>
      <button className='color-button' onClick={() => setGoHome(true)}>
        <img className='mobile-nav-image' src={ScribbleLogo} alt='Scribble NYC Logo'/>
      </button>

      <button className='color-button' onClick={() => setGoHome(true)}>
        Home
      </button>
      <button className='color-button' onClick={() => setGoAbout(true)}>
        About
      </button>
      <button className='color-button' onClick={() => setGoLastYear(true)}>
        Past Years
      </button>
      <button className='color-button' onClick={() => setGoFAQ(true)}>
        FAQs
      </button>

      { goHome && <Redirect to='/'/> }
      { goAbout && <Redirect to='/about'/> }
      { goLastYear && <Redirect to='/2018'/> }
      { goThisYear && <Redirect to='/2019'/> }
      { goFAQ && <Redirect to='/faq'/> }
    </div>
}
