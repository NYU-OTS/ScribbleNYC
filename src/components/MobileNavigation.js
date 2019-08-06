import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import '../styles/MobileNav.less';


export default function Home() {
    // 1.) Setup the state.
    const [goAbout, setGoAbout] = useState(false);
    const [goThisYear, setGoThisYear] = useState(false);
    const [goLastYear, setGoLastYear] = useState(false);
    const [goFAQ, setGoFAQ] = useState(false);

    // 2.) Return component.
        return <div className='mobile-nav'>
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