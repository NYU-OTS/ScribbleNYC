import React, { useState, useEffect } from 'react';

import NavigationBar from '../components/NavigationBar.js';
import Footer from '../components/Footer.js';
import TopButton from '../components/BackToTopButton';

import AboutBackground from '../images/AboutBackground.svg';
import '../styles/About.less';


// The about page.
export default function About() {
    return <div className='page about'>
        <NavigationBar />

        <h1>About</h1>
        <img className='bubble-background-image' src={AboutBackground}/>

        <div className='information'>
            something


            <TopButton />
        </div>

        <Footer />
    </div>
}