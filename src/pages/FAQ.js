import React, { useState, useEffect } from 'react';

import NavigationBar from '../components/NavigationBar.js';
import Footer from '../components/Footer.js';
import TopButton from '../components/BackToTopButton';

import FAQBackground from '../images/FAQBackground.svg';
import '../styles/FAQ.less';


// The about page.
export default function FAQ() {
    return <div className='page faq'>
        <NavigationBar />

        <h1>Frequently Asked Questions</h1>
        <img className='bubble-background-image' src={FAQBackground}/>

        <div className='information'>
            something

            <TopButton />
        </div>

        <Footer />
    </div>
}