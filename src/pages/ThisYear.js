import React, { useState, useEffect } from 'react';

import NavigationBar from '../components/NavigationBar.js';
import Footer from '../components/Footer';
import TopButton from '../components/BackToTopButton';

import ThisYearBackground from '../images/ThisYearBackground.svg';
import '../styles/ThisYear.less';


// The page describing the event for this year.
export default function ThisYear() {
    return <div className='page this-year'>
        <NavigationBar />

        <h1>This Year</h1>
        <img className='bubble-background-image' src={ThisYearBackground}/>

        <main className='information'>
            something

            <TopButton />
        </main>

        <Footer />
    </div>
}