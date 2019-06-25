import React from 'react';

import ScribbleLogo from '../images/ScribbleLogo.svg';

import '../styles/Home.less';


export default function Home() {
    return <div className='page home'>
       <button className='color-button'>Last Year</button>
       <button className='color-button'>About</button>
       <button className='color-button'>FAQs</button>
       <button className='color-button'>This Year</button>

        <main className='signup-holder'>
            <img src={ScribbleLogo} alt='Scribble NYC Logo'/>
            <button>Sign Up!</button>
        </main>
    </div>
}