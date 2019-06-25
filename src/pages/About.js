import React, { useState, useEffect } from 'react';

import NavigationBar from '../components/NavigationBar.js';

import Red from '../images/RedBubble2.svg';
import Yellow from '../images/YellowBubble2.svg';
import Green from '../images/GreenBubble2.svg';
import Blue from '../images/BlueBubble2.svg';
import '../styles/About.less';


// The about page.
export default function About() {
    return <div className='page about'>
        <NavigationBar />

        <h1>About</h1>
        <img src={Red}/>
        <img src={Yellow}/>
        <img src={Blue}/>
        <img src={Green}/>
    </div>
}