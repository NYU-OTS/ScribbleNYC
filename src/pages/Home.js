import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import ScribbleLogo from '../images/ScribbleLogo.svg';
import BubbleBackground from '../images/SlideTemplateFull.svg';
// import GreenBubble from '../images/GreenBubble1.svg';
// import RedBubble from '../images/RedBubble1.svg';
// import YellowBubble from '../images/YellowBubble1.svg';
// import BlueBubble from '../images/BlueBubble1.svg';

import '../styles/Home.less';


export default function Home() {
    // 1.) Setup the state.
    const [goAbout, setGoAbout] = useState(false);
    const [goThisYear, setGoThisYear] = useState(false);
    const [goLastYear, setGoLastYear] = useState(false);
    const [goFAQ, setGoFAQ] = useState(false);

    // 2.) Return the component.
    return <div className='page home'>
        <main className='signup-holder'>
            <img src={ScribbleLogo} alt='Scribble NYC Logo'/>
            <button className='primary-button'>Sign Up!</button>
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

       <img id='home-background' src={BubbleBackground}/>

        { goAbout && <Redirect to='/about'/> }
        { goLastYear && <Redirect to='/lastyear'/> }
        { goThisYear && <Redirect to='/thisyear'/> }
        { goFAQ && <Redirect to='/faq'/> }
    </div>
}