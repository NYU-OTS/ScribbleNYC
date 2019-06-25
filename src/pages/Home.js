import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import ScribbleLogo from '../images/ScribbleLogo.svg';
import GreenBubble from '../images/GreenBubble1.svg';
import RedBubble from '../images/RedBubble1.svg';
import YellowBubble from '../images/YellowBubble1.svg';
import BlueBubble from '../images/BlueBubble1.svg';

import '../styles/Home.less';


export default function Home() {
    // 1.) Setup the state.
    const [goAbout, setGoAbout] = useState(false);
    const [goThisYear, setGoThisYear] = useState(false);
    const [goLastYear, setGoLastYear] = useState(false);
    const [goFAQ, setGoFAQ] = useState(false);

    // 2.) Define some functions.
    function didHover(color) {
        const yellowBubble = document.getElementById('home-yellow-bubble');
        const greenBubble = document.getElementById('home-green-bubble');
        const blueBubble = document.getElementById('home-blue-bubble');
        const redBubble = document.getElementById('home-red-bubble');
        switch(color) {
            case 'yellow':
                yellowBubble.style.width = '50vw';
                yellowBubble.style.height = '100vh';
                break;
            case 'red':
                redBubble.style.width = '50vw';
                redBubble.style.height = '100vh';
                break;
            case 'green':
                greenBubble.style.width = '50vw';
                greenBubble.style.height = '100vh';
                break;
            case 'blue':
                blueBubble.style.width = '50vw';
                blueBubble.style.height = '100vh';
                break;
        }
    }
    function didLeave(color) {
        const yellowBubble = document.getElementById('home-yellow-bubble');
        const greenBubble = document.getElementById('home-green-bubble');
        const blueBubble = document.getElementById('home-blue-bubble');
        const redBubble = document.getElementById('home-red-bubble');
        switch(color) {
            case 'yellow':
                yellowBubble.style.width = '0px';
                yellowBubble.style.height = '0px';
                break;
            case 'red':
                redBubble.style.width = '0px';
                redBubble.style.height = '0px';
                break;
            case 'green':
                greenBubble.style.width = '0px';
                greenBubble.style.height = '0px';
                break;
            case 'blue':
                blueBubble.style.width = '0px';
                blueBubble.style.height = '0px';
                break;
        }
    }

    return <div className='page home'>
       <button className='color-button' onMouseOver={didHover.bind(null, 'yellow')}
            onMouseLeave={didLeave.bind(null, 'yellow')} onClick={() => setGoLastYear(true)}>
            Last Year
        </button>
       <button className='color-button' onMouseOver={didHover.bind(null, 'red')}
            onMouseLeave={didLeave.bind(null, 'red')} onClick={() => setGoAbout(true)}>
            About
        </button>
       <button className='color-button' onMouseOver={didHover.bind(null, 'green')}
            onMouseLeave={didLeave.bind(null, 'green')} onClick={() => setGoFAQ(true)}>
            FAQs
        </button>
       <button className='color-button' onMouseOver={didHover.bind(null, 'blue')}
            onMouseLeave={didLeave.bind(null, 'blue')} onClick={() => setGoThisYear(true)}>
            This Year
        </button>

       <img id='home-green-bubble' src={GreenBubble}/>
       <img id='home-red-bubble' src={RedBubble}/>
       <img id='home-yellow-bubble' src={YellowBubble}/>
       <img id='home-blue-bubble' src={BlueBubble}/>

        <main className='signup-holder'>
            <img src={ScribbleLogo} alt='Scribble NYC Logo'/>
            <button className='primary-button'>Sign Up!</button>
        </main>

        { goAbout && <Redirect to='/about'/> }
        { goLastYear && <Redirect to='/lastyear'/> }
        { goThisYear && <Redirect to='/thisyear'/> }
        { goFAQ && <Redirect to='/faq'/> }
    </div>
}