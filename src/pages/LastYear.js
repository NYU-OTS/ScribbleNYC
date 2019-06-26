import React, { useState, useEffect } from 'react';

import NavigationBar from '../components/NavigationBar.js';
import Footer from '../components/Footer';
import TopButton from '../components/BackToTopButton';

import LastYearBackground from '../images/LastYearBackground.svg';
import '../styles/LastYear.less';


// The page describing the event for this year.
export default function ThisYear() {
    return <div className='page last-year'>
        <NavigationBar />

        <h1>Last Year<br/>2018</h1>
        <img className='bubble-background-image' src={LastYearBackground}/>
        
        <div className='information'>
            something

            <TopButton />
        </div>

        <Footer />
    </div>
}