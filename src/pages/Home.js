import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import ScribbleLogo from '../images/ScribbleLogo.svg';

import BubbleBackground from '../images/SlideTemplateFull.png';

import '../styles/Home.less';


export default function Home() {
    // 1.) Setup the state.
    const [goAbout, setGoAbout] = useState(false);
    const [goThisYear, setGoThisYear] = useState(false);
    const [goLastYear, setGoLastYear] = useState(false);
    const [goFAQ, setGoFAQ] = useState(false);

    // 2.) Return the component.
    return <main class="home">
      <img id='home-background' src={BubbleBackground} alt=""></img>
      <div class="layout">
          <img id="scribbleLogo" src={ScribbleLogo} alt='Scribble NYC Logo'/>
          <button className='primary-button layout__button--signup'
              tabIndex={0}
              onClick={()=>window.open("https://www.eventbrite.com/e/scribble-nyc-2019-registration-65267143784?aff=website")}>
              Sign Up!
          </button>

         <button id="thisYearButton" className='color-button' tabIndex={0} onClick={() => setGoThisYear(true)}>
              This Year
          </button>
          <button id="aboutButton" className='color-button' tabIndex={0} onClick={() => setGoAbout(true)}>
              About
          </button>
          <button id="faqButton" className='color-button' tabIndex={0} onClick={() => setGoFAQ(true)}>
              FAQs
          </button>
          <button id="lastYearButton" className='color-button' tabIndex={0} onClick={() => setGoLastYear(true)}>
              Last Year
          </button>

          { goAbout && <Redirect to='/about'/> }
          { goLastYear && <Redirect to='/lastyear'/> }
          { goThisYear && <Redirect to='/thisyear'/> }
          { goFAQ && <Redirect to='/faq'/> }
        </div>
      </main>

}
